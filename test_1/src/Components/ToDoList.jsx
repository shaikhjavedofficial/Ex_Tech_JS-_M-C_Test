import React from "react";
import { Card } from "react-bootstrap";
import { ToDoItems } from "./ToDoItems";
export const ToDoList = ({ toDoItems, handleDelete }) => {
  return (
    <React.Fragment>
      {toDoItems.map((item) => (
        <ToDoItems item={item} handleDelete={handleDelete} />
      ))}
    </React.Fragment>
  );
};
