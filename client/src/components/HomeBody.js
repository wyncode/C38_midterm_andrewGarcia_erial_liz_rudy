import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Topics from './Topics'


const HomeBody = () => {
    return (
        <Container fluid>
        <Row>
            <div>Topic #1</div>
            <Col xs={12}>
                <Topics />
            </Col>
        </Row>
        <Row>
            <div>Topic #2</div>
            <Col xs={12}>
            <Topics />
            </Col>
        </Row>
        <Row>
            <div>Topic #3</div>
            <Col xs={12}>
            <Topics />
            </Col>
        </Row>
        <Row>
            <div>Topic #4</div>
            <Col xs={12}>
            <Topics />
            </Col>
        </Row>
        </Container>
    )
}

export default HomeBody