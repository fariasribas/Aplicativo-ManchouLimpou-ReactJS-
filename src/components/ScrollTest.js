import React from "react";
import { Element, scroller } from "react-scroll";

const ScrollTest = () => {
  const scrollTo = (name) => {
    scroller.scrollTo(name, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: -50,
    });
  };

  return (
    <div>
      <button onClick={() => scrollTo("test-element")}>
        Scroll to Element
      </button>
      <div style={{ height: "150vh", background: "#f0f0f0" }}></div>
      <Element name="test-element" className="element">
        <h2>Scroll Target Element</h2>
      </Element>
    </div>
  );
};

export default ScrollTest;
