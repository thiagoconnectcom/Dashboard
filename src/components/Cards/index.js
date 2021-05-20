import React from "react";
import { Card, Row, Col } from "react-bootstrap";

export default function Cards({ data }) {
  return (
    <Row>
      {data.map((items) => (
        <Col key={items.title} sm={6} xl={3}>
          <Card className="mb-4">
            <Card.Body className="d-flex align-items-center">
              <div className={`${items.icon} ${items.textcolor} display-4`}></div>
              <div className="ml-3">
                <div className="text-muted small">{items.title}</div>
                <div className="text-large">{items.value}</div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
