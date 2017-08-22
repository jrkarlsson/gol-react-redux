require('./styles.scss');

import GamePanel from '../game-panel/container';
import GameBoard from '../game-board/container';
import React, { Component } from 'react';


export default class Game extends Component {
  constructor(props) {
    super(props);
  }
   
  render() {
    return (
      <div>
        <GamePanel/>
        <GameBoard/>
      </div>
    );
  }
}
