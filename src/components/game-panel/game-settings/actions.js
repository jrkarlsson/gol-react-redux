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
