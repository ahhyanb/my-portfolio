import "./Project.css";

function Projects() {
    const projectList = [
        {   
            id: 1,
            image: "",
            title: "TV Show Finder",
            description: "A web app to search and save your favorite TV shows, built with React, Node.js, and PostgreSQL.",
            technologies: ["React", "Node.js", "PostgreSQL"],
            link: "https://github.com/your-github-username/tv-show-finder",
        },
        {
            id: 2,
            image: "",
            title: "Flashcard App",
            description: "An interactive flashcard app for studying and self-testing, built with React and Express.",
            technologies: ["React", "Express", "Bootstrap"],
            link: "https://github.com/your-github-username/flashcard-app",
        },
        {
            id: 3,
            image: "",
            title: "Portfolio Website",
            description: "A personal portfolio website to showcase my projects and skills, built with React and CSS.",
            technologies: ["React", "CSS", "HTML"],
            link: "https://your-portfolio-link.com",
        },
    ];

    return (
    <div>
        <h1>projects</h1>

        <div className="projects-container">
            <div className="projects-list">
                {
                    projectList.map((project) => (
                        <div className="project-card" key={project.id}>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="projrct-image"
                            />

                            <div className="project-technologies">
                                {project.technologies.map((tech, index) => (
                                    <div className="tech" key={index}>
                                        {tech}
                                    </div>
                                ))}
                            </div>
                            <div className="project-content">
                                <h2 className="project-title">{project.title}</h2>
                                <p className="project-description">{project.description}</p>
                                <a 
                                    href={project.link}
                                    className="project-button" 
                                >
                                    View Project
                                </a>

                            </div>

                        </div>
                    ))
                }
            </div>


        </div>
    </div>
    );
}

export default Projects;
