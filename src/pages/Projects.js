import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

const Projects = (props) => {
    // Create state to hold projects
    const [projects, setProjects] = useState(null);
    const [modalIsOpen, setIsOpen] = useState(false);
    const [projectUrl, setProjectUrl] = useState('');
    let subtitle;


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
    useEffect(() => {
        getProjectsData()
    }, [])

    Modal.setAppElement(document.getElementById('container'));

    function openModal(newProjectUrl) {
        setProjectUrl(newProjectUrl)
        console.log(newProjectUrl)
        setIsOpen(true);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    // Define function to return JSX needed upon data retrieval
    const loaded = () => {

        const projectGrid = projects.map((project) => (
            <div className='item'>
                <h1 className='projName'>{project.name}</h1>
                <img onClick={() => openModal(project.live)} className='projectPics' src={project.image} alt={project.name} />
                <br />
                <p className="description">{project.description}</p>
                <a target="_blank" href={project.git}>
                    <img className="icons" src="https://cdn.discordapp.com/attachments/274665064630583297/998715710316478564/github.png"></img>
                </a>
                <a target="_blank" href={project.live}>
                <img className="icons" src="https://cdn.discordapp.com/attachments/274665064630583297/998721076584529990/www.png"></img>
                </a>
            </div>
        ))

        return (
            <div className='projects'>
                <h1 className="projTitle">PROJECTS</h1>
                <div className="container" id='container'>
                    {projectGrid}
                    <Modal
                        isOpen={modalIsOpen}
                        onAfterOpen={afterOpenModal}
                        onRequestClose={closeModal}
                        contentLabel="Project Demo"
                    >
                        <iframe className="iframe" src={projectUrl} title="Project"></iframe>
                    </Modal>
                </div>
            </div>
        )
    }

    return projects ? loaded() : <></>;
}

export default Projects;