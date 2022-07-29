import React, { useEffect } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = React.useState(initialTitle);
  const changeTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(changeTitle, [title]);
  return setTitle;
};

const TestTitle = (props) => {
  const titleUpdater = useTitle("Loading");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className='App'>
      <div>Hi</div>
    </div>
  );
};

export default TestTitle;
