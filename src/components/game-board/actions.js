export const GAME_TOGGLE_CELL = 'GAME_TOGGLE_CELL';
export const GAME_RESET = 'GAME_RESET';
export const GAME_TICK = 'GAME_TICK';
export const GAME_BOARD_APPEND = 'GAME_BOARD_APPEND';
export const GAME_BOARD_SUBTRACT = 'GAME_BOARD_SUBTRACT';

export const toggleCell = (y,x) => ({
  type: GAME_TOGGLE_CELL,
  y,
  x
});

export const gameTick = (config) => ({
  type: GAME_TICK,
  config
});

export const gameBoardAppend = (config) => ({
  type: GAME_BOARD_APPEND,
  config
});

export const gameBoardSubtract = (config) => ({
  type: GAME_BOARD_SUBTRACT,
  config
});

export function gameTickAsync () {
  return (dispatch, getState) => {
    const { config } = getState();
    
    dispatch(gameTick(config));
  };
}
