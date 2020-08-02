import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TopicCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
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
  );
};

export default TopicCard;
