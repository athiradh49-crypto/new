import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer1() {
  return (
    <footer className="bg-dark text-light py-3 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              © 2026 Campus Complaint Box | Made by MERN Students
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer1;