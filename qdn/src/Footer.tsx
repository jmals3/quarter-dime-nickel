import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'
import './Footer.css'
import { Nav, Navbar } from 'react-bootstrap';

function Footer() {

  return (
    <div className="Footer">
      <div className="Footer-navbar">
        <Navbar expand="sm" variant="dark">
            <Nav className="ml-auto">
              <Nav.Link href="#">Privacy</Nav.Link>
              <Nav.Link href="#">Terms of Service</Nav.Link>
              <Nav.Link href="#">&#169; QDN Software</Nav.Link>
            </Nav>
        </Navbar>
      </div>
    </div>
  )
}

export default Footer
