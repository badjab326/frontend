import { useState, useEffect } from 'react'

const About = (props) => {
    // Create state to hold about data
    const [about, setAbout] = useState(null);
    // Create function to make api call
    const getAboutData = async () => {
        // Make api call and get response
        const response = await fetch(props.URL + "about")
        // Turn response into js object
        const data = await response.json()
        // Set the about state to data
        setAbout(data)
    };

    // Make an initial call for data inside a useEffect, only happens once on load
    useEffect(() => {  getAboutData()
    }, [])

    // Define a function that will return the JSX needed upon getting data
    const loaded = () => (
        <div className='about'>
            <img className="headshot" src={about.headshot}/>
            <h1 className="name">{about.name}</h1>
            {/* <h3>{about.email}</h3> */}
            <p className="bio">{about.bio}</p>
            <br />
            <div className="techUsed">
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
                <br />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" />
            </div>
        </div>
    )

    // If data arrives return loaded() if not, Now Loading...
    return about ? loaded() : <></>;
  }
  
  export default About;