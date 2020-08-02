import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Topics from './Topics';

const HomeBody = () => {
  return (
    <Container>
      <Row>
        <h1>Topic #1</h1>
        <Col xs={12}>
          <Topics />
        </Col>
      </Row>
      <Row>
        <h1>Topic #2</h1>
        <Col xs={12}>
          <Topics />
        </Col>
      </Row>
      <Row>
        <h1>Topic #3</h1>
        <Col xs={12}>
          <Topics />
        </Col>
      </Row>
      <Row>
        <h1>Topic #4</h1>
        <Col xs={12}>
          <Topics />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeBody;
