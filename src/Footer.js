import React, { Component } from 'react';
import './Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        window.open('https://twitter.com/borikanes')
    }

    render() {
        return (
            <div className="Footer-parent-div">
                <p>© Oluwabori Oludemi</p>
                <div className="Footer-social-icons-div">
                    <FontAwesomeIcon icon={faTwitter} className="Footer-social-icon" size="2x" color="white" onClick={this.handleClick} cursor="pointer" />
                    <FontAwesomeIcon icon={faFacebookSquare} className="Footer-social-icon" size="2x" color="white"/>
                    <FontAwesomeIcon icon={faGithubSquare} className="Footer-social-icon" size="2x" color="white" />
                </div>
            </div>
        );
    }
}