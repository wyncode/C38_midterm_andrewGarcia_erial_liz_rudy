import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomePageCard from './HomePageCard';

const Topics = ({trendingMeme}) => {

  const RowStyle = {
    marginBottom: '100px'
  };

  return (
    <Container fluid>
      <Row style={RowStyle}>
        <Col xs={12}>
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {trendingMeme.map(item => {
               return <HomePageCard key={item.id} title={item.title} imgUrl={item.img_url}/>
            })}
            
          </div>
        </Col> 
      </Row>
    </Container>
  );
};

export default Topics;
