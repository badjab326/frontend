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
        <div>
            <h2>{about.name}</h2>
            <h3>{about.email}</h3>
            <p>{about.bio}</p>
        </div>
    )

    // If data arrives return loaded() if not, Now Loading...
    return about ? loaded() : <h1>Loading...</h1>;
  }
  
  export default About;