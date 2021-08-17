import React, { useState } from "react";
import { Card, Form, Row, Col, Button } from "react-bootstrap";

export const ToDoItems = ({ handleDelete, item }) => {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <React.Fragment>
      <Card className="todoitem">
        <Row>
          <Col md={2}>
            <Form.Check onClick={() => setCheckBox(!checkBox)} />
          </Col>
          <Col>
            <Form.Label>{checkBox ? <del>{item}</del> : item}</Form.Label>
          </Col>
          <Col md={2}>
            <Button onClick={() => handleDelete(item)}>Remove</Button>
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
