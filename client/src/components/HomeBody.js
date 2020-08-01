import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Topics from './Topics'


const HomeBody = () => {
    return (
        <Container fluid>
        <Row>
            <Col xs={12}>
                <Topics />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <Topics />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <Topics />
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
            <Topics />
            </Col>
        </Row>
        </Container>
    )
}

export default HomeBody