import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import meme_park_logo from './meme_park_logo_circle.png'



const SearchNav = ({setSearchTerm, handleSubmit}) => {
    const imagecss = {width: "75px"}  
    
    return (
      
        <Navbar bg="dark" sticky="top" style={{marginBottom: "40px"}}>
            <Navbar.Brand href="#home">
            <img
                src={meme_park_logo}
                style={imagecss}
                className="d-inline-block align-top"
                alt="logo"
            />
            </Navbar.Brand>
        
            <Form onSubmit={handleSubmit} style={{width: "100vw"}}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearchTerm(e.target.value)} />
            </Form>
        </Navbar>
       
    )
}

export default SearchNav