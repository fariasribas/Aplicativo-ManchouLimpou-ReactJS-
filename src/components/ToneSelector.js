import React from "react";
import { scroller } from "react-scroll";

// Defina as cores e tons
const tones = {
  Vermelho: {
    "Vermelho Escuro": "#D32F2F",
    "Vermelho Claro": "#FF6F61",
  },
  Azul: {
    "Azul Escuro": "#0288D1",
    "Azul Claro": "#00A8E1",
  },
  Verde: {
    "Verde Escuro": "#388E3C",
    "Verde Claro": "#4CAF50",
  },
  Amarelo: {
    "Amarelo Escuro": "#FBC02D",
    "Amarelo Claro": "#F9D71C",
  },
  Roxo: {
    "Roxo Escuro": "#6A1B9A",
    "Roxo Claro": "#9C27B0",
  },
  Bege: {
    "Bege Escuro": "#C8AD7F",
    "Bege Claro": "#F5C6C6",
    "Branco Escuro": "#F5F5F5",
    "Branco Claro": "#FFFFFF",
  },
  Preto: {
    "Preto Escuro": "#212121",
    "Preto Claro": "#333333",
  },
  Marrom: {
    "Marrom Escuro": "#5D4037",
    "Marrom Claro": "#8C6A5A",
  },
};

const ToneSelector = ({ color, onSelectTone }) => {
  const handleClick = (tone) => {
    onSelectTone(tone);
    scroller.scrollTo("stain-type-selector", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="centered-buttons1">
      <h2>Selecione o tom:</h2>
      <div className="grid-3x3">
        {Object.entries(tones[color] || {}).map(([tone, hex]) => (
          <button
            key={tone}
            onClick={() => handleClick(tone)}
            style={{ backgroundColor: hex, color: "#fff" }} // Ajusta a cor de fundo e do texto
          >
            {tone}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ToneSelector;
