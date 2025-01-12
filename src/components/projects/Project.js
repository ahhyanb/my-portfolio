import "./Project.css";

function Projects() {
    const projectList = [
        {   
            id: 1,
            image: "tv-show-app.png",
            title: "TV Show Finder",
            description: "A full-stack web application that allows users to search for TV shows using a third-party API, view detailed show information, and save their favorite shows for future reference. The app features a responsive and user-friendly interface built with React, a robust backend powered by Node.js, and a PostgreSQL database for storing user data and favorite shows.",
            technologies: ["React", "Node.js", "PostgreSQL"],
            link: "https://github.com/your-github-username/tv-show-finder",
        },
        {
            id: 2,
            image: "flip-card.png",
            title: "Flashcard App",
            description: "An interactive flashcard application designed to help users study and test their knowledge effectively. Users can create custom decks, add flashcards with questions and answers, and flip through them to practice. Built with React for dynamic UI interactions, Express for the backend, and styled with Bootstrap for a clean and modern look.",
            technologies: ["React", "Express", "Bootstrap"],
            link: "https://github.com/your-github-username/flashcard-app",
        },
        {
            id: 3,
            image: "my-portfolio.png",
            title: "Portfolio Website",
            description: "A professional portfolio website to showcase my skills, projects, and experience in web development. This responsive site includes a visually appealing homepage, detailed project sections, and contact information. Built using React for dynamic content rendering, CSS for custom styling, and HTML for structuring content.",
            technologies: ["React", "CSS", "HTML"],
            link: "https://your-portfolio-link.com",
        },
    ];    

    return (
    <div>

        <hr />

        <h1 className="component-title">projects</h1>

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

        <hr />

    </div>
    );
}

export default Projects;
