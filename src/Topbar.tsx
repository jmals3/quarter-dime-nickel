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
      <Container>
        <Navbar fixed="top" expand="sm" variant="dark">
          <Navbar.Brand href="/">
            <img
              src={brand}
              className="d-inline-block align-top"
              alt="QDN Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/play">Play</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Download</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
            <Nav.Link href="#">Log out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  )
}

export default Topbar
