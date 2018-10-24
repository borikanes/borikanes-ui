import React, { Component } from 'react';
import './HomePage.css';
import profile_picture from './images/profile.png';
import ProjectGrid from './ProjectGrid';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="Home-top-div">
                    <div className="Home-avatar-div" style={{'backgroundImage': `url(${profile_picture})`}}></div>
                    <h1>Oluwabori (Bori) Oludemi</h1>
                    <p>Currently pledging my allegiance to Capital One. Full stack engineer, I love to code and very passionate about learning and teaching different types of technologies.</p>
                </div>
                <div className="Home-projects-div">
                    <h1>Recent Projects</h1>
                    <ProjectGrid />
                </div>
            </div>
        );
    }
}