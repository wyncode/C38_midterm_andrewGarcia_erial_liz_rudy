import React from 'react';
import { useHistory } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const HomePageCard = ({ imgUrl, id, title }) => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push(`/meme/${id}`);
  };

  return (
    <Card style={{ width: '200px', margin: '10px 20px' }}>
      <Card.Body>
        <Card.Img variant="top" src={imgUrl} alt={title ? title : 'a meme'} />
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

export default HomePageCard;
