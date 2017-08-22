import * as actions from './actions';

let initialState = {
  speed: 1,
  sizeX: 16,
  sizeY: 8,
  running: false
};

export default function gameControlsReducer(state = initialState, action) {
  switch (action.type) {
    case actions.INC_SPEED:
      return Object.assign({}, state, {
        speed: Math.min((state.speed + 1), 24)
      });
    case actions.DEC_SPEED:
      return Object.assign({}, state, {
        speed: Math.max((state.speed - 1), 1)
      });
    case actions.INC_SIZE:
      return Object.assign({}, state, {
        sizeX: Math.min((state.sizeX * 2), 128),
        sizeY: Math.min((state.sizeY * 2), 64)
      });
    case actions.DEC_SIZE:
      return Object.assign({}, state, {
        sizeX: Math.max((state.sizeX / 2), 16),
        sizeY: Math.max((state.sizeY / 2), 8)
      });
    default:
      return state;
  }
}
