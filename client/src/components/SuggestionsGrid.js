import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const SuggestionsGrid = () => {
  const cardStyle = {
    width: '200px',
    margin: '10px'
  };

  const containerStyle = {
    marginTop: '40px',
    display: 'flex',
    flexWrap: 'wrap'
  };

  return (
    <Container style={containerStyle}>
      <Card style={cardStyle}>
        <Card.Body>
          <Card.Img
            variant="top"
            src="http://placehold.jp/99ccff/003366/100x100.png"
          />
        </Card.Body>
        <Card.Footer>
          <Button style={{ width: '100%' }} variant="secondary">
            Link
          </Button>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default SuggestionsGrid;
