import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import meme_park_logo from './meme_park_logo_circle.png';
import { useHistory } from 'react-router';


const SearchNav = ({ setSearchTerm, searchTerm, setResults }) => {
  const imagecss = { width: '75px' };
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`/api/search?searchQuery=${searchTerm}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setResults(res);
        history.push('/search');
      })
      .catch((error) => {
        console.log(error);
      });

     
  };

  return (
    <Navbar bg="dark" sticky="top" style={{ marginBottom: '40px' }}>
      <Navbar.Brand href="#home">
        <img
          src={meme_park_logo}
          style={imagecss}
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Form onSubmit={handleSubmit} style={{ width: '100vw' }}>
        <FormControl
          type="text"
          placeholder="Search"
          className="mr-sm-2"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
    </Navbar>
  );
};

export default SearchNav;
