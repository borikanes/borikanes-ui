import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    render() {
        return (
            <div className="Footer-parent-div">
                <p>© Oluwabori Oludemi</p>
                <div className="Footer-social-icons-div">
                    <FontAwesomeIcon icon={faTwitter} className="Footer-social-icon" size="2x" color="white" mask={['far', 'circle']}/>
                    <FontAwesomeIcon icon={faFacebookSquare} className="Footer-social-icon" size="2x" color="white"/>
                    <FontAwesomeIcon icon={faGithubSquare} className="Footer-social-icon" size="2x" color="white"/>
                </div>
            </div>
        );
    }
}