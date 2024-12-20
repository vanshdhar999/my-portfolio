import React from "react";
import nameLogo from "../images/profile.png";
import phoneLogo from "../images/phone-call.png";
import emailIcon from "../images/email.png";

const Contact = () => {
  return (
    <div className="contact-container" data-aos="fade-up">
      <div className="contact-items">
        <div className="contact-item">
          <img src={nameLogo} alt="Name" className="contact-icon" />
          <div>
            <h3>Name</h3>
            <p>Vansh Dhar</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={phoneLogo} alt="Phone" className="contact-icon" />
          <div>
            <h3>Phone</h3>
            <p>8899839864</p>
          </div>
        </div>
        <div className="contact-item">
          <img src={emailIcon} alt="Email" className="contact-icon" />
          <div>
            <h3>Email</h3>
            <p>11avanshdhar@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="resume-button-container">
        <a
          href="/resume.pdf"
          className="custom-button resume-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>
      </div>
    </div>
  );
};

export default Contact;
