require('./styles.scss');

import React from 'react';
import PropTypes from 'prop-types';

const GameControlsPresentation = ({start, stop, tick, reset}) => (
  <div className="game-controls">
    <button onClick={start}><i className="fa fa-fw fa-play"/><span>Start</span></button>
    <button onClick={stop}><i className="fa fa-fw fa-stop"/><span>Stop</span></button>
    <button onClick={tick}><i className="fa fa-fw fa-step-forward"/><span>Step</span></button>
    <button onClick={reset}><i className="fa fa-fw fa-undo"/><span>Reset</span></button>
  </div>
);

GameControlsPresentation.propTypes = {
  start: PropTypes.func.isRequired,
  stop: PropTypes.func.isRequired,
  tick: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default GameControlsPresentation;


