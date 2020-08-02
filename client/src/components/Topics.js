import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCard from './TopicCard';
import CardDeck from 'react-bootstrap/CardDeck';

const Topics = () => {
  const RowStyle = {
    marginBottom: '100px'
  };
  return (
    <Container fluid>
      <Row style={RowStyle}>
        <Col xs={12}>
          <CardDeck>
            <TopicCard />
            <TopicCard />
            <TopicCard />
            <TopicCard />
          </CardDeck>
        </Col>
      </Row>
    </Container>
  );
};

export default Topics;
