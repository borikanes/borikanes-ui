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
                        {/* <a href="/" className="Header-nav-buttons-first">HOME</a> */}
                        <a href="https://s3.amazonaws.com/borikanes-resources/bori_resume.pdf" className="Header-nav-buttons-first">RESUME</a>
                        <a href="http://blog.borikanes.me" className="Header-nav-buttons-first">BLOG</a>
                        <a href="https://github.com/borikanes" className="Header-nav-buttons-first">GITHUB</a>
                    </div>
                </div>
                <DropDown />
            </div>
        );
    }
}