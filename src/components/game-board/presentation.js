require('./styles.scss');

import React, { Component } from 'react';
import * as helpers from '../../shared/helpers';

export default class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: null,
    };
  }

  componentWillMount() {
    this.props.reset();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.control.running !== this.props.control.running) {
      if(nextProps.control.running) {
        this.start();
      }
      else {
        this.stop();
      }
    }
  }

  start() {
    this.setState({interval: setInterval(this.props.tick, 1000 / this.props.config.speed)});
  }

  stop() {
    clearInterval(this.state.interval);
  }

  render() {
    return (
      <div className="game-board">
        {
          this.props.board.map((row, y) => {
            return <div className='row' key={y}>{
              row.map((cell, x)  => {
                return <div key={x} className={!cell ? 'cell dead' : 'cell alive'} onClick={() => this.props.toggle(y, x)} />;
              })}
            </div>;
          })
        }
      </div>
    );
  }
}
