import React from "react";
import { Container, Row, Col } from "reactstrap";

const NotFound = props => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={2}>
          &nbsp;
        </Col>
        <Col sm={12} md={8}>
          <h1 className="display-4 text-secondary">Page Not Found</h1>
          <img
            src="404.png"
            className="img-fluid"
            alt="Clear your desk, grow your business!"
          />
        </Col>
        <Col sm={12} md={2}>
          &nbsp;
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
