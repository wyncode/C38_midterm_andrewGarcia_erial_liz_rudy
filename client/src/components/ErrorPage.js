import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemeCard from './MemeCard';
import SideLinks from './SideLinks';
import Alert from 'react-bootstrap/Alert';

const ErrorPage = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 1 }}>
          <Alert variant="danger" className="text-center">
            Sorry, your meme was not found :(
          </Alert>
        
        </Col>
        <Col sm={12} md={3}>
          <SideLinks />
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
