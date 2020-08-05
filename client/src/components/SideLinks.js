import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import Button from 'react-bootstrap/Button';
import {
  FacebookIcon,
  TumblrIcon,
  TwitterIcon,
  FacebookShareButton,
  TumblrShareButton,
  TwitterShareButton
} from 'react-share';

const SideLinks = ({ meme }) => {
  let history = useHistory();

  return (
    <div id="sidelinks">
      <div>
        <Button id="back-btn" variant="dark" onClick={() => history.goBack()}>
          Back
        </Button>
      </div>
      {meme && (
        <div>
          <div id="socialbuttons">
            <TwitterShareButton url={`/meme/${meme.id}`} className="spin">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <TumblrShareButton url={`/meme/${meme.id}`} className="spin">
              <TumblrIcon size={32} round={true} />
            </TumblrShareButton>
            <FacebookShareButton url={`/meme/${meme.id}`} className="spin">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
          </div>
        </div>
      )}
      <div>
        <div id="view-ctr">
          <img
            src="https://www.webfreecounter.com/hit.php?id=gmufdfcn&nd=6&style=11"
            border="0"
            alt="visitor counter"
          />{' '}
          &nbsp; Views
        </div>
      </div>
    </div>
  );
};

export default SideLinks;
