import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SearchCard from './SearchCard';
import Jumbotron from 'react-bootstrap/Jumbotron'

const SearchPage = ({ results, searchTerm }) => {
  return (
    <Container>
      <Jumbotron>
              <h1>Looking for {searchTerm} Memes...</h1>
          </Jumbotron>
      <Row>
        <Col style={{display:"flex", flexWrap:"wrap"}}>
          {results.map((gif) => (
            <>
              <SearchCard key={gif.id} searchData={gif} />
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
