import React from "react";
import './Footer.css'; // Import footer-specific styles

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Saloni Kanoje. All rights reserved.</p>
      <div className="social-icons">
        <a href="https://github.com/salonikanoje" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/saloni-kanoje-a9b497272/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
