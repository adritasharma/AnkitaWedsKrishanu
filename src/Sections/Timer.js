import React, { Component, Fragment } from "react";

export class Timer extends Component {
  render() {
    return (
      <Fragment>

<div className="row">

<div className="col-lg-2 col-5">
  <div className="count-box">
    <i className="icofont-simple-smile"></i>
    <span data-toggle="counter-up">232</span>
    <p>Happy Clients</p>
  </div>
</div>

<div className="col-lg-3 col-6">
  <div className="count-box">
    <i className="icofont-document-folder"></i>
    <span data-toggle="counter-up">521</span>
    <p>Projects</p>
  </div>
</div>

<div className="col-lg-3 col-6 mt-5 mt-lg-0">
  <div className="count-box">
    <i className="icofont-live-support"></i>
    <span data-toggle="counter-up">1,463</span>
    <p>Hours Of Support</p>
  </div>
</div>

<div className="col-lg-3 col-6 mt-5 mt-lg-0">
  <div className="count-box">
    <i className="icofont-users-alt-5"></i>
    <span data-toggle="counter-up">15</span>
    <p>Hard Workers</p>
  </div>
</div>

</div>
      </Fragment>
    );
  }
}
