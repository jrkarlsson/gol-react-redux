import { combineReducers } from 'redux';

import gameControlsReducer from '../components/game-panel/game-controls/reducer';
import gameSettingsReducer from '../components/game-panel/game-settings/reducer';
import gameBoardReducer from '../components/game-board/reducer';

const rootReducer = combineReducers({
  board: gameBoardReducer,
  config: gameSettingsReducer,
  control: gameControlsReducer
});

export default rootReducer;
