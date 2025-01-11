import React from "react";
import "./Header.css"; 

function Header({ onNavigate }) {
    return (
        <>
            <header className="header">
                <div className="logo-container">
                    <span className="logo">rb</span>
                    <span className="divider"></span>
                    <h1 className="name">ryan bartolome</h1>
                </div>
                <nav className="nav-container">
                    <button onClick={() => onNavigate("home")} className="nav-link">home</button>
                    <button onClick={() => onNavigate("bio")} className="nav-link">bio</button>
                    <button onClick={() => onNavigate("projects")} className="nav-link">projects</button>
                    <button onClick={() => onNavigate("contact")} className="nav-link contact-link">contact me</button>
                </nav>
            </header>

            <hr className="hr" />
        </>
    );
}

export default Header;
