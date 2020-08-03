import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TopicCard from './TopicCard';

const SearchPage = ({ results }) => {
  return (
    <Container>
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
