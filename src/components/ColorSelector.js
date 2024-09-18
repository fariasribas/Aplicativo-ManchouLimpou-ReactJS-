import React, { useState, useRef, useEffect } from "react";
import { scroller } from "react-scroll";
import guidesIndex from "./guidesIndex"; // Importar o índice dos guias
import "./styles.css";

const ColorSelector = ({ onSelectColor }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGuides, setFilteredGuides] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState(null); // Estado para o guia selecionado

  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);
  const guideContainerRef = useRef(null);

  const colors = [
    { name: "Vermelho", color: "#FF6F61" },
    { name: "Azul", color: "#00A8E1" },
    { name: "Verde", color: "#4CAF50" },
    { name: "Amarelo", color: "#F9D71C" },
    { name: "Roxo", color: "#9C27B0" },
    { name: "Bege", color: "#dbb0a6" },
    { name: "Preto", color: "#333333" },
    { name: "Marrom", color: "#8C6A5A" },
  ];

  useEffect(() => {
    // Fecha as sugestões quando o usuário clica fora do campo de pesquisa ou da lista de sugestões
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (guideContainerRef.current && selectedGuide) {
      guideContainerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [selectedGuide]);

  const handleClick = (color) => {
    onSelectColor(color);
    // Adiciona um pequeno delay para garantir que o estado seja limpo
    setSelectedGuide(null);
    setTimeout(() => {
      scroller.scrollTo("tone-selector", {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }, 10);
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    setShowSuggestions(true);

    // Filtra os guias com base no termo de pesquisa
    const results = guidesIndex.filter((guide) =>
      guide.title.toLowerCase().includes(value)
    );
    setFilteredGuides(results);
  };

  const handleGuideClick = async (guide) => {
    try {
      // Atualiza o guia selecionado e rola para a nova seção
      setSelectedGuide(guide);
      scroller.scrollTo("guide-content", {
        duration: 800,
        smooth: "easeInOutQuart",
      });
      setShowSuggestions(false); // Oculta as sugestões após a seleção

      // Carrega o conteúdo HTML do guia selecionado
      const response = await fetch(
        `/stain-guides/${guide.stainType.toLowerCase().replace(/\s/g, "")}.html`
      );
      const text = await response.text();
      setSelectedGuide((prev) => ({ ...prev, content: text }));
    } catch (error) {
      setSelectedGuide((prev) => ({
        ...prev,
        content: "<p>Guia não encontrado.</p>",
      }));
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        ref={searchInputRef}
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleSearch}
        onClick={() => setShowSuggestions(true)} // Mostra sugestões ao clicar no campo de pesquisa
        style={{
          position: "relative",
          padding: "10px",
          borderRadius: "20px",
          border: "1px solid #ccc",
          width: "300px",
          maxWidth: "80%",
          backgroundColor: "#FFFFFF",
        }}
      />
      {showSuggestions && (
        <div
          ref={suggestionsRef}
          style={{
            position: "absolute",
            top: "60px", // Ajuste conforme necessário
            left: "50%",
            transform: "translateX(-50%)",
            width: "300px",
            maxWidth: "80%",
            border: "1px solid #ccc",
            borderRadius: "4px",
            backgroundColor: "#fff",
            zIndex: 1000,
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {filteredGuides.map((guide) => (
            <div
              key={guide.id}
              onClick={() => handleGuideClick(guide)}
              style={{
                padding: "20px",
                cursor: "pointer",
                borderBottom: "1px solid #ddd",
              }}
            >
              {guide.title}
            </div>
          ))}
        </div>
      )}
      <h1 className="gridtotop" id="color-selector">
        De que cor é a sua mancha?
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
        }}
      >
        <div className="grid-container">
          {colors.map(({ name, color }) => (
            <button
              key={name}
              onClick={() => handleClick(name)}
              style={{ backgroundColor: color }}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {selectedGuide && (
        <div
          id="guide-content"
          ref={guideContainerRef}
          style={{
            margin: "40px auto",
            marginBottom: "200px",
            marginTop:
              "200px" /* Centraliza o container com margens automáticas */,
            padding: "20px",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            boxShadow: "0 0 50px rgba(0, 0, 0, 0.1)",
            maxWidth: "1200px" /* Largura máxima para o container */,
            boxSizing: "border-box",
            textAlign:
              "left" /* Inclui padding e border no total width/height */,
          }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: selectedGuide.content }}
            className="stain-guide-container1"
          />
        </div>
      )}
    </div>
  );
};

export default ColorSelector;
