import React, { Component } from 'react';
import onClickOutside from "react-onclickoutside";
import 'font-awesome/css/font-awesome.css';

class DropDown extends Component {

    // if you click outside the drop down menu it will set isDown to false thereby
    // dismissing it 
    handleClickOutside = evt => {
      let dropdownRootDiv = document.getElementById('dropdown-root');
      if (dropdownRootDiv) {
        this.setState({isDown: false});
      } 
      return;
    };
  
    constructor(props) {
      super(props);
      this.toggleDropDownBool = this.toggleDropDownBool.bind(this);
      // this.dismissDropDown = this.dismissDropDown.bind(this);
      this.state = {
        isDown: false
      };
    }
  
    toggleDropDownBool() {
      this.setState(prevState =>  ({ 
        isDown: !prevState.isDown 
      } ))
      
    }
  
    render() {
      var dropdownRootDivStyle = {
        zIndex: '1000',
        position: 'relative'
    }
      if (!this.state.isDown) {
        return(
          <div className="Navbar-hamburger-div">
              <a onClick={this.toggleDropDownBool}><i className="fa fa-bars fa-2x nav-bar-a"></i></a>
          </div>
        );
      } else {
        return(
          <div id="dropdown-root" style={dropdownRootDivStyle}>
            <div className="Navbar-hamburger-div">
                <a onClick={this.toggleDropDownBool}><i className="fa fa-close fa-2x nav-bar-a"></i></a>
            </div>
            <div className="Navbar-dropdown-div">
              {/* <a href="/" className="Navbar-dropdown-each-button">HOME</a> */}
              <a href="https://s3.amazonaws.com/borikanes-resources/bori_resume.pdf" className="Navbar-dropdown-each-button">RESUME</a>
              <a href="http://borikanes.me/blog/" className="Navbar-dropdown-each-button">BLOG</a>
              <a href="https://github.com/borikanes" className="Navbar-dropdown-each-button">GITHUB</a>
            </div>
          </div>
        );
      }
    }
}

export default onClickOutside(DropDown);