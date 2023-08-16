import { useState } from 'react';
import ProjectsData from '../data/projects.json'
import Modal from 'react-modal';

const Projects = () => {
    // Create state to hold projects
    const [modalIsOpen, setIsOpen] = useState(false);
    const [projectUrl, setProjectUrl] = useState('');
    let subtitle;

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

        const projectGrid = ProjectsData.map((project) => (
            <div className='item'>
                <h1 className='projName'>{project.name}</h1>
                <img onClick={() => openModal(project.live)} className='projectPics' src={project.image} alt={project.name} />
                <br />
                <p className="description">{project.description}</p>
                <p className="description"><span className="techUsed">Tech Used:</span> {project.tech}</p>
                <a target="_blank" rel="noreferrer" href={project.git}>
                    <img className="icons" src="https://cdn.discordapp.com/attachments/274665064630583297/998715710316478564/github.png" alt="GitHub Link"></img>
                </a>
                <a target="_blank" rel="noreferrer" href={project.live}>
                <img className="icons" src="https://cdn.discordapp.com/attachments/274665064630583297/998721076584529990/www.png" alt="Live Site Link"></img>
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

export default Projects;