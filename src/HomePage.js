import React, { Component } from 'react';
import './HomePage.css';
import profile_picture from './images/profile.png';
import ProjectCarousel from './ProjectCarousel.js';

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
                    {/* <h1>Projects</h1> */}
                    {/* <div className="Home-carousel-div" > */}
                        < ProjectCarousel />
                    {/* </div> */}
                </div>
            </div>
        );
    }
}
// WORK ON CAROUSEL NEXT - https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na