import React from "react";
import Topbar from './Topbar'
import './Support.css'
import { Carousel, Container } from "react-bootstrap";
import Nero from "./img/nero.jpg"
import Washington from "./img/washington.jpg"
import Jade from "./img/jade.jpg"

function Support() {

  return (
    <div className="Support">
      <Topbar />
      <h1>Support</h1>
      <Container>
        <Carousel>
          <Carousel.Item>
            <img src={Washington} className="mt-3 mb-3" height={300} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Nero} className="mt-3 mb-3" height={300} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={Jade} className="mt-3 mb-3" height={300} />
          </Carousel.Item>
        </Carousel>
        <p className="lead">Pay homage to the Gods of QDN and let them guide you to your destiny.</p>
        <p className="cryptobox"><a href="https://www.buymeacoffee.com/qdngods">Gift the Gods Wine</a></p>
        <p className="cryptobox">Send Bitcoin <br />
          <span className="cryptoaddress">1MNpycFqiy3BFQqEQh2ikpvitEXV35UvR6</span>
        </p>
        <p className="cryptobox">Send Ethereum <br />
          <span className="cryptoaddress-sm">0x675c08bdd5a64673bd33fd5e6ba53d957d5b7866</span>
        </p>
        <p  className="cryptobox">Send Dogecoin <br />
          <span className="cryptoaddress">D7Y3FYd1tAktQZB6wgmvz8EwncgMWUh8jV</span>
        </p>
      </Container>
    </div>
  )
}

export default Support
