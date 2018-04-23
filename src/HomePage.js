import React, { Component } from 'react';
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="Home-top-div">
                    <div className="Home-avatar-div">
                    </div>
                    <h1 style={{'marginBottom': 0}} >Oluwabori Oludemi</h1>
                    <h2 style={{'marginTop': 0}} >Full stack engineer. Blah blah blah blah blah blah blah blah</h2>
                </div>
            </div>
        );
    }
}