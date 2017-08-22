require('./styles.scss');

import React from 'react';
import GameSettings from './game-settings/container';
import GameControls from './game-controls/container';

const GamePanelPresentation = () => (
  <div className="game-panel">
    <h1>Game of Life</h1>

    <div className="game-panel-components">
      <GameSettings/>
      <GameControls/>
    </div>
  </div>
);

export default GamePanelPresentation;
