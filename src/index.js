import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux'
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from './app';

import './locale/i18n';

import './index.css';

const store = configureStore()
const history = createBrowserHistory();

const renderApp = () =>
  render(
    <Provider store={store}> <Router history={history}>
      <App /></Router>
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./app', renderApp)
}

renderApp()

