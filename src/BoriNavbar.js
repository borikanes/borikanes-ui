import React, { Component } from 'react';
import './BoriNavbar.css';
import DropDown from './Dropdown.js';

export default class BoriNavbar extends Component {
    render() {
        return (
            <div>
                <div className="Navbar-parent">
                    <div className="Navbar-name-div">
                        <h1><a href="/">Oluwabori (Bori) Oludemi</a></h1>
                    </div>
                    <div className="Navbar-nav-items-div" >
                        <a href="/" className="Header-nav-buttons-first">HOME</a>
                        <a href="/resume" className="Header-nav-buttons-first">RESUME</a>
                        <a href="/blog" className="Header-nav-buttons-first">BLOG</a>
                        <a href="/" className="Header-nav-buttons-first">GITHUB</a>
                    </div>
                </div>
                <DropDown />
            </div>
        );
    }
}