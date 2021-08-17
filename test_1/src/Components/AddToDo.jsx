import React, { useState } from "react";
import { Card, Col, Form, Row, Button } from "react-bootstrap";

export const AddToDo = ({ handleAdd }) => {
  const [toDoText, setToDoText] = useState("");
  return (
    <React.Fragment>
      <Card>
        <Row>
          <Col md={10}>
            <Form.Control
              type="text"
              value={toDoText}
              onChange={(e) => setToDoText(e.target.value)}
            />
          </Col>
          <Col>
            <Button
              onClick={() => {
                setToDoText("");
                handleAdd(toDoText);
              }}
            >
              Add
            </Button>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
