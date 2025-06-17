import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Bio.css";

function Bio() {
	useEffect(() => {
		AOS.init({
			duration: 800,
			once: true,
		});
	}, []);

	return (
		<div className="bio-container">
			{/* Left Brace */}
			<div className="brace">{'{'}</div>

			{/* Bio Section */}
			<div className="bio-section" data-aos="fade-up">
				<div className="quote">
					<p className="bio-subtext">
						Hi, I’m Ryan—a full-stack software engineer specializing in
						<span className="highlight"> JavaScript, React, and Node.js</span>.
					</p>
					<p className="bio-subtext">
						I love building web apps, solving problems, and constantly learning. Outside of coding,
						I enjoy photography, design, and boba.
					</p>
				</div>
			</div>

			{/* Right Brace */}
			<div className="brace">{'}'}</div>

			{/* Download Resume Button */}
			<div className="button-container" data-aos="zoom-in">
				<a
					href="/ryan-bartolome-resume.pdf"
					download="ryan-bartolome-resume.pdf"
					className="resume-button"
				>
					Download Resume
				</a>
			</div>

			{/* Experience Section */}
			<div className="experience-section">
				<h2 className="experience-title" data-aos="fade-up">experience</h2>

				<div className="experience-card" data-aos="fade-up" data-aos-delay="100">
					<h3>Software Engineer Student</h3>
					<p className="company">Chegg Skills (formerly Thinkful)</p>
					<p className="date">Apr 2024 – Present | Remote</p>
					<ul>
						<li>Acquired comprehensive knowledge of industry best practices and software development standards, with expertise in JavaScript, HTML5, CSS3, React, Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.</li>
						<li>Successfully developed and launched mobile-first applications.</li>
						<li>Strengthened expertise in database management and RESTful API design through hands-on projects.</li>
						<li>Collaborated with mentors to refine technical and professional skills.</li>
					</ul>
				</div>

				<div className="experience-card" data-aos="fade-up" data-aos-delay="200">
					<h3>AWS Certification Program</h3>
					<p className="company">Amazon Web Services (AWS)</p>
					<p className="date">Aug 2024 – Present | Remote</p>
					<ul>
						<li>Currently pursuing AWS certification to gain expertise in cloud computing, infrastructure, and services.</li>
						<li>Acquired foundational knowledge of AWS architecture, services, and best practices.</li>
						<li>Hands-on experience with services like EC2, S3, and Lambda.</li>
						<li>Acquired knowledge in Python programming language.</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Bio;
