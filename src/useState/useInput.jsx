import React from "react";
import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = React.useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    console.log(value);
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };

  return { value, onChange };
};

const TestInput = (props) => {
  const maxLenFunc = (value) => value.length < 10;
  const wrongFunc = (value) => !value.includes("@");
  const name = useInput("Mr.", wrongFunc);
  return (
    <div className='testInput'>
      <h1>Hello</h1>
      <input type='text' {...name} />
    </div>
  );
};

export default TestInput;
