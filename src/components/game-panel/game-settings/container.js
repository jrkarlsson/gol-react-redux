import { connect } from 'react-redux';
import GameSettingsPresentation from './presentation';
import {incSpeed, decSpeed, incSizeAsync, decSizeAsync} from './actions';

const mapStateToProps = state => {
  return {
    speed: state.config.speed,
    size: state.config.sizeX
  };
};

const mapDispatchToProps = dispatch => {
  return {
    incSpeed: () => {
      dispatch(incSpeed());
    },
    decSpeed: () => {
      dispatch(decSpeed());
    },
    incSize: () => {
      dispatch(incSizeAsync());
    },
    decSize: () => {
      dispatch(decSizeAsync());
    },
  };
};

const GameSettings = connect(mapStateToProps, mapDispatchToProps)(GameSettingsPresentation);

export default GameSettings;
