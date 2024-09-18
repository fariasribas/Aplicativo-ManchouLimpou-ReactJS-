// src/App.js
import React, { useState } from "react";
import ColorSelector from "./components/ColorSelector";
import ToneSelector from "./components/ToneSelector";
import StainTypeSelector from "./components/StainTypeSelector";
import StainGuide from "./components/StainGuide";
import HamburgerMenu from "./components/HamburgerMenu";
import Sidebar from "./components/Sidebar";
import { Element } from "react-scroll";
import BackToTopButton from "./components/BackToTopButton";
import "./App.css";

const App = () => {
  const [color, setColor] = useState(null);
  const [tone, setTone] = useState(null);
  const [stainType, setStainType] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => setSidebarOpen(true);
  const handleCloseSidebar = () => setSidebarOpen(false);

  return (
    <div>
      <HamburgerMenu onOpenSidebar={handleOpenSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={handleCloseSidebar} />
      <Element name="color-selector">
        <ColorSelector onSelectColor={setColor} />
      </Element>
      <Element name="tone-selector">
        {color && <ToneSelector color={color} onSelectTone={setTone} />}
      </Element>
      <Element name="stain-type-selector">
        {tone && (
          <StainTypeSelector tone={tone} onSelectStainType={setStainType} />
        )}
      </Element>
      <Element name="stain-guide">
        {stainType && <StainGuide stainType={stainType} />}
      </Element>
      <BackToTopButton />
    </div>
  );
};

export default App;
