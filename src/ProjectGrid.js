import React, { Component } from 'react';
import './ProjectGrid.css';
import wedding_shot from './images/wedding-shot.jpg';
import nessie_shot from './images/nessie-shot.jpg';
import wedding_ios_shot from './images/wedding-ios-shot.jpg';
import posed from 'react-pose';

export default class ProjectGrid extends Component {
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
                <Box className="Project-item-div" style={{'backgroundImage': `url(${wedding_ios_shot})`}}>
                    <ProjectOverlay title="My Wedding iOS app" subtitle="Swift, iOS" idvalue="0" />
                </Box>
                <Box className="Project-item-div" style={{'backgroundImage': `url(${nessie_shot})`}}>
                    <ProjectOverlay title="Nessie" subtitle="NodeJS, Python" idvalue="1" />
                </Box>
                <Box className="Project-item-div" style={{'backgroundImage': `url(${wedding_shot})`}}>
                    <ProjectOverlay  title="My wedding website" subtitle="React, AWS" idvalue="2" />
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

    handleButtonClick = (event) => {
        console.log(event);

        if (event.target.value === "0") {
            window.open('https://github.com/borikanes/BoriAndMalloryWeddingIOS')
        } else if (event.target.value === "1") {
            // Will cloudfront like this?
            window.open('http://api.reimaginebanking.com/')
        } else if (event.target.value === "2") {
            window.open('https://d221w6irgt3n79.cloudfront.net/')
        }
    }

    render() {
        var styles = {
            overlay: {
                opacity: 0
            }
        };

        styles.overlay.opacity = this.state.isFocused === true ? 1 : 0
        return(
            <div className="Project-item-overlay-div" onMouseOut={this.mouseOutHandler} onMouseOver={this.mouseOverHandler} style={styles.overlay}>
                <div className="Project-grid-top-div">
                    <p className="Project-grid-top-title-paragraph">{this.props.title}</p>
                    <p className="Project-grid-top-sub-paragraph">{this.props.subtitle}</p>
                </div>
                <div className="Project-grid-bottom-div">
                    <button className="button button1" value={this.props.idvalue} onClick={this.handleButtonClick}>LEARN MORE</button>
                </div>
            </div>
        );
    }
}
