import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter
} from "react-router-dom";
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Router from "./webRouter/index";
import { Provider } from 'react-redux' // 配合使用redux
import { getClientStore } from '../src/store/index' // 导入store

ReactDOM.hydrate(
  <React.StrictMode>
      <Provider store={getClientStore()}>
          <BrowserRouter>
              <Router/>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
