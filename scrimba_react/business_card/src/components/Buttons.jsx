import mailIcon from "../assets/mail_icon.png";
import linkedinIcon from "../assets/linkedin_icon.png";
export default function Buttons() {
  return (
    <div className="contact-buttons">
      <button id="email-btn">
        <img src={mailIcon} alt="Mail icon" />
        <span>Email</span>
      </button>
      <button id="linkedin-btn">
        <img src={linkedinIcon} alt="Linkedin icon" width="13px" />
        <span>Linkedin</span>
      </button>
    </div>
  );
}
