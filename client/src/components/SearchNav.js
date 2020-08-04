import React, {useEffect} from 'react';
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
  }

  const changeSearch = (e) => {
    e.preventDefault();
    const form = e.target;
    fetchGifs(form.value.trim());
    setSearchTerm(form.value);
  }

const fetchGifs = () => {
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

      if (res.length === 0 && searchTerm) {
        return history.push('/error');
      } else {
        setResults(res);
        return history.push('/search');
      }
    })
  }

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
      <Form 
      onSubmit={handleSubmit} 
      style={{ width: '100%', display: "flex"}}>
        <FormControl
          id="searchbar" 
          style={{height: "65px"}}
          type="text"
          placeholder="Search..."
          // onChange={(e) => setSearchTerm(e.target.value)}
          onChange={changeSearch}
        />
      </Form>
    </Navbar>
  );
};

export default SearchNav;
