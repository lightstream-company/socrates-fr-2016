import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.container';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import * as reducers from './reducers';
import {fetchTweets, fetchReTweets} from './api';
import {initTweets, initReTweets} from './actions';
import './index.css';

const combinedReducers = combineReducers(reducers);

const store = createStore(combinedReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

fetchTweets().then(json => store.dispatch(initTweets(json)));
fetchReTweets().then(json => store.dispatch(initReTweets(json)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

