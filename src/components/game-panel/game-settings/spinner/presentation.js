require('./styles.scss');

import React from 'react';
import PropTypes from 'prop-types';

const SpinnerPresentation = ({name, value, decrementHandler, incrementHandler}) => (
  <div className="spinner-component">
    {name && 
      <h4>{name}</h4>
    }
    <div className="spinner">
      <button onClick={decrementHandler}><i className="fa fa-fw fa-minus"/></button>
      <div>{value}</div>
      <button onClick={incrementHandler}><i className="fa fa-fw fa-plus"/></button>
    </div>
  </div>
);

SpinnerPresentation.propTypes = {
  name: PropTypes.string,
  value: PropTypes.number.isRequired,
  decrementHandler: PropTypes.func.isRequired,
  incrementHandler: PropTypes.func.isRequired,
};

export default SpinnerPresentation;


