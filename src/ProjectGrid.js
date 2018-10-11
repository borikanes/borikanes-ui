import React, { Component } from 'react';
import './ProjectGrid.css';
import profile_picture from './images/profile.png';

export default class ProjectGrid extends Component {
    render() {
        return(
            <div className="Project-grid-base-div">
                <div className="Project-item-div" style={{'backgroundImage': `url(${profile_picture})`}}></div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
            </div>
        );
    }
}