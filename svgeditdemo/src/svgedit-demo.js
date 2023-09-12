import React, { useState, useRef } from "react";

export function SvgEditDemo() {
  const [counter, setCounter] = useState(0);
  const [objects, setObjects] = useState([]);
  const [tool, setTools] = useState();
  const svgRef = useRef(0);

  const onClick = () => {
    svgRef.current.backgroundColor = "blue";
  };

  return (
    <div className="canvas">
      <div className="toolbar">
        {[
          ["rect", "Rectangle"],
          ["circ", "Circle"],
          ["drag", "Drag"],
        ].map((t) => (
          <button key={t[0]}>{t[1]}</button>
        ))}
      </div>

      <svg className={`tool--${tool}`} ref={svgRef}>
        {objects.map((o) => {
          if (o.type === "rect") {
            return this.renderRect(o);
          }

          if (o.type === "circ") {
            return this.renderCirc(o);
          }

          return null;
        })}
      </svg>
    </div>
  );
}
