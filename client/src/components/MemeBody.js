import React, {useState, useEffect} from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MemeCard from './MemeCard';
import SideLinks from './SideLinks';
import RandomCard from './RandomCard';
import Alert from 'react-bootstrap/Alert';

const MemeBody = ({meme}) => {

  const [randomMeme, setRandomMeme] = useState([]);

  useEffect(() => {
        fetch('/api/random', {
          method: 'get',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }})
      .then(res => res.json())
      .then(data => {
        setRandomMeme(data);
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <Container>
      <Row>
        <Col md={12} lg={9}>
           <MemeCard meme={meme} /> 
           
        </Col>
        <Col md={12} lg={3}>
          <SideLinks meme={meme}/>
        </Col>
      </Row>
      <Row>
        <Col xs={12} style={{display:'flex', justifyContent:'center'}}>
          <Alert id="more-memes" variant='secondary' style={{width: "80vw", marginTop: '100px', marginBottom: '20px', textAlign:'center'}}>More Random Memes for Your Entertainment!</Alert>
        </Col>
      </Row>
      <Row>
        <Col style={{display:'flex', flexWrap:'wrap', justifyContent:"center"}}>
        {randomMeme.map(item => {
               return <RandomCard key={item.id} id={item.id} title={item.title} imgUrl={item.img_url} />
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default MemeBody;