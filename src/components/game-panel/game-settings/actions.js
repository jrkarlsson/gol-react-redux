import { gameBoardAppend, gameBoardSubtract } from '../../game-board/actions';

export const INC_SPEED = 'INC_SPEED';
export const DEC_SPEED = 'DEC_SPEED';
export const INC_SIZE = 'INC_SIZE';
export const DEC_SIZE = 'DEC_SIZE';


export const incSpeed = () => ({
  type: INC_SPEED,
});

export const decSpeed = () => ({
  type: DEC_SPEED,
});

export const incSize = () => ({
  type: INC_SIZE,
});

export const decSize = () => ({
  type: DEC_SIZE,
});

export function incSizeAsync () {
  return (dispatch, getState) => {
    dispatch(incSize());
    
    const { config } = getState();

    dispatch(gameBoardAppend(config));
  };
}

export function decSizeAsync () {
  return (dispatch, getState) => {
    dispatch(decSize());

    const { config } = getState();

    dispatch(gameBoardSubtract(config));
  };
}
