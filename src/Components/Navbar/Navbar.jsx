import { Component } from "react";
import React from "react";
import "./nstyle.css";
import logo from "../../Assets/logo.png";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() 
{
    return (
      <>
        <div>
          <nav>
          <img src={logo} style={{width: "250px" , height: "100px"}} alt="brand" />
            <div>
              <ul
                id="navbar"
                className={this.state.clicked ? "#navbar active" : "#Navbar"}
              >
                <li>
                  <a  href="index.html">
                    home
                  </a>
                </li>
                <li>
                  <a href="index.html">shop</a>
                </li>
                <li>
                  <a href="index.html">blog</a>
                </li>
                <li>
                  <a href="index.html">contact</a>
                </li>
                <li>
                  <a href="index.html">about </a>
                </li>
              </ul>
            </div>
            <div id="mobile" onClick={this.handleClick}>
              <i
                id="bar"
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              >
                {" "}
              </i>
            </div>
          </nav>
        </div>
      </>
    );
  }
}
export default Navbar;
