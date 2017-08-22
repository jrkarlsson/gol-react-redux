import { connect } from 'react-redux';
import GameSettingsPresentation from './presentation';
import {incSpeed, decSpeed, incSize, decSize} from './actions';

const mapStateToProps = (state, ownProps) => {
  return {
    speed: state.config.speed,
    size: state.config.sizeX
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    incSpeed: () => {
      dispatch(incSpeed());
    },
    decSpeed: () => {
      dispatch(decSpeed());
    },
    incSize: () => {
      dispatch(incSize());
    },
    decSize: () => {
      dispatch(decSize());
    },
  };
};

const GameSettings = connect(mapStateToProps, mapDispatchToProps)(GameSettingsPresentation);

export default GameSettings;
