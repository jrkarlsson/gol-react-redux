require('./styles.scss');

import React from 'react';
import PropTypes from 'prop-types';

const GameControlsPresentation = ({speed, incSpeed, decSpeed, size, incSize, decSize}) => (
  <div className="game-settings">
    <div className="minus-plus">
      <h4>Speed</h4>
      <div className="minus-plus-container">
        <button onClick={decSpeed}><i className="fa fa-minus"/></button>
        <div>{speed}</div>
        <button onClick={incSpeed}><i className="fa fa-plus"/></button>
      </div>
    </div>

    <div className="minus-plus">
      <h4>Size</h4>
      <div className="minus-plus-container">
        <button onClick={decSize}><i className="fa fa-minus"/></button>
        <div>{size}</div>
        <button onClick={incSize}><i className="fa fa-plus"/></button>
      </div>
    </div>
  </div>
);

GameControlsPresentation.propTypes = {
  speed: PropTypes.number.isRequired,
  incSpeed: PropTypes.func.isRequired,
  decSpeed: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  incSize: PropTypes.func.isRequired,
  decSize: PropTypes.func.isRequired
};

export default GameControlsPresentation;


