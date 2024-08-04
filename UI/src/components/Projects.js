import React, { useEffect, useState } from 'react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => setProjects(data));
    }, []);

    return (
        <div>
            <h1>Projects</h1>
            <ul>
                {projects.map(project => (
                    <li key={project.name}>{project.name}: {project.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;