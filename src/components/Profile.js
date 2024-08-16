import CTA from './CTA'
import profileImg from '../images/logo-new.jpeg'
import Button from "./Button";
import { ReactComponent as ResumeIcon } from "../images/resume.svg";

function Profile(){
    return(
        <div className="profile">
            <div className="profile-img">
                <img src={profileImg} alt="profile-img" />
            </div>
            <div className="profile-info">
                <p className="profile-name">Hi, I'm Evgeniia Sivets</p>
                <p className="profile-occupation">ML Engineer @ Generative AI</p>
            </div>

            <div className="hero__cta">
            <Button
              href="./CV_SivetsEvgeniia.pdf"
              target="_blank"
              icon={<ResumeIcon />}
              text="Resume"
              variant="text"
              size="lg"
            />
            </div>

        </div>
    );
}
export default Profile;