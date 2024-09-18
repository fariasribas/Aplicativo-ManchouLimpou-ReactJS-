import React, { useEffect, useState } from "react";

const StainGuide = ({ stainType }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const loadGuide = async () => {
      try {
        // Converte o stainType para minúsculas, remove espaços e "manchasde"
        const formattedStainType = stainType
          .toLowerCase()
          .replace(/\s/g, "")
          .replace("manchasde", "");

        const response = await fetch(
          `/stain-guides/${formattedStainType}.html`
        );
        const text = await response.text();
        setContent(text);
      } catch (error) {
        setContent("<p>Guia não encontrado.</p>");
      }
    };

    loadGuide();
  }, [stainType]);

  return (
    <div className="stain-guide-container">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default StainGuide;
