import { connect } from 'react-redux';
import GameControlsPresentation from './presentation';
import { gameStart, gameStop, gameResetAsync } from './actions';
import { gameTickAsync } from '../../game-board/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    speed: state.config.speed,
    size: state.config.sizeX
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    start: () => {
      dispatch(gameStart());
    },
    stop: () => {
      dispatch(gameStop());
    },
    tick: () => {
      dispatch(gameTickAsync());
    },
    reset: () => {
      dispatch(gameResetAsync());
    }
  };
};

const GameControls = connect(mapStateToProps, mapDispatchToProps)(GameControlsPresentation);

export default GameControls;
