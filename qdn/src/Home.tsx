import React from 'react'
import logo from './img/logo.png'
import appstoreicon from './img/appstoreicon.svg'
import exampleoption from './img/exampleoption.png'
import HHH from "./img/Outcomes/HHH.png"
import HHT from "./img/Outcomes/HHT.png"
import HTH from "./img/Outcomes/HTH.png"
import HTT from "./img/Outcomes/HTT.png"
import THH from "./img/Outcomes/THH.png"
import THT from "./img/Outcomes/THT.png"
import TTH from "./img/Outcomes/TTH.png"
import TTT from "./img/Outcomes/TTT.png"
import './Home.css'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fas);

function Home() {

  return (
    <div className="Home">
      <div className="Home-navbar">
        <Navbar expand="sm" variant="dark">
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/play">Play</Nav.Link>
              <Nav.Link href="#">Download</Nav.Link>
              <Nav.Link href="#">Blog</Nav.Link>
              <Nav.Link href="#">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <div className="section header">
        <img src={logo} className="logo" alt="Logo" />
        <h1>Free Yourself From Indecision</h1>
        <Link to="/play" className="btn btn-dark playbtn">Play</Link>
        <br />
        <img src={appstoreicon} className="appstoreicon" alt="App Store Icon" />
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
          <p className="emphasis">QDN is your key.</p>
          <p></p>
        </div>
      </div>
      <div className="section qdnsystem">
        <div className="blurb">
          <h2>The QDN System</h2>
          <p>QDN helps you quickly come to a decision for your problem.</p>
          <p>There are 8 possible outcomes when you flip a quarter, a dime, and a nickel.</p>
          <a href="#"><i>Why is 8 significant?</i></a>
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
          <p>Then flip the 3 coins, and get 1 result and <a href="#" className="emphasis">follow it.</a></p>
        </div>
      </div>
      <div className="section example solution">
      <div className="blurb">
          <h2>Example</h2>
        </div>
        update the Play screen and use screenshots here.
      </div>
      <div className="section whyqnd problem">
        <div className="blurb">
          <h2>Why QDN?</h2>
        </div>
        include this?  might be better off putting this in the blog.
        {/* <p>This simple game allows for a structured way, to randomly make choices.  All three coins are different so when flipped there are 8 possible outcomes.</p>
        <p>Before flipping the coins, you must label each possible outcome with a potential course of action.  You can do this by jotting down your 8 options on a sheet of paper, by using this webiste, or by downloading the official QDN iPhone app.  Then the quarter, dime, and nickel are all flipped at once.  The option corresponding to the heads and tails of each coin is selected.</p> */}

      </div>
      <div>
        <br />
        <h3>Slave of Your Own Indecision</h3>
        <p>Have you ever spent more time trying to find a movie on Netflix than you actually spent watching?  Or how many hours have you wasted trying to decide on where to eat, or what book to read, or what to do tonight?  If you're like me, then the answer is - too much time.  In fact, if you just started the first movie that piqued your interest, then you probably could have finished it.  Maybe you would have even had enough time to start the next one before bed.</p>
        <p>Unfortunately I've found that this indecision manifests itself in many facets of our lives.  Many of us have dreams of getting fit or becoming rich.  You know what you want, and you are aware of the many ways in which others have reached this goal, but you can never seem to make progress towards it.  Most of the time it is not because you are lazy or untalented, but because you are hampered by your own indecision.</p>

        <p>At some subconscious level, we realize the implications of our decisions.  By choosing to do one thing, we eliminate time that we could have used to do something else.  We all recognize these unspoken tradeoffs to a certain extent, so we put pressure on ourselves to make the most of our time.  This often has a contradictory effect because you end up worrying more about choosing your path rather than working towards your goal.  Time and time again people will get frustrated and give up before they even reach the first step because they can't decide on how to get started.</p>

        <p>In order to achieve your goals, you must unchain yourself from your own uncertainty and take action. QDN is your key.</p>

        <h3>Master Your Indecision</h3>
        <p>I've found that instead of toiling in our indecision, we can harness it.  To do this we must relieve ourselves from the pressure of deciding.  When we hit these mental impasses, we must seek help.  In many situations, when there is no clear "best" course of action, logically reasoning through the decision is impractical and inefficient.  We're better off making a random decision than going through all of that analysis.  That is where Quarter Dime Nickel comes into play.</p>



        <p>To get the most out of QDN, it is best to provide a logical order when labeling the outcomes.  You can use individual coins to represent micro-decisions within the overall decision being made.</p>

        <p>To demonstrate, consider this example QDN for someone trying to figure out what to do after work.  The activities are divided by active vs. non-active depending on the outcome of the quarter.  If the quarter lands on heads, then some form of workout will be chosen.  If the quarter lands on tails, then a more sedentary activity is chosen.  Also, recognize how the ordering can contain meaning.  For the non-physical activities, note that they decrease in difficulty somewhat as you move down the list.  It is important to sometimes include easy, mindless tasks in your options so you get the occasional break and don't burn yourself out.</p>

        <h3>Achieving Your Destiny</h3>
        <p>The most paramount rule of QDN is to obey the outcome of each game.  The resulting course of action determined by the coin toss must at least be attempted before you play again.  It is fabled that if you play with integrity and always give your chosen recourse a good faith effort, then the game will always choose the best option for you in that moment in time and guide you to your destiny.</p>
      </div>
    </div>
  )
}

export default Home
