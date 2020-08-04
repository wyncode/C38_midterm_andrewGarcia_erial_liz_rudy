import React from 'react';
import './style.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const MemeCard = ({meme}) => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">{meme.title}</Popover.Title>
      <Popover.Content>
      <ul>
        <li><b>TITLE: </b>{meme.title}</li>
        <li><b>HEIGHT: </b>{meme.height}</li>
        <li><b> WIDTH: </b>{meme.width}</li>
      </ul>
      </Popover.Content>
    </Popover>
  );

  return (
    <Card id="meme-card" style={{ width: '70%' }} className="text-center mx-auto">
      <Card.Header > <h4>{meme.title}</h4> </Card.Header>
      <Card.Body>
        <Card.Img src={meme.embed_url}   alt={meme.title ? meme.title : 'a meme'}/>
      </Card.Body>
      <Card.Footer className="text-muted ">
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button variant="secondary">Click for Info</Button>
        </OverlayTrigger>
      </Card.Footer>
    </Card>
  );
};

export default MemeCard;
