import { ReactComponent as LinkedInIcon } from "../images/linkedin.svg";
import { ReactComponent as GitHubIcon } from "../images/github.svg";
import { ReactComponent as EmailIcon } from "../images/email.svg";
function SocialMedia(){
    return(
        <div className="social-media">
            <a href="https://www.linkedin.com/in/evgeniia-sivets" className="sm-btn">
            <LinkedInIcon />
            </a>

           <a href="mailto:evgeniasivets@gmail.com" className="sm-btn">
           <EmailIcon />
           </a>

            <a href="https://github.com/jeniasivets" className="sm-btn">
            <GitHubIcon />
            </a>
        </div>
    );
   
}
export default SocialMedia;