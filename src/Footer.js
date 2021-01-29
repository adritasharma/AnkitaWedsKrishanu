import React, { Component, Fragment } from "react";
import { Bridegroomsocialmedia } from "./Sections/Bridegroom/Bridegroomsocialmedia";

export class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="bg-danger text-center text-lg-start">
          <div className="text-center p-3">
            © 2021 Copyright Adrita Sharma:
            <Bridegroomsocialmedia socialMedia={{ fb: "https://www.facebook.com/adrita.sharma.5", insta: "", linkedIn: "" }} />
          </div>
        </footer>
      </Fragment>
    );
  }
}
