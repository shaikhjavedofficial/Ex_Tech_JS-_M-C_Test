import React, { useState } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";

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
          <Card className="home">
            <Image src="to-do-list.png" rounded fliud className="img1" />
            <Row>
              <Col></Col>
              <Col md={6}>
                <AddToDo handleAdd={handleAdd} />
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Col></Col>
              <Col md={10}>
                {toDoItems.length > 0 ? (
                  <ToDoList toDoItems={toDoItems} handleDelete={handleDelete} />
                ) : (
                  <span>it's lonely here Add some task</span>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
