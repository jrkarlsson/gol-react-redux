import { createStore, applyMiddleware } from 'redux';
import Game from './components/game/container';
import { Provider } from 'react-redux';
import React from 'react';
import { render } from 'react-dom';
import rootReducers from './shared/root-reducer';
import thunk from 'redux-thunk';

let store = createStore(rootReducers, applyMiddleware(thunk));
const containerEl = document.getElementById('main-container');

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  containerEl
);
