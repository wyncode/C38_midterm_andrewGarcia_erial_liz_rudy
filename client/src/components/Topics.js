import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TopicCard from './TopicCard'

const Topics = () => {

const TopicCardStyle = {
    marginBottom: "100px"
}

    return (
<Container fluid>
        <Row style={TopicCardStyle}>
            <Col xs={12}>
            <TopicCard />
            </Col>
        </Row>
</Container>
    )
}

export default Topics