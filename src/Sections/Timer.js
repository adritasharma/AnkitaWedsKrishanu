import React, { Component, Fragment } from "react";

export class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {
          seconds: parseInt(props.startTimeInSeconds, 10) || 0,
        };
      }
    

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

    
      tick() {
        this.setState((state) => ({
          seconds: state.seconds + 1,
        }));
      }
    
      getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
        return {
          total,
          days,
          hours,
          minutes,
          seconds,
        };
      }
  render() {

    const date = new Date(Date.parse(new Date(2021, 5, 28)));
    const t = this.getTimeRemaining(date);

    return (
      <Fragment>

<div className="row">

<div className="col-lg-3 col-6">
  <div className="count-box">
    <i className="icofont-simple-smile"></i>
    <span data-toggle="counter-up">{t.days}</span>
    <p>Days</p>
  </div>
</div>

<div className="col-lg-3 col-6">
  <div className="count-box">
    <i className="icofont-document-folder"></i>
    <span data-toggle="counter-up">{("0" + t.hours).slice(-2)}</span>
    <p>Hours</p>
  </div>
</div>

<div className="col-lg-3 col-6 mt-5 mt-lg-0">
  <div className="count-box">
    <i className="icofont-live-support"></i>
    <span data-toggle="counter-up">{("0" + t.minutes).slice(-2)}</span>
    <p>Minutes</p>
  </div>
</div>

<div className="col-lg-3 col-6 mt-5 mt-lg-0">
  <div className="count-box">
    <i className="icofont-users-alt-5"></i>
    <span data-toggle="counter-up">{("0" + t.seconds).slice(-2)}</span>
    <p>Seconds</p>
  </div>
</div>

</div>
      </Fragment>
    );
  }
}
