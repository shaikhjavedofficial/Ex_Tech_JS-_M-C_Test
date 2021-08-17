import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ToDoList } from "./ToDoList";
import { AddToDo } from "./AddToDo";

export const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <AddToDo />
          </Card>
          <Card>
            <ToDoList />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
