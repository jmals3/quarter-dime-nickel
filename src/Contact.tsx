import React from "react";
import Topbar from './Topbar'
import './Contact.css'

function Contact() {

  return (
    <div className="Contact">
      <Topbar />
      <h1>Contact</h1>
      <p>Please email <a href="mailto:qdngods@gmail.com">qdngods@gmail.com</a> with your inquiry.</p>
    </div>
  )
}

export default Contact
