import React, { Component } from "react";
import Swiper from "react-id-swiper";

const params = {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  spaceBetween: 30
};

class Quotes extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="quote-wrapper">
        <Swiper {...params}>
          <div className="quote-slide">
            <div className="left-side">Left</div>
            <div className="right-side">Right</div>
          </div>
          <div className="quote-slide">
            <div className="left-side">Left</div>
            <div className="right-side">Right</div>
          </div>
        </Swiper>
      </div>
    );
  }
}

export default Quotes;
