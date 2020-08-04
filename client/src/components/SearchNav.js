import React from 'react';
import './style.css';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import meme_park_logo from './meme_park_logo_circle.png';
import { useHistory } from 'react-router';

const SearchNav = ({ setSearchTerm, searchTerm, setResults }) => {
  
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    fetch(`/api/search?searchQuery=${searchTerm}`, {
      method: 'get',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        form.reset();

        if (res.length === 0) {
          return history.push('/error');
        }

        setResults(res);
        history.push('/search');
      })
      .catch((error) => {
    
      });
  };

  // const imagecss = { width: '75px' };

  return (
    <Navbar fixed="top" style={{ height: "100px"}}>
      <Navbar.Brand href="/">
        <img
          id="logo" 
          src={meme_park_logo}
          // style={imagecss}
          alt="logo"
        />
      </Navbar.Brand>
      <Form onSubmit={handleSubmit} style={{ width: '100%', display: "flex"}}>
        <FormControl
          id="searchbar" 
          style={{height: "65px"}}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form>
    </Navbar>
  );
};

export default SearchNav;
