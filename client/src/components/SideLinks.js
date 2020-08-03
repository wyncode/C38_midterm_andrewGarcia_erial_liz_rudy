import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SideLinks = () => {
  const rowStyle = {
    padding: '20px',
    textAlign: 'center'
  };

  return (
    <>
      <div style={rowStyle}>
        <ButtonGroup
          style={{ width: '70%' }}
          vertical
          aria-label="Basic example"
          size="sm"
        >
          <Button variant="secondary">Twitter</Button>
          <Button variant="secondary">Facebook</Button>
          <Button variant="secondary">Instagram</Button>
        </ButtonGroup>
      </div>
      <div style={rowStyle}>
      
          <img
            src="https://www.webfreecounter.com/hit.php?id=gmufdfcn&nd=6&style=11"
            border="0"
            alt="visitor counter"
          />
        {' '}
        &nbsp; Views
      </div>
    </>
  );
};

export default SideLinks;
