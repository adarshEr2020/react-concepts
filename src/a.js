// React is loaded and is available as React and ReactDOM
// imports should NOT be used
import React from "react";
const TodoItem = (props) => (
  <li onClick={props.onItemClick}>
    {props.item.text} and {props.item.done}
  </li>
);

const TodoList = (props) => {
  const handleItemClick = (item, event) => {
    // Write your code here
    // console.log("list item here", item);
  };
  const { items, onListClick, onItemClick } = props;
  return (
    <ul onClick={onListClick}>
      {items.map((item, index) => (
        <TodoItem
          item={item}
          key={index}
          onClick={() => handleItemClick(item)}
          onItemClick={onItemClick}
        />
      ))}
    </ul>
  );
};

export default TodoList;
