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
              <div>
                <div data-toggle="counter-up">{t.days}</div>
                <img
                  src={process.env.PUBLIC_URL + "/images/heart.gif"}
                  height="50"
                />
              </div>
              <p>Days</p>
            </div>
          </div>

          <div className="col-lg-3 col-6">
            <div className="count-box">
              <div data-toggle="counter-up">{("0" + t.hours).slice(-2)}</div>
              <img
                src={process.env.PUBLIC_URL + "/images/heart.gif"}
                height="50"
              />
              <p>Hours</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="icofont-live-support"></i>
              <div data-toggle="counter-up">{("0" + t.minutes).slice(-2)}</div>
              <img
                src={process.env.PUBLIC_URL + "/images/heart.gif"}
                height="50"
              />
              <p>Minutes</p>
            </div>
          </div>

          <div className="col-lg-3 col-6 mt-5 mt-lg-0">
            <div className="count-box">
              <div data-toggle="counter-up">{("0" + t.seconds).slice(-2)}</div>
              <img
                src={process.env.PUBLIC_URL + "/images/heart.gif"}
                height="50"
              />
              <p>Seconds</p>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
