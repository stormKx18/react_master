import githubIcon from "../assets/github_icon.png";
import facebookIcon from "../assets/facebook_icon.png";
import instagramIcon from "../assets/instagram_icon.png";
import twitterIcon from "../assets/twitter_icon.png";
export default function Footer() {
  return (
    <footer>
      <a href="https://github.com/stormKx18" target="_blank">
        <img src={githubIcon} alt="Github logo" />
      </a>
      <a href="" target="_blank">
        <img src={facebookIcon} alt="Facebook logo" />
      </a>
      <a href="" target="_blank">
        <img src={instagramIcon} alt="Instagram logo" />
      </a>
      <a href="" target="_blank">
        <img src={twitterIcon} alt="Twitter logo" />
      </a>
    </footer>
  );
}
