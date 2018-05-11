import React, { Component } from 'react';
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="Home-top-div">
                    <div className="Home-avatar-div"></div>
                    <h1>Oluwabori (Bori) Oludemi</h1>
                    <p>Currently pledging my allegiance to Capital One. Full stack engineer, I love to code and very passionate about learning and teaching different types of technologies.</p>
                </div>
                <div className="Home-projects-div">
                    <h1>Projects</h1>
                    <div className="Home-carousel-div" >

                    </div>
                </div>
            </div>
        );
    }
}