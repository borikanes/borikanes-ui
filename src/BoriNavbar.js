import React, { Component } from 'react';
import './BoriNavbar.css';

export default class BoriNavbar extends Component {
    render() {
        return (
            <div className="Navbar-parent">
                <div className="Navbar-name-div">
                    <h1><a href="/">Oluwabori (Bori) Oludemi</a></h1>
                </div>
                <div className="Navbar-nav-items-div" >
                    <a href="/" className="Header-nav-buttons-first">HOME</a>
                    <a href="/" className="Header-nav-buttons-first">RESUME</a>
                    <a href="/" className="Header-nav-buttons-first">BLOG</a>
                    <a href="/" className="Header-nav-buttons-first">GITHUB</a>
                </div>
            </div>
        );
    }
}