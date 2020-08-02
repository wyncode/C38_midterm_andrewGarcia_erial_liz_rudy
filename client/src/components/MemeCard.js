import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

const MemeCard = () => {
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">SOME TITLE</Popover.Title>
      <Popover.Content>MEME INFORMATION</Popover.Content>
    </Popover>
  );

  return (
    <Card style={{ width: '70%' }} className="text-center mx-auto">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Img src="http://placehold.jp/99ccff/003366/600x400.png" />
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
