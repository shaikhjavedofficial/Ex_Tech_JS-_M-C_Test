import React, { useState } from "react";
import { Card, Form, Row, Col } from "react-bootstrap";

export const ToDoItems = () => {
  const [checkBox, setCheckBox] = useState(false);
  return (
    <React.Fragment>
      <Card className="todoitem">
        <Row>
          <Col md={2}>
            <Form.Check onClick={() => setCheckBox(!checkBox)} />
          </Col>
          <Col>
            <Form.Label />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};
