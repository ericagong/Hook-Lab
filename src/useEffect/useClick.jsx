import React, { useEffect, useRef } from "react";
import "./styles.css";

const useClick = (onClick) => {
  const nameTag = useRef();
  const element = nameTag.current;
  useEffect(() => {
    if (typeof onClick !== "function") {
      return;
    }
    if (element) {
      element.addEventListener("click", onClick);
      return () => {
        if (element) {
          element.removeEventListener("click", onClick);
        }
      };
    }
  });
  return nameTag;
};

const TestClick = (props) => {
  const clickHandler = () => {
    console.log("clicked!");
  };
  const elementTag = useClick(clickHandler);
  return (
    <div className='App'>
      <div ref={elementTag}>Hi</div>
    </div>
  );
};

export default TestClick;
