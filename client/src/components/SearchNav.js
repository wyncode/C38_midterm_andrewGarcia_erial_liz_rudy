import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


const SearchNav = () => {
    return (
        <Navbar bg="dark" sticky="top" style={{marginBottom: "40px"}}>
            <Navbar.Brand href="#home">
            <img
                src="http://placehold.jp/99ccff/003366/40x40.png"
                className="d-inline-block align-top"
                alt="logo"
            />
            </Navbar.Brand>
        
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
        </Navbar>
    )
}

export default SearchNav