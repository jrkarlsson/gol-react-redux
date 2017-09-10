require('./styles.scss');

import React from 'react';
import PropTypes from 'prop-types';
import SpinnerPresentation from './spinner/presentation';

const GameControlsPresentation = ({speed, incSpeed, decSpeed, size, incSize, decSize}) => (
  <div className="game-settings">
    <SpinnerPresentation name="Speed" value={speed} decrementHandler={decSpeed} incrementHandler={incSpeed} />
    <SpinnerPresentation name="Size" value={size} decrementHandler={decSize} incrementHandler={incSize} />
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


