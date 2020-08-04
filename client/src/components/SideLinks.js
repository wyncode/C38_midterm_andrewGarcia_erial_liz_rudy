import React from 'react';
import { useHistory } from "react-router-dom";
import './style.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const SideLinks = () => {

  let history = useHistory();
  const rowStyle = {
    padding: '20px',
  };

  return (
    <div id="sidelinks">
      <div style={rowStyle}>
        <Button id="back-btn" variant="dark" onClick={() => history.goBack()}>Back</Button>
      </div>
      <div style={rowStyle}>

        <ButtonGroup
        id="button-gr"
          vertical
          aria-label="Basic example"
          size="sm"
        >
          <Button className="side-btn" variant="secondary">Twitter</Button>
          <Button  className="side-btn" variant="secondary">Facebook</Button>
          <Button  className="side-btn" variant="secondary">Instagram</Button>
        </ButtonGroup>
      </div>
      <div style={rowStyle}>
          <div id="view-ctr">
            <img
              src="https://www.webfreecounter.com/hit.php?id=gmufdfcn&nd=6&style=11"
              border="0"
              alt="visitor counter"
            />
        {' '}
        &nbsp; Views
          </div>
      </div>
    </div>
  );
};

export default SideLinks;
