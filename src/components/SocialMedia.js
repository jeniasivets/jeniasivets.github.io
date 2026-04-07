import { ReactComponent as LinkedInIcon } from "../images/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";
function SocialMedia(){
    return(
        <div className="social-media">
            <a href="https://www.linkedin.com/in/evgeniia-sivets" className="sm-btn">
            <LinkedInIcon className="sm-icon sm-icon-linkedin" />
            </a>

           <a href="mailto:evgeniasivets@gmail.com" className="sm-btn">
           <EmailIcon className="sm-icon sm-icon-email" />
           </a>

            <a href="https://github.com/jeniasivets" className="sm-btn">
            <GitHubIcon className="sm-icon sm-icon-github" />
            </a>
        </div>
    );
   
}
export default SocialMedia;