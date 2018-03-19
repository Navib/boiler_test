import React, { Component } from "react";
import Swiper from "react-id-swiper";
import PropTypes from "prop-types";
import "../assets/face_1.png";
import "../assets/face_2.png";
import "../assets/jcsactor.png";
import "../assets/studio.png";
import "../assets/tmobile.png";
import "../assets/onsetdam.png";

const params = {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  spaceBetween: 30
};

const Quotes = props => {
  if (props.quotes === undefined) return <div>loading...</div>;

  return (
    <div className="quote-wrapper">
      <h1 className="section-header">
        <span>Reviews</span> <span className="hide-sm">& Headshots</span>
      </h1>
      <Swiper {...params}>
        {props.quotes.map(quote => (
          <div className="quote-slide" key={quote.id}>
            <div className="left-side">
              <p className="text-body">{quote.quote}</p>
              <p className="text-author">{quote.author}</p>
            </div>
            <div className="right-side">
              <img src={quote.bgImage} className="quote-img" />
            </div>
          </div>
        ))}
      </Swiper>
    </div>
  );
};

Quotes.propTypes = {
  quotes: PropTypes.array
};

export default Quotes;
