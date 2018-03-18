import React, { Component } from "react";
import Swiper from "react-id-swiper";
import PropTypes from "prop-types";

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
