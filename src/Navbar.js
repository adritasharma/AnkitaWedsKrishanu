import React, { Component, Fragment } from "react";

export class Navbar extends Component {
  scrollTo(id) {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView({ behavior: 'smooth' });
  }
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
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link"  onClick={() => this.scrollTo('banner')}>
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => this.scrollTo('bride-groom')}>
                  Bride & Groom
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" onClick={() => this.scrollTo('wedding-timeline')}>
                  Wedding Events
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => this.scrollTo('when-and-where')}>
                  Location
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}
