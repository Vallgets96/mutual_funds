import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";
import Image from "react-bootstrap/Image";
function DismissibleExample() {
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <Row className="d-flex">
      <Col md={6} className="mb-2">
        <Image
          src={require("../img/team-4.jpg")}
          roundedCircle
          onClick={toggleShowA}
        />
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto mt-3">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>

      <Col md={6} className="mb-2">
        <Image
          src={require("../img/team-4.jpg")}
          roundedCircle
          onClick={toggleShowA}
        />
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <strong className="me-auto mt-3">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default DismissibleExample;
