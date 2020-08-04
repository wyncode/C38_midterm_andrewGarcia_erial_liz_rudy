import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import SideLinks from './SideLinks';
import Alert from 'react-bootstrap/Alert';
import e1 from './e1.png';
import e2 from './e2.png';
import e3 from './e3.png';
import e4 from './e4.png';
import e5 from './e5.png';

const ErrorPage = () => {

  const [errorMeme, setErrorMeme] = useState();

  useEffect(() => {
    let errorArray = [e1, e2, e3, e4, e5];

      errorArray = errorArray.filter((error) => {
        return error !== errorMeme;
      })

      let randomIndex = Math.floor(Math.random() * errorArray.length);
      let randomError = errorArray[randomIndex];
      setErrorMeme(randomError); 
  }, [])

  return (
    <Container fluid>
      <Row>
        <Col sm={12} md={{ span: 8, offset: 1 }}>
          <Alert variant="danger" className="text-center">
            Sorry, your meme was not found :(
          </Alert>

          <Card style={{ width: '70%' }} className="text-center mx-auto">
      <Card.Header > </Card.Header>
      <Card.Body>
        <Card.Img src={errorMeme}   alt="error meme"/>
      </Card.Body>
      <Card.Footer className="text-muted ">
      </Card.Footer>
    </Card>
        
        </Col>
        <Col sm={12} md={3}>
          <SideLinks />
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
