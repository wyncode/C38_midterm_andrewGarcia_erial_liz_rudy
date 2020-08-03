import React, {useState, useEffect} from 'react';
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
     console.log(data);
        setRandomMeme(data);
      })
      .catch(error => console.error(error))
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 1 }}>
           <MemeCard meme={meme} /> 
           
        </Col>
        <Col sm={12} md={3}>
          <SideLinks />
        </Col>
      </Row>
      <Row>
        <Col>
          <Alert variant='secondary' style={{width:'80vw', margin:'100px auto 40px', textAlign:'center'}}>More Random Memes for Your Entertainment!</Alert>
        </Col>
      </Row>
      <Row>
        <Col style={{display:'flex', flexWrap:'wrap', justifyContent:"center"}}>
        {randomMeme.map(item => {
               return <RandomCard key={item.id} id={item.id} title={item.title} imgUrl={item.img_url}  alt="Gif"/>
            })}
        </Col>
      </Row>
    </Container>
  );
};

export default MemeBody;