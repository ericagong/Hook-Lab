import React, { useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onHover) => {
  const nameTag = useRef();
  const element = nameTag.current;
  useEffect(() => {
    if (typeof onHover !== "function") {
      return;
    }
    if (element) {
      element.addEventListener("mouseenter", onHover);
      return () => {
        if (element) {
          element.removeEventListener("mouseenter", onHover);
        }
      };
    }
  });
  return nameTag;
};

const TestHover = (props) => {
  const hoverHandler = () => {
    console.log("hovered!");
  };
  const elementTag = useClick(hoverHandler);
  return (
    <div className='App'>
      <div ref={elementTag}>Hi</div>
    </div>
  );
};

export default TestHover;
