import React from "react";
import "./Bio.css";

function Bio() {
    return (
        <div className="bio-container">
            {/* Left Brace */}
            <div className="brace">{'{'}</div>

            {/* Bio Section */}
            <div className="bio-section">
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
            <div className="button-container">
                <a
                    href="/ryan-bartolome-resume.pdf" // Replace with the actual path to your resume
                    download="ryan-bartolome-resume.pdf" // Optional: Specify the downloaded file name
                    className="resume-button"
                >
                    Download Resume
                </a>
            </div>
            
            {/* Experience Section */}
            <div className="experience-section">
                <h2 className="experience-title">experience</h2>

                <div className="experience-card">
                    <h3>Software Engineer Student</h3>
                    <p className="company">Chegg Skills (formerly Thinkful)</p>
                    <p className="date">Apr 2024 – Present | Remote</p>
                    <ul>
                        <li>
                            Acquired comprehensive knowledge of industry best practices and software 
                            development standards, with expertise in JavaScript, HTML5, CSS3, React, 
                            Node.js, PostgreSQL, RESTful APIs, algorithms, and data structures.
                        </li>
                        <li>Successfully developed and launched mobile-first applications.</li>
                        <li>
                            Strengthened expertise in database management and RESTful API design 
                            through hands-on projects.
                        </li>
                        <li>Collaborated with mentors to refine technical and professional skills.</li>
                    </ul>
                </div>

                <div className="experience-card">
                    <h3>AWS Certification Program</h3>
                    <p className="company">Amazon Web Services (AWS)</p>
                    <p className="date">Aug 2024 – Present | Remote</p>
                    <ul>
                        <li>
                            Currently pursuing AWS certification to gain expertise in cloud computing, 
                            infrastructure, and services.
                        </li>
                        <li>
                            Acquired foundational knowledge of AWS architecture, services, and best practices.
                        </li>
                        <li>Hands-on experience with services like EC2, S3, and Lambda.</li>
                        <li>Acquired knowledge in Python programming language.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Bio;
