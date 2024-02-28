import React from "react";
import "./GlitchText.css"; // Assuming you put your CSS in a file named GlitchText.css

const GlitchText = () => {
  return (
    <div id="app">
      <div id="wrapper">
        {/* Make sure data-text equals the text you put inside the tags. */}
        <h1 className="glitch" data-text="HACKIN IIIT Pune">
          HACKIN IIIT Pune
        </h1>
      </div>
    </div>
  );
};

export default GlitchText;
