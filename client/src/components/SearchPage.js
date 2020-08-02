import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCard from './TopicCard';

const SearchPage = ({ results }) => {
  return (
    <Container>
      <Row>
        <Col>
          {results.map((gif) => (
            <>
              <h1>{gif.title}</h1>
              <TopicCard id={gif.id} link={gif.url} />
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
