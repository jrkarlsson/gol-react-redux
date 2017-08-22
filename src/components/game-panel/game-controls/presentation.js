require('./styles.scss');

import React from 'react';
import PropTypes from 'prop-types';

const GameControlsPresentation = ({start, stop, tick, reset}) => (
  <div className="game-controls">
    <button onClick={start}><i className="fa fa-play"/>Start</button>
    <button onClick={stop}><i className="fa fa-stop"/>Stop</button>
    <button onClick={tick}><i className="fa fa-step-forward"/>Step</button>
    <button onClick={reset}><i className="fa fa-undo"/>Reset</button>
  </div>
);

GameControlsPresentation.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  tick: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default GameControlsPresentation;


