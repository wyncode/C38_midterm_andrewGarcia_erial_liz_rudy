import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

const TopicNav = () => {
  const navlinkcss = { color: 'white' };
  const navcss = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%'
  };

  return (
    <Navbar bg="dark">
      <Nav style={navcss}>
        <Nav.Link style={navlinkcss} href="#reactions">
          Reactions
        </Nav.Link>
        <Nav.Link style={navlinkcss} href="#celebrities">
          Celebrities
        </Nav.Link>
        <Nav.Link style={navlinkcss} href="#music">
          Music
        </Nav.Link>
      </Nav>

      {/* <Form>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form> */}
    </Navbar>
  );
};

export default TopicNav;
