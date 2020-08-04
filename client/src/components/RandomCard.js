import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const RandomCard = ({ id, title, imgUrl }) => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push(`/meme/${id}`);
  };

  return (
    <Card style={{ width: '300px', margin: "10px"}}>
      <Card.Body>
        <Card.Img variant="top" src={imgUrl}  alt={title ? title : 'a meme'}/>
      </Card.Body>
      <Card.Footer>
        <Button
          onClick={handleNavigate}
          style={{ width: '100%' }}
          variant="secondary"
        >
          {title ? title : 'Click Here for Link'}
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default RandomCard;
