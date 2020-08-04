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
        <h1>
        {searchTerm ? `Looking for ${searchTerm} memes...` : 'let\'s search for a meme!'}
        </h1>
      </Jumbotron>
      <Row>
        <Col style={{display:"flex", flexWrap:"wrap", alignItems: "flex-start"}}>
          {results.map((gif) => (
            <>
              return <SearchCard key={gif.id} searchData={gif} />
            </>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default SearchPage;
