import React, { Component, Fragment } from "react";
import { Bridegroomsocialmedia } from "./Bridegroomsocialmedia";

export class Bridegroomdescription extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-11 mx-auto">
            <h3>{this.props.name}</h3>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className="col-lg-4 col-md-8 mx-auto">
            <Bridegroomsocialmedia socialMedia={this.props.socialMedia} />
          </div>
        </div>
      </Fragment>
    );
  }
}