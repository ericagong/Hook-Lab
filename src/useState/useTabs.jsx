import React from "react";

const contents = [
  {
    name: "Tab1",
    content: "This is Tab1",
  },
  {
    name: "Tab2",
    content: "This is Tab2",
  },
];

const useTabs = (initialTabIndex, allTabs) => {
  const [currentTabIndex, setCurrentTabIndex] = React.useState(initialTabIndex);
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentTabIndex],
    changeItem: setCurrentTabIndex,
  };
};

const TestTabs = (props) => {
  const { currentItem, changeItem } = useTabs(0, contents);
  const sections = contents.map((content, index) => (
    <button onClick={() => changeItem(index)}>{content.name}</button>
  ));
  return (
    <div className='TestTabs'>
      <h1>Hello</h1>
      {sections}
      <div>{currentItem.content}</div>
    </div>
  );
};

export default TestTabs;
