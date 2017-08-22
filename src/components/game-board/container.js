import { connect } from 'react-redux';
import GameBoardPresentation from './presentation';
import { toggleCell, gameTickAsync } from './actions';
import { gameResetAsync } from '../game-panel/game-controls/actions';

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.board,
    config: state.config,
    control: state.control,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggle: (y,x) => {
      dispatch(toggleCell(y,x));
    },
    tick: () => {
      dispatch(gameTickAsync());
    },
    reset: () => {
      dispatch(gameResetAsync());
    }
  };
};

const GameBoard = connect(mapStateToProps, mapDispatchToProps)(GameBoardPresentation);

export default GameBoard;
