import CTA from './CTA'
import profileImg from '../images/logo-new.jpeg'
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


        </div>
    );
}
export default Profile;