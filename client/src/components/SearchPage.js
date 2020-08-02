import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCard from './TopicCard';

const SearchPage = ({results}) => {
  console.log(results);
  
  return (
    <Container>
      <Row>
        <Col>
      <h1>{results.title}</h1>
          <TopicCard link={results.url}/>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
