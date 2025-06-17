import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Home.css";

function Home() {
	useEffect(() => {
		AOS.init({
			duration: 1000,
			once: true,
		});
	}, []);

	return (
		<div className="container">
			<div className="text-container" data-aos="fade-right">
				<h1>
					hello!
					<br />
					<span className="highlight">i'm ryan,</span>
				</h1>
				<h2>full-stack software engineer</h2>

				<a
					href="https://www.linkedin.com/in/ryanmartbartolome/"
					target="_blank"
					rel="noopener noreferrer"
					className="lets-connect"
				>
					let's connect!
				</a>
			</div>

			<img
				src="./portrait-transparent.webp"
				alt="Ryan's Portrait"
				className="portrait"
				data-aos="fade-left"
			/>

			<hr className="hr-home" />
		</div>
	);
}

export default Home;
