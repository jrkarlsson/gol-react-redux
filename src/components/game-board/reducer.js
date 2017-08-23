import * as actions from './actions';
import * as helpers from '../../shared/helpers';

let countAliveNeighbours = (y, x, state, size)  => {
  const limit = size - 1;
  let aliveCount = 0;

  let yStart = Math.max(0, (y - 1));
  let yStop = Math.min(limit / 2, (y + 1));
  
  for(;yStart <= yStop; yStart++) {
    let xStart = Math.max(0, (x - 1));
    let xStop = Math.min(limit, (x + 1));

    for(;xStart <= xStop; xStart++) {
      if((y !== yStart || x !== xStart) && state[yStart][xStart]) {
        aliveCount++;
      }
    }
  }

  return aliveCount;
};

let appendRow = (row, newSize) => {
  let len;
  
  if(Array.isArray(row)) {
    len = newSize - row.length;
  }
  else {
    len = newSize;
    row = [];
  }
  
  for(let i = 0; i < len; i++) {
    row.push(false);
  }
  
  return row;
};

let appendBoard = (state, newSizeY, newSizeX) => {
  let updatedBoard = helpers.clone2DArray(state);

  for(let i = 0; i < newSizeY; i++) {
    updatedBoard[i] = appendRow(updatedBoard[i], newSizeX);
  }

  return updatedBoard;
};

let subtractRow = (row, newSize) => {
  return row.slice(0, newSize);
};

let subtractBoard = (state, newSizeY, newSizeX) => {
  let updatedBoard = helpers.clone2DArray(state).slice(0, newSizeY);
  
  for(let i = 0; i < newSizeY; i++) {
    updatedBoard[i] = subtractRow(updatedBoard[i], newSizeX);
  }

  return updatedBoard;
};

export default function gameBoardReducer(state = [], action) {
  switch (action.type) {

    case actions.GAME_RESET: {
      let board = [];

      for(let y = 0; y < action.config.sizeY; y++) {
        board[y] = [];

        for(let x = 0; x < action.config.sizeX; x++) {
          board[y].push(false);
        }
      }

      return Object.assign([], state, board);
    }

    case actions.GAME_TOGGLE_CELL: {
      let updatedBoard = helpers.clone2DArray(state);
      updatedBoard[action.y][action.x] = !updatedBoard[action.y][action.x];

      return Object.assign([], state, updatedBoard);
    }

    case actions.GAME_TICK: {
      let nextState = helpers.clone2DArray(state);

      for(let y = 0; y < action.config.sizeY; y++) {
        for(let x = 0; x < action.config.sizeX; x++) {
          let cell = state[y][x];
          let aliveNeighbours = countAliveNeighbours(y, x, state, action.config.sizeX);

          // Game rules, stay alive or die

          if(!cell && aliveNeighbours === 3) {
            nextState[y][x] = true;
            continue;
          }

          if(cell && aliveNeighbours < 2) {
            nextState[y][x] = false;
            continue;
          }

          if(cell && aliveNeighbours > 3) {
            nextState[y][x] = false;
            continue;
          }

          if(cell && (aliveNeighbours > 1 || aliveNeighbours < 4)) {
            nextState[y][x] = true;
            continue;
          }

        }
      }

      return Object.assign([], state, nextState);
    }

    case actions.GAME_BOARD_APPEND: {
      return appendBoard(state, action.config.sizeY, action.config.sizeX);
    }
    
    case actions.GAME_BOARD_SUBTRACT: {
      return subtractBoard(state, action.config.sizeY, action.config.sizeX);
    }

    default:
      return state;
  }
}
