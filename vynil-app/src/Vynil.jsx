import React from 'react';
import PropTypes from 'prop-types';
import './App.css'

const Vynil = (props) => {
    const { title, artist, price, coverImage } = props;
  return (
	<div className="vynil-card">
	  <img src={coverImage} alt={`${title} cover`} />
	  <h2>{title}</h2>
	  <p>{artist}</p>
	  <p>${price.toFixed(2)}</p>
	</div>
  );
};

Vynil.propTypes = {
    title: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    coverImage: PropTypes.string.isRequired,
};

export default Vynil;
