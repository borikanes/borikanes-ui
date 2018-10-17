import React, { Component } from 'react';
import './ProjectGrid.css';
import profile_picture from './images/profile.png';

export default class ProjectGrid extends Component {
    constructor(props) {
        super(props);
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
        console.log(styles.overlay);
        console.log(this.state.isFocused);
        
        styles.overlay.opacity = this.state.isFocused === true ? 0.8 : 0
        return(
            <div className="Project-grid-base-div">
                <div className="Project-item-div" style={{'backgroundImage': `url(${profile_picture})`}}>
                    <div className="Project-item-overlay-div" onMouseOut={this.mouseOutHandler} onMouseOver={this.mouseOverHandler} style={styles.overlay}></div>
                </div>
                <div className="Project-item-div">
                {/* <div className="Project-item-overlay-div"></div> */}
                </div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
                <div className="Project-item-div"></div>
            </div>
        );
    }
}