import React from 'react';
import Logo from "../assets/logo.png"
import "../styles/ContactUs.css";

function Contact() {
  return (
    <div className="contact">
        <div 
            className="leftSide"
            style={{ backgroundImage: `url(${Logo})` }}>
        </div>
        <div className="rightSide">
            <h1>Contact Us</h1>

            <form id="contact-form" method="POST">
                <label htmlFor="name" > Full Name</label>
                <input name="name" placeholder="Enter full name.." type="text" />
                <label htmlFor="email">Email</label>
                <inputs name="eamil" placeholder="Enter email.." type="email" />
                <label htmlFor="message" >Meassage</label>
                <textarea rows="6" placeholder="Enter message...." name="meassage" required></textarea>
                <button type="submit"> Send Message </button>
            </form>
        </div>  

    </div>
  )
}

export default Contact