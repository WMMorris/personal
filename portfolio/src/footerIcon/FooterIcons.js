import React from 'react';
import './FooterIcon.css';
import { faGithub, faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterIcons = () =>{
    return(
        <>
            {/* <a className = "twitter" href = "https://twitter.com/"  target = "_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon = {faTwitter}/></i></a>
            <a className = "face" href = "https://facebook.com" target = "_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon = {faFacebook}/></i></a>             */}
            <a className = "git" href = "https://github.com/WMorris-WebDev20/"  target = "_blank" rel="noopener noreferrer"><i><FontAwesomeIcon icon = {faGithub}/></i></a>
        </>
    )
};

export default FooterIcons;