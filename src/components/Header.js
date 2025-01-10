import React from "react";
import { Link } from "react-router-dom"
import "./Header.css"; 

function Header() {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <span className="logo">rb</span>
                    <span className="divider"></span>
                    <h1 className="name">ryan bartolome</h1>
                </div>
                <nav className="nav-container">
                    <Link to="/" className="nav-link">home</Link>
                    <span className="link-divider"></span>
                    <Link to="/about" className="nav-link">about</Link>
                    <span className="link-divider"></span>
                    <Link to="/projects" className="nav-link">projects</Link>
                    <span className="link-divider"></span>
                    <Link to="/contact" className="nav-link contact-link">contact me</Link>
                </nav>
            </header>

            <hr />
        </>
    );
}

export default Header;
