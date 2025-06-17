import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

function Header({ onNavigate }) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		});

		const handleResize = () => {
			if (window.innerWidth > 768) {
				setIsMobileMenuOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<header className="header" data-aos="fade-down">
				<div className="logo-container">
					<span className="logo">rb</span>
					<span className="divider"></span>
					<h1 className="name">ryan bartolome</h1>
				</div>

				{/* Hamburger Icon */}
				<div
					className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
					onClick={toggleMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<nav className={`nav-container ${isMobileMenuOpen ? "active" : ""}`}>
					<button onClick={() => onNavigate("home")} className="nav-link">
						home
					</button>
					<button onClick={() => onNavigate("bio")} className="nav-link">
						bio
					</button>
					<button onClick={() => onNavigate("projects")} className="nav-link">
						projects
					</button>
					<button
						onClick={() => onNavigate("contact")}
						className="nav-link contact-link"
					>
						contact me
					</button>
				</nav>
			</header>

			<hr className="hr" />
		</>
	);
}

export default Header;
