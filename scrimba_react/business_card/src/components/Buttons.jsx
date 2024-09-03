import mailIcon from "../assets/mail_icon.png";
import linkedinIcon from "../assets/linkedin_icon.png";
export default function Buttons() {
  return (
    <div className="contact-buttons">
      <a href="mailto:vicjaime92@gmail.com">
        <button id="email-btn">
          <img src={mailIcon} alt="Mail icon" />
          <span>Email</span>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/christian-jaime-7a429a1a6/"
        target="_blank"
      >
        <button id="linkedin-btn">
          <img src={linkedinIcon} alt="Linkedin icon" width="13px" />
          <span>Linkedin</span>
        </button>
      </a>
    </div>
  );
}
