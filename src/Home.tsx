import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import logo from './img/logo.png'
// import appstoreicon from './img/appstoreicon.svg'
// import exampleoption from './img/exampleoption.png'
import HHH from "./img/Outcomes/HHH.png"
import HHT from "./img/Outcomes/HHT.png"
import HTH from "./img/Outcomes/HTH.png"
import HTT from "./img/Outcomes/HTT.png"
import THH from "./img/Outcomes/THH.png"
import THT from "./img/Outcomes/THT.png"
import TTH from "./img/Outcomes/TTH.png"
import TTT from "./img/Outcomes/TTT.png"
import example from "./img/example.png"
import './Home.css'


library.add(fas);

function Home() {

  return (
    <div className="Home">
      <div className="Home-navbar">
        <Navbar expand="sm" variant="dark">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/play">Play</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div className="section header">
        <img src={logo} className="logo" alt="Logo" />
        <h1>Free Yourself From Indecision</h1>
        <Link to="/play" className="btn btn-dark playbtn">Play</Link>
        {/* <br />
        <img src={appstoreicon} className="appstoreicon" alt="App Store Icon" /> */}
      </div>

      <div className="section problem">
        <h2>Do you struggle to make decisions?</h2>
        <table>
          <tbody>
            <tr>
              <td className="icon"><FontAwesomeIcon icon={["fas", "check"]} /></td>
              <td>Do you struggle with making choices?</td>
              <td className="icon"><FontAwesomeIcon icon={["fas", "check"]} /></td>
              <td>Are you overwhelmed by the trade-offs between options?</td>
            </tr>
            <tr>
              <td className="icon"><FontAwesomeIcon icon={["fas", "check"]} /></td>
              <td>Are you constantly overthinking simple problems like what to eat for dinner?</td>
              <td className="icon"><FontAwesomeIcon icon={["fas", "check"]} /></td>
              <td>Have you ever spent more time browsing for something to watch than actually watching?</td>
            </tr>
            <tr>
              <td className="icon"><FontAwesomeIcon icon={["fas", "check"]} /></td>
              <td>Are you failing to achieve your goals because of inaction?</td>
              <td className="icon"><FontAwesomeIcon icon={["fas", "check"]} /></td>
              <td>Would you be happier if you spent more time doing and less time thinking?</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section solution">
        <h2>Master Your Indecision</h2>
        <div className="blurb">
          <p>In order to achieve your goals, you must unchain yourself from your own uncertainty.  Instead of toiling in your indecision, you can harness it.</p>
          <p className="font-weight-bold">QDN is your key.</p>
          <p></p>
        </div>
      </div>
      <div className="section qdnsystem">
        <div className="blurb">
          <h2>The QDN System</h2>
          <p>QDN helps you quickly come to a decision for your problem.</p>
          <p>There are 8 possible outcomes when you flip a quarter, a dime, and a nickel.</p>
          <table className="outcome-table">
            <tbody>
              <tr>
                <td>
                  <img src={HHH} className="outcome" />
                </td>
                <td>
                  <img src={THH} className="outcome" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={HHT} className="outcome" />
                </td>
                <td>
                  <img src={THT} className="outcome" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={HTH} className="outcome" />
                </td>
                <td>
                  <img src={TTH} className="outcome" />
                </td>
              </tr>
              <tr>
                <td>
                  <img src={HTT} className="outcome" />
                </td>
                <td>
                  <img src={TTT} className="outcome" />
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>For each outcome, choose 1 possible course of action.</p>
          {/* <img src={exampleoption} className="exampleoption" /> */}
          <p>Then flip the 3 coins, and get 1 result and <a href="/blog/the-tenets-of-qdn" className="font-weight-bold">follow it.</a></p>
        </div>
      </div>
      <div className="section example solution">
        <div className="blurb">
          <h2>Example</h2>
          <p>Say you're having a difficult time deciding what to do with some free time.</p>
          <p>QDN can assist you with this dilemma.</p>
          <p>Simply come up with 8 things to do. <a href="/blog/the-tenets-of-qdn"><i>(Why 8?)</i></a></p>
          <img src={example} className="exampleImg" />
          <p>Note that in this example, all options where the Quarter flips to heads involve productive activities while tails are more leisurely. Including some order in how you list your options is recommended to achieve optimal results.</p>
        </div>
      </div>
      <div className="section whyqnd problem">
        <div className="blurb">
          <h2>What Are You Waiting For?</h2>
          <p>If you follow the rules by coming up with 8 options for your problem, order them as you see fit, and always make a good faith effort to perform whichever option is selected for you, it is said that the gods of QDN will always select the best option for you each time you play (even if it doesn't seem like it)!</p>
          <Link to="/play" className="btn btn-dark playbtn">Play</Link>
          {/* <br />
          <img src={appstoreicon} className="appstoreicon" alt="App Store Icon" /> */}
        </div>
      </div>
    </div>
  )
}

export default Home
