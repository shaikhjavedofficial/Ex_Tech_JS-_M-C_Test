import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";
import "bootstrap/dist/css/bootstrap.min.css";

export const Home = () => {
  const [toDoItems, setToDoItems] = useState([]);
  const handleAdd = (newToDo) => {
    setToDoItems([...toDoItems, newToDo]);
  };
  const handleDelete = (curritem) => {
    const filtered = toDoItems.filter((item) => item !== curritem);
    setToDoItems([...filtered]);
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <AddToDo handleAdd={handleAdd} />
          </Card>
          <Card>
            <ToDoList toDoItems={toDoItems} handleDelete={handleDelete} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
