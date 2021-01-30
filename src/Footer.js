import React, { Component, Fragment } from "react";
import { Bridegroomsocialmedia } from "./Sections/Bridegroom/Bridegroomsocialmedia";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="bg-danger text-center text-lg-start">
          <div className="text-center p-3">
            © 2021 Copyright Adrita Sharma
            <a href="https://www.linkedin.com/in/adritasharma" target="_blank">
              <i className="fa fa-linkedin"> </i>
            </a>
          </div>
        </footer>
      </Fragment>
    );
  }
}
