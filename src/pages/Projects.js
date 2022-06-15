import { useState, useEffect } from 'react';

const Projects = (props) => {
    // Create state to hold projects
    const [projects, setProjects] = useState(null);

    // Create function to make api call
    const getProjectsData = async () => {
        // Make api call, get response
        const response = await fetch(props.URL + "projects")
        // Turn response into javascript object
        const data = await response.json()
        // Set projects state to data
        setProjects(data)
    };

    // Make initial call for data inside useEffect, happens once on load
    useEffect(() => {  getProjectsData()
    }, [])

    // Define function to return JSX needed upon data retrieval
    const loaded = () => {
        return projects.map((project) => (
            <div>
                <h1>{project.name}</h1>
                <img src={project.image} alt={project.name}/>
                <a href={project.git}>
                    <button>Github</button>
                </a>
                <a href={project.live}>
                    <button>Live Site</button>
                </a>
            </div>
        ))
    }

    return projects ? loaded() : <h1>Now Loading...</h1>;
  }
  
  export default Projects;