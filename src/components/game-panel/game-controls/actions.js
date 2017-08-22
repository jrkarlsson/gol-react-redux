export const GAME_START = 'GAME_START';
export const GAME_STOP = 'GAME_STOP';
export const GAME_RESET = 'GAME_RESET';

export const gameStart = () => ({
  type: GAME_START,
});

export const gameStop = () => ({
  type: GAME_STOP,
});

export const gameReset = (config) => ({
  type: GAME_RESET,
  config
});

export function gameResetAsync () {
  return (dispatch, getState) => {
    const { config } = getState();

    dispatch(gameReset(config));
  };
}
