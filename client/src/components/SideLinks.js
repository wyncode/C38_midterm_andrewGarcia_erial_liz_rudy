import React from 'react';
import { useHistory } from "react-router-dom";
import './style.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {
  FacebookIcon,
  TumblrIcon,
  TwitterIcon,
  FacebookShareButton,
  TumblrShareButton,
  TwitterShareButton

} from "react-share";

const SideLinks = ({meme}) => {

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

        <div 
          id="socialbuttons">
       
          <TwitterShareButton url={`/meme/${meme.id}`}>
          <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          <TumblrShareButton url={`/meme/${meme.id}`}>
          <TumblrIcon size={32} round={true} />
          </TumblrShareButton>
          <FacebookShareButton url={`/meme/${meme.id}`}>
          <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
        </div>
         
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
