// Componente BackToTopButton
import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const BackToTopButton = ({ onReset }) => {
  const scrollToTop = () => {
    scroll.scrollToTop();
    if (onReset) {
      onReset(); // Chama a função de reset
    }
  };

  return (
    <button className="back-to-top" onClick={scrollToTop}>
      <FaArrowUp />
    </button>
  );
};

export default BackToTopButton;
