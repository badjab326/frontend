import AboutData from "../data/about.json";

const Contact = (props) => {
  return (
    <div className="contact">
      <h1 className="contactTitle">CONTACT ME</h1>
      <div className="contactInfo">
        <a href={AboutData.linkedin} rel="noreferrer" target="_blank">
          <img
            className="conLogo"
            src="/images/linkedInLogo.png"
            title="LinkedIn"
            alt="LinkedIn"
          />
        </a>
        <a href={AboutData.github} rel="noreferrer" target="_blank">
          <img
            className="conLogo"
            src="/images/githubLogo.png"
            title="GitHub"
            alt="GitHub"
          />
        </a>
        <br />
        <a href={"mailto:" + AboutData.email} rel="noreferrer" target="_blank">
          <img
            className="conLogo"
            src="/images/gmailLogo.png"
            title="E-Mail"
            alt="E-Mail"
          />
        </a>
        <a href={"tel:" + AboutData.phone}>
          <img
            className="conLogo"
            src="/images/phoneLogo.png"
            title="Call"
            alt="Call"
          />
        </a>
      </div>
    </div>
  );
};

export default Contact;
