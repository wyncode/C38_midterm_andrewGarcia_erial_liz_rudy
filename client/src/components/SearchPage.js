import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCard from './TopicCard';
import Jumbotron from 'react-bootstrap/Jumbotron'

const SearchPage = ({ results }) => {
  return (
    <Container>
      <Jumbotron>
              <h1>Meme Results...</h1>
          </Jumbotron>
      <Row>
        <Col style={{display:"flex", flexWrap:"wrap"}}>
          {results.map((gif) => (
            <>
              <TopicCard searchData={gif} />
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
