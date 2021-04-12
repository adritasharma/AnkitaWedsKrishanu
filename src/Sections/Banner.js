import React, { Component, Fragment } from "react";
//import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { windowWidth: window.innerWidth };
  }
  handleResize = (e) => {
    this.setState({ windowWidth: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.addEventListener("resize", this.handleResize);
  }

  responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  render() {
    const windowWidth = this.state.windowWidth;
    return (
      <section id="banner" className="banner" style={{ background: 'url(' +process.env.PUBLIC_URL + "/images/banner.jpg" +')' }} >
      </section>
    );
  }

}
