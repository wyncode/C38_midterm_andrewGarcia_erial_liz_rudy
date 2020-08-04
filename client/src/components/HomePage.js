
import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Trending from './Trending';
import Jumbotron from 'react-bootstrap/Jumbotron'

const HomePage = () => {
  const [trendingMeme, setTrendingMeme] = useState([]);

  useEffect(() => {
        fetch('/api/trending', {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }})
      .then(res => res.json())
      .then(data => {
     
        setTrendingMeme(data);
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12}>
            <Jumbotron>
              <h1>Welcome to Meme Park!</h1>
              <p>
                The number one source for trending memes!
              </p>
          </Jumbotron>
          <h1>Trending Memes: </h1>
          {
            trendingMeme && <Trending trendingMeme={trendingMeme}/>
          }
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
