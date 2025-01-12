import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2025 Ryan Bartolome's Portfolio. All rights reserved.</p>
                <div className="footer-links">
                    <a href="#bio">Bio</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
            <div className="social-media">
                <a href="https://github.com/ahhyanb/" target="_blank" aria-label="GitHub" rel="noopener noreferrer">
                    <img src="github.svg" alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/ryanmartbartolome/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                    <img src="icons8-linkedin.svg" alt="LinkedIn" />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
