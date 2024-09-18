// src/components/SearchBar.js
import React, { useState } from "react";
import { scroller } from "react-scroll";

const SearchBar = ({ guides }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    const result = guides.find((guide) =>
      guide.toLowerCase().includes(query.toLowerCase())
    );
    if (result) {
      scroller.scrollTo(result, {
        duration: 800,
        smooth: "easeInOutQuart",
      });
    }
  };

  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Pesquise um guia..."
        style={{
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "300px",
          maxWidth: "100%",
        }}
      />
      <button
        onClick={handleSearch}
        style={{
          marginLeft: "10px",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#FF6F61",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
