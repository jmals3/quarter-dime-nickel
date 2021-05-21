import React from 'react'
import { Link } from "react-router-dom";
import logo from './logo.png'
import './Footer.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

function Footer() {

  return (
    <div className="Footer">
      <div className="Footer-navbar">
        <Navbar expand="sm" variant="dark">
          <Container>
            <Nav>
              <Nav.Link href="/privacy">Privacy</Nav.Link>
              <Nav.Link href="/tos">Terms of Service</Nav.Link>
              <li className="nav-link">&#169; qdngame.com</li>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Footer
