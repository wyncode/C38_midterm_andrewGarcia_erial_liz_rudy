import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCard from './TopicCard';

const SearchBody = () => {
  return (
    <Container>
      <Row>
        <Col>
          <TopicCard />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBody;
