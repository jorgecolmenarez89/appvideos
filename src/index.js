import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import 'react-owl-carousel2/lib/styles.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import persistState from 'redux-localstorage';

import App from './App';

const enhancer = compose(
  persistState('favorites')
)
const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

