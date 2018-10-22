import React, { Component } from 'react';
import './ProjectGrid.css';
import profile_picture from './images/profile.png';
import wedding_shot from './images/wedding-shot.jpg';
import posed from 'react-pose';

export default class ProjectGrid extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const Box = posed.div({
            hoverable: true,
            pressable: true,
            init: {
              scale: 1
            },
            hover: {
              scale: 1.1
            }
        });

        return(
            <div className="Project-grid-base-div">
                <Box className="Project-item-div" style={{'backgroundImage': `url(${profile_picture})`}}>
                    <ProjectOverlay />
                </Box>
                <Box className="Project-item-div">
                    <ProjectOverlay />
                </Box>
                <Box className="Project-item-div">
                    <ProjectOverlay />
                </Box>
                <Box className="Project-item-div" style={{'backgroundImage': `url(${wedding_shot})`}}>
                    <ProjectOverlay  title="My wedding website" subtitle="React on AWS" />
                </Box>
                <Box className="Project-item-div" style={{'backgroundImage': `url(${wedding_shot})`}}>
                    <ProjectOverlay />
                </Box>
                <Box className="Project-item-div">
                    <ProjectOverlay />
                </Box>
            </div>
        );
    }
}

class ProjectOverlay extends Component {
    constructor(props) {
        super(props)
        this.mouseOverHandler = this.mouseOverHandler.bind(this);
        this.mouseOutHandler = this.mouseOutHandler.bind(this);
        this.state = {
            isFocused: false
        }
    }

    mouseOverHandler() {
        this.setState({
            isFocused: true
        })
    }

    mouseOutHandler() {
        this.setState({
            isFocused: false
        })
    }

    render() {
        var styles = {
            overlay: {
                opacity: 0
            }
        };
        
        styles.overlay.opacity = this.state.isFocused === true ? 0.8 : 0
        return(
            <div className="Project-item-overlay-div" onMouseOut={this.mouseOutHandler} onMouseOver={this.mouseOverHandler} style={styles.overlay}>
                <div className="Project-grid-top-div">
                    <p className="Project-grid-top-title-paragraph">{this.props.title}</p>
                    <p className="Project-grid-top-sub-paragraph">{this.props.subtitle}</p>
                </div>
                <div className="Project-grid-bottom-div">
                    <button className="button button1">LEARN MORE</button>
                </div>
            </div>
        );
    }
}