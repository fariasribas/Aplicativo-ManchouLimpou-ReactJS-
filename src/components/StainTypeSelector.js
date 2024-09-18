import React from "react";
import { scroller } from "react-scroll";

const stainMap = {
  "Vermelho Escuro": [
    "Manchas de Vinho Tinto",
    "Manchas de Sangue",
    "Manchas de Batom",
    "Manchas de Tinta",
  ],
  "Vermelho Claro": [
    "Manchas de Frutas Vermelhas",
    "Manchas de Batom",
    "Manchas de Molho de Tomate",
    "Manchas de Tinta",
  ],
  "Azul Escuro": [
    "Manchas de Caneta",
    "Manchas de Frutas Azuis",
    "Manchas de Tinta",
  ],
  "Azul Claro": ["Manchas de Cera de Velas", "Manchas de Tinta"],
  "Verde Escuro": ["Manchas de Alimentos Verdes", "Manchas de Tinta"],
  "Verde Claro": ["Manchas de Cera de Velas", "Manchas de Tinta"],
  "Amarelo Escuro": [
    "Manchas de Suor",
    "Manchas de Óleo",
    "Manchas de Manteiga ou Gordura",
    "Manchas de Frutas",
  ],
  "Amarelo Claro": ["Manchas de Alimentos Ácidos", "Manchas de Café com Leite"],
  "Roxo Escuro": [
    "Manchas de Vinho Tinto",
    "Manchas de Frutas Roxas",
    "Manchas de Tinta",
  ],
  "Roxo Claro": [
    "Manchas de Vinho Tinto",
    "Manchas de Cera de Velas",
    "Manchas de Tinta",
  ],
  "Bege Escuro": ["Manchas de Chá", "Manchas de Suor Desbotadas"],
  "Bege Claro": ["Manchas de Café com Leite", "Manchas de Molho Branco"],
  "Branco Escuro": [
    "Manchas de Sabão ou Detergente",
    "Manchas de Alimentos Gordurosos Secos",
  ],
  "Branco Claro": [
    "Manchas de Cera de Velas",
    "Manchas de Alimentos Gordurosos (como molhos brancos)",
  ],
  "Preto Escuro": ["Manchas de Óleo", "Manchas de Graxa"],
  "Preto Claro": [
    "Manchas de Graxa de Pneus",
    "Manchas de Cinza de Cigarro",
    "Manchas de Tinta",
  ],
  "Marrom Escuro": [
    "Manchas de Café",
    "Manchas de Chocolate",
    "Manchas de Graxa",
    "Manchas de Terra ou Lodo",
  ],
  "Marrom Claro": [
    "Manchas de Sangue Seco",
    "Manchas de Molho de Tomate Oxidado",
    "Manchas de Açúcar Caramelizado",
    "Manchas de Mel",
  ],
};
const StainTypeSelector = ({ tone, onSelectStainType }) => {
  const stainTypes = stainMap[tone] || [];

  const handleClick = (stainType) => {
    onSelectStainType(stainType);
    scroller.scrollTo("stain-guide", {
      duration: 800,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <div className="centered-buttons2">
      <h2 className="title">A sua mancha pode ser de:</h2>
      <div className="grid-3x3">
        {stainTypes.map((stainType) => (
          <button key={stainType} onClick={() => handleClick(stainType)}>
            {stainType}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StainTypeSelector;
