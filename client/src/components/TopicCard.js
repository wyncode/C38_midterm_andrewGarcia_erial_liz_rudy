import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const TopicCard = ({ searchData }) => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push(`/meme/${searchData.id}`);
  };

  return (
    <Card style={{ width: '200px', margin: "10px"}}>
      <Card.Body>
        <Card.Img variant="top" 
        src={searchData.embed_url}
        alt="Gif"
        />
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={handleNavigate}
          style={{ width: '100%' }}
          variant="secondary"
        >
          {searchData.title}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default TopicCard;
