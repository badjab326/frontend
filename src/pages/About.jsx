import AboutData from "../data/about.json";
import GitHubCalendar from "react-github-calendar";

const About = () => {
  return (
    <div className="about">
      <img className="headshot" src={AboutData.headshot} alt="Julian" />
      <div>{(() => true)()}</div>
      <h1 className="name">{AboutData.name}</h1>
      <h1 className="title">Full-Stack Engineer</h1>
      <p className="bio">{AboutData.bio}</p>
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
  );
};

export default About;
