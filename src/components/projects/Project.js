import "./Project.css";

function Projects() {
    const projectList = [
        {
            title: "TV Show Finder",
            description: "A web app to search and save your favorite TV shows, built with React, Node.js, and PostgreSQL.",
            technologies: ["React", "Node.js", "PostgreSQL"],
            link: "https://github.com/your-github-username/tv-show-finder",
        },
        {
            title: "Flashcard App",
            description: "An interactive flashcard app for studying and self-testing, built with React and Express.",
            technologies: ["React", "Express", "Bootstrap"],
            link: "https://github.com/your-github-username/flashcard-app",
        },
        {
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects and skills, built with React and CSS.",
            technologies: ["React", "CSS", "HTML"],
            link: "https://your-portfolio-link.com",
        },
    ];

    return (
        <div className="projects-container">
            <h1>Projects</h1>
            <div className="projects-list">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p><strong>Technologies:</strong> {project.technologies.join(", ")}</p>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="project-link"
                        >
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
