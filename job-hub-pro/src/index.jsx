import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import HomeApp from "./home/home.index";
import globalStore from "./global.store";

import "./global.theme.css";

ReactDOM.render(
  <Provider store={globalStore}>
    <HomeApp />
  </Provider>,

  document.getElementById('root')
);
