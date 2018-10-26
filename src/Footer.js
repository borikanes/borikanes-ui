import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookSquare, faGithubSquare, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

let facebook = 'facebook';
let twitter = 'twitter';
let github = 'github';
let linkedin = 'linkedin';
let stackoverflow = 'stackoverflow';
let email = 'email';

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event, clicked) {
        switch(clicked) {
            case twitter:
                window.open('https://twitter.com/borikanes');
                break;
            case facebook:
                window.open('https://www.facebook.com/Bori.d.1st');
                break;
            case github:
                window.open('https://github.com/borikanes');
                break;
            case linkedin:
                window.open('https://www.linkedin.com/in/oluwabori-oludemi-23919963/');
                break;
            case stackoverflow:
                window.open('https://stackoverflow.com/users/2620826/bori-oludemi');
                break;
            case email:
                window.open('mailto:borikanes@yahoo.com', '_self');
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <div className="Footer-parent-div">
                <p>© Oluwabori Oludemi</p>
                <div className="Footer-social-icons-div">
                    <FontAwesomeIcon icon={faTwitter} className="Footer-social-icon" size="2x" color="white" onClick={(e) => {
                        this.handleClick(e, twitter)
                    }} cursor="pointer" />

                    <FontAwesomeIcon icon={faFacebookSquare} className="Footer-social-icon" size="2x" color="white" onClick={(e) => {
                        this.handleClick(e, facebook)
                    }} cursor="pointer"/>

                    <FontAwesomeIcon icon={faGithubSquare} className="Footer-social-icon" size="2x" color="white" onClick={(e) => {
                        this.handleClick(e, github)
                    }} cursor="pointer"/>

                    <FontAwesomeIcon icon={faLinkedin} className="Footer-social-icon" size="2x" color="white" onClick={(e) => {
                        this.handleClick(e, linkedin)
                    }} cursor="pointer"/>

                    <FontAwesomeIcon icon={faStackOverflow} className="Footer-social-icon" size="2x" color="white" onClick={(e) => {
                        this.handleClick(e, stackoverflow)
                    }} cursor="pointer"/>

                    <FontAwesomeIcon icon={faEnvelope} className="Footer-social-icon" size="2x" color="white" onClick={(e) => {
                        this.handleClick(e, email)
                    }} cursor="pointer"/>

                </div>
            </div>
        );
    }
}