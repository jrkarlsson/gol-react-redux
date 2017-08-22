import * as actions from './actions';

export default function gameControlsReducer(state = {running: false}, action) {
  switch (action.type) {
    case actions.GAME_START:
      return Object.assign({}, state, {
        running: true
      });
    case actions.GAME_STOP:
      return Object.assign({}, state, {
        running: false
      });
    default:
      return state;
  }
}
