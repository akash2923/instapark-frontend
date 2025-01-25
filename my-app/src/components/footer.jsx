import React from 'react';
import "../stylesheet/footer.css"

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Left Side Content */}
      <div className="footer-left">
        <h2 className="footer-logo">InstaPark</h2>
        <p className="footer-description">
          InstaPark offers smart and convenient parking solutions, ensuring a hassle-free experience for our users. Book your parking spot anytime, anywhere.
        </p>
        <ul className="footer-links">
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <p className="footer-copyright">© {new Date().getFullYear()} InstaPark. All rights reserved.</p>
      </div>

      {/* Right Side Content */}
      <div className="footer-right">
        <h3 className="get-in-touch-heading">Get in Touch</h3>
        <form className="contact-form">
        <label>Username</label><br></br>
          <input
            type="text"
            name="username"
            placeholder="Your Name"
            className="form-input"
            required
          /><br></br>
          <label>Email</label><br></br>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            required
          /><br></br>
          <label>Textarea</label><br></br>
          <textarea
            name="message"
            placeholder="Your Message"
            className="form-textarea"
            rows="4"
            required
          ></textarea><br></br>
          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
