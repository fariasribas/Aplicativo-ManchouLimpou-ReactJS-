// src/components/HamburgerMenu.js
import React from "react";
import "./HamburgerMenu.css"; // Importa o CSS para o HamburgerMenu

const HamburgerMenu = ({ onOpenSidebar }) => {
  return (
    <div className="hamburger-menu" onClick={onOpenSidebar}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default HamburgerMenu;
