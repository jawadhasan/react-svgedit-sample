import React, { useState, useEffect, useRef } from "react";

import SvgCanvas from "@svgedit/svgcanvas";

export function SvgEditDemo() {
  useEffect(() => {
    initSvgCanvas();
    // renderCirc();
  }, []);

  const [counter, setCounter] = useState(0);

  const [RectMove, setRectMove] = useState();
  const [RectObj, setRectObj] = useState();
  const [CircObj, setCircObj] = useState();
  
  const [tool, setTool] = useState("circ");
  const [objects, setObjects] = useState([]);
  const svgRef = useRef(0);
  const text = useRef("ABC123");

  const [svgCanvas, setSvgCanvas] = useState();

  const onClick = () => {
    svgRef.current.backgroundColor = "blue";
  };

  const initSvgCanvas = () => {
    console.log("initSvgCanvas");
    const config = {
      initFill: { color: "040470", opacity: 1 },
      initStroke: { color: "000000", opacity: 1, width: 1 },
      text: { stroke_width: 0, font_size: 24, font_family: "serif" },
      initOpacity: 1,
      imgPath: "/src/editor/images",
      dimensions: [500, 500],
      baseUnit: "px",
    };
    // setSvgCanvas(new SvgCanvas(svgRef.current, config));
    //const myCanvas = new SvgCanvas(svgRef.current, config);
    //myCanvas.setMode('text');
  };

  const onMouseDown = (obj) => {
    console.log("onMouseDown", obj);
  };



  const renderCirc = (obj) => {
    return (
      <ellipse
        key={obj.id}
        cx={obj.cx}
        cy={obj.cy}
        rx={obj.rx}
        ry={obj.ry}
        fill={obj.color}
      />
    );
  };

  const textChanged = () => {
    setTimeout(() => {
      this.mouseup();
    }, 1);
  };

  const handleSelectTool = (tool) => {
    console.log("tool selected", tool);
    setTool(tool);
  };

  const handleMouseUp = (e) =>{

    setRectMove(null);
    setRectObj(null);
    setCircObj(null);
 
  }




  

  return (
    <div className="canvas">
      <div className="toolbar">
        {[
          ["rect", "Rectangle"],
          ["circ", "Circle"],
          ["drag", "Drag"],
        ].map((t) => (
          <button
            key={t[0]}
            onClick={() => handleSelectTool(t[0])}
            className={({ active: tool === t[0] })}
          >
            {t[1]}
          </button>
        ))}
      </div>

      <svg
        className={`tool--${tool} svg`}
        ref={svgRef}
        onMouseDown={onMouseDown}
        onMouseUp={handleMouseUp}
      >
        {renderCirc({ id: 1, cx: 100, cy: 200, rx: 50, ry: 50, color: "red" })}
        {renderCirc({ id: 2, cx: 200, cy: 100, rx: 30, ry: 30, color: "blue" })}
        {renderCirc({
          id: 3,
          cx: 300,
          cy: 150,
          rx: 40,
          ry: 40,
          color: "green",
        })}
      </svg>

      <input className="hidden-text-input" ref={text} id="text" />
    </div>
  );
}
