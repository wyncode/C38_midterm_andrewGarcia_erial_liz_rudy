import React, { useState, useEffect } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trending from './Trending';
import Jumbotron from 'react-bootstrap/Jumbotron';

const HomePage = () => {
  const [trendingMeme, setTrendingMeme] = useState([]);
  const [textColor, setColor] = useState('green');

  useEffect(() => {
    fetch('/api/trending', {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setTrendingMeme(data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    const colorShift = setInterval(() => {
      let colors = ['red', 'orange', 'yellow', '#008036', '#62a6f5', '#a880e8'];
      colors = colors.filter(function (color) {
        return color !== textColor;
      });

      let randomIndex = Math.floor(Math.random() * colors.length);
      const randomColor = colors[randomIndex];
      setColor(randomColor);
    }, 1000);

    return () => {
      clearInterval(colorShift);
    };
  }, [textColor]);

  return (
    <Container className="contain">
      <Row>
        <Col xs={12}>
          <Jumbotron className="jumbo">
            <h1>Welcome to Meme Park!</h1>
            <p
              style={{
                color: textColor,
                transition: 'color .3s linear'
              }}
            >
              The number one source for trending memes!
            </p>
          </Jumbotron>
          <h2 className="heading">Trending Memes: </h2>
          {trendingMeme && <Trending trendingMeme={trendingMeme} />}
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
