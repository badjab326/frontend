import AboutData from '../data/about.json'
import GitHubCalendar from 'react-github-calendar';

const About = () => {
    return (
        <div className='about'>
            <img className="headshot" src={AboutData.headshot} alt="Julian"/>
            <h1 className="name">{AboutData.name}</h1>
            <p className="bio">{AboutData.bio}</p>
            <br />
            <div className="techUsed">
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" title="JavaScript" alt="JavaScript"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" title="TypeScript" alt="TypeScript"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" title="HTML5" alt="HTML5"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" title="CSS3" alt="CSS3"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" title="Angular" alt="Angular"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" title="React" alt="React"/>
                <svg className="techIcon" viewBox="0 0 128 128"> <title>Express</title> <g fill="white">
                <path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                </g></svg>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg" title="NodeJS" alt="NodeJS"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" title="jQuery" alt="jQuery"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" title="Amazon Web Services" alt="Amazon Web Services"/>
                <br />
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-plain-wordmark.svg" title="Python" alt="Python"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" title="Django" alt="Python"/>
                <svg className="techIcon" viewBox="0 0 128 128"> <title>GitHub</title> <g fill="white">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M64 1.512c-23.493 0-42.545 19.047-42.545 42.545 0 18.797 12.19 34.745 29.095 40.37 2.126.394 2.907-.923 2.907-2.047 0-1.014-.04-4.366-.058-7.92-11.837 2.573-14.334-5.02-14.334-5.02-1.935-4.918-4.724-6.226-4.724-6.226-3.86-2.64.29-2.586.29-2.586 4.273.3 6.523 4.385 6.523 4.385 3.794 6.504 9.953 4.623 12.38 3.536.383-2.75 1.485-4.628 2.702-5.69-9.45-1.075-19.384-4.724-19.384-21.026 0-4.645 1.662-8.44 4.384-11.42-.442-1.072-1.898-5.4.412-11.26 0 0 3.572-1.142 11.7 4.363 3.395-.943 7.035-1.416 10.65-1.432 3.616.017 7.258.49 10.658 1.432 8.12-5.504 11.688-4.362 11.688-4.362 2.316 5.86.86 10.187.418 11.26 2.728 2.978 4.378 6.774 4.378 11.42 0 16.34-9.953 19.938-19.427 20.99 1.526 1.32 2.886 3.91 2.886 7.88 0 5.692-.048 10.273-.048 11.674 0 1.13.766 2.458 2.922 2.04 16.896-5.632 29.07-21.574 29.07-40.365C106.545 20.56 87.497 1.512 64 1.512z"></path>
                <path d="M37.57 62.596c-.095.212-.428.275-.73.13-.31-.14-.482-.427-.382-.64.09-.216.424-.277.733-.132.31.14.486.43.38.642zM39.293 64.52c-.203.187-.6.1-.87-.198-.278-.297-.33-.694-.124-.884.208-.188.593-.1.87.197.28.3.335.693.123.884zm1.677 2.448c-.26.182-.687.012-.95-.367-.262-.377-.262-.83.005-1.013.264-.182.684-.018.95.357.262.385.262.84-.005 1.024zm2.298 2.368c-.233.257-.73.188-1.093-.163-.372-.343-.475-.83-.242-1.087.237-.257.736-.185 1.102.163.37.342.482.83.233 1.086zm3.172 1.374c-.104.334-.582.485-1.064.344-.482-.146-.796-.536-.7-.872.1-.336.582-.493 1.067-.342.48.144.795.53.696.87zm3.48.255c.013.35-.396.642-.902.648-.508.012-.92-.272-.926-.618 0-.354.4-.642.908-.65.506-.01.92.272.92.62zm3.24-.551c.06.342-.29.694-.793.787-.494.092-.95-.12-1.014-.46-.06-.35.297-.7.79-.792.503-.088.953.118 1.017.466zm0 0"></path>
                <path d="M24.855 108.302h-10.7a.5.5 0 00-.5.5v5.232a.5.5 0 00.5.5h4.173v6.5s-.937.32-3.53.32c-3.056 0-7.327-1.116-7.327-10.508 0-9.393 4.448-10.63 8.624-10.63 3.614 0 5.17.636 6.162.943.31.094.6-.216.6-.492l1.193-5.055a.468.468 0 00-.192-.39c-.403-.288-2.857-1.66-9.058-1.66-7.144 0-14.472 3.038-14.472 17.65 0 14.61 8.39 16.787 15.46 16.787 5.854 0 9.405-2.502 9.405-2.502.146-.08.162-.285.162-.38v-16.316a.5.5 0 00-.5-.5zM79.506 94.81H73.48a.5.5 0 00-.498.503l.002 11.644h-9.392V95.313a.5.5 0 00-.497-.503H57.07a.5.5 0 00-.498.503v31.53c0 .277.224.503.498.503h6.025a.5.5 0 00.497-.504v-13.486h9.392l-.016 13.486c0 .278.224.504.5.504h6.038a.5.5 0 00.497-.504v-31.53a.497.497 0 00-.497-.502zm-47.166.717c-2.144 0-3.884 1.753-3.884 3.923 0 2.167 1.74 3.925 3.884 3.925 2.146 0 3.885-1.758 3.885-3.925 0-2.17-1.74-3.923-3.885-3.923zm2.956 9.608H29.29c-.276 0-.522.284-.522.56v20.852c0 .613.382.795.876.795h5.41c.595 0 .74-.292.74-.805v-20.899a.5.5 0 00-.498-.502zm67.606.047h-5.98a.5.5 0 00-.496.504v15.46s-1.52 1.11-3.675 1.11-2.727-.977-2.727-3.088v-13.482a.5.5 0 00-.497-.504h-6.068a.502.502 0 00-.498.504v14.502c0 6.27 3.495 7.804 8.302 7.804 3.944 0 7.124-2.18 7.124-2.18s.15 1.15.22 1.285c.07.136.247.273.44.273l3.86-.017a.502.502 0 00.5-.504l-.003-21.166a.504.504 0 00-.5-.502zm16.342-.708c-3.396 0-5.706 1.515-5.706 1.515V95.312a.5.5 0 00-.497-.503H107a.5.5 0 00-.5.503v31.53a.5.5 0 00.5.503h4.192c.19 0 .332-.097.437-.268.103-.17.254-1.454.254-1.454s2.47 2.34 7.148 2.34c5.49 0 8.64-2.784 8.64-12.502s-5.03-10.988-8.428-10.988zm-2.36 17.764c-2.073-.063-3.48-1.004-3.48-1.004v-9.985s1.388-.85 3.09-1.004c2.153-.193 4.228.458 4.228 5.594 0 5.417-.935 6.486-3.837 6.398zm-63.689-.118c-.263 0-.937.107-1.63.107-2.22 0-2.973-1.032-2.973-2.368v-8.866h4.52a.5.5 0 00.5-.504v-4.856a.5.5 0 00-.5-.502h-4.52l-.007-5.97c0-.227-.116-.34-.378-.34h-6.16c-.238 0-.367.106-.367.335v6.17s-3.087.745-3.295.805a.5.5 0 00-.36.48v3.877a.5.5 0 00.497.503h3.158v9.328c0 6.93 4.86 7.61 8.14 7.61 1.497 0 3.29-.48 3.586-.59.18-.067.283-.252.283-.453l.004-4.265a.51.51 0 00-.5-.502z"></path>
                </g></svg>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" title="Heroku" alt="Heroku"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" title="PostgreSQL" alt="PostgreSQL"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" title="MongoDB" alt="MongoDB"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg" title="Google Firebase" alt="Google Firebase"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg" title="Adobe Photoshop" alt="Adobe Photoshop"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" title="VSCode" alt="VSCode"/>
                <img className="techIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg" title="Docker" alt="Docker"/>
            </div>
            <br />
            {/* <div className="gitGraph">
            <GitHubCalendar
                blockRadius={7}
                color={"purple"}
                theme={{
                    level0: "#073B45",
                    level1: "#16697a",
                    level2: "#489fb5",
                    level3: "#82c0cc",
                    level4: "#A9E0EB"}}
                username="badjab326">
            </GitHubCalendar>
            </div> */}
        </div>
  )}
  
  export default About;