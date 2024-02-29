import React from "react";
import "./GlitchText.css"; // Assuming you put your CSS in a file named GlitchText.css

const GlitchText = () => {
  return (
    <div id="app">
      <div id="wrapper">
        {/* Make sure data-text equals the text you put inside the tags. */}
        <h1
          className="glitch text-bold font-glitch text-9xl text-white "
          data-text="HACKIN"
        >
          HACK<span className="">IN</span>
        </h1>
        <h2
          className="glitch text-bold font-glitch text-5xl"
          data-text="IIIT Pune"
        >
          IIIT Pune
        </h2>
      </div>
    </div>
  );
};

export default GlitchText;
