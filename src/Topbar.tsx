import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import brand from './img/brand2.png'
import './Topbar.css'

function Topbar() {
  return (
    <div className="Topbar">
      <Navbar fixed="top" expand="sm" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              src={brand}
              className="d-inline-block align-top"
              alt="QDN Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/play">Play</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <Nav.Link href="/support">Support</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            {/* <Nav className="ms-auto">
            <Nav.Link href="#">Log out</Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Topbar
