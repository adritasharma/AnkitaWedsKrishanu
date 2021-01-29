import React, { Component, Fragment } from "react";

export class Navbar extends Component {
  render() {
    var coupleName = "Ankita Krishanu";
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-danger">
          <a className="navbar-brand" href="#">
            <h2>{coupleName} Forever</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Our Story
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Wedding Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}
