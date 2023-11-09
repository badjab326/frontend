const Contact = (props) => {
  return (
    <div className="contact">
      <h1 className="contactTitle">CONTACT ME</h1>
      <div className="contactInfo">
        <a
          href="https://www.linkedin.com/in/julian-a-beard/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            className="conLogo"
            src="/images/linkedInLogo.png"
            title="LinkedIn"
            alt="LinkedIn"
          />
        </a>
        <a href="https://github.com/badjab326" rel="noreferrer" target="_blank">
          <img
            className="conLogo"
            src="/images/githubLogo.png"
            title="GitHub"
            alt="GitHub"
          />
        </a>
        <br />
        <a href="mailto:badjab326@gmail.com" rel="noreferrer" target="_blank">
          <img
            className="conLogo"
            src="/images/gmailLogo.png"
            title="E-Mail"
            alt="E-Mail"
          />
        </a>
        <a href="tel:5176264000">
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
