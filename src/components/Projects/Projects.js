import React, { useEffect, useState } from 'react';
import DisplayProjects from './DisplayProjects/DisplayProjects';

const Projects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
       },[])
    return (
        <section id='projects'>
            <h1 className='text-2xl my-10 text-center font-bold'>Projects</h1>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      {
        projects.map(project =><DisplayProjects
        key={project.id}
        project={project}
        ></DisplayProjects>)
      }
    </div>
        </section>
    );
};

export default Projects;