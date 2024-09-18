// src/components/Sidebar.js
import React from "react";
import "./Sidebar.css"; // Importa o CSS para o Sidebar

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        &times;
      </button>
      <nav>
        <ul>
          <li>
            <a href="https://www.fariasribas.com.br/#sobre">
              Quem fez esse site?
            </a>
          </li>
          <li>
            <a href="/porque.html">Por que fez esse site?</a>
          </li>
          <li>
            <a href="mailto:apps@fariasribas.com.br">Tenho uma sugestão!</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
