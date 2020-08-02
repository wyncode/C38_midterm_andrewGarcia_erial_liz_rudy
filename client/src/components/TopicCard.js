import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TopicCard = ({ id, link }) => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push(`/meme/${id}`);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <img src={link} alt="foo" />
      <Card.Body>
        <Card.Img variant="top" src={link} />
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={handleNavigate}
          style={{ width: '100%' }}
          variant="secondary"
        >
          Link {link}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TopicCard;
