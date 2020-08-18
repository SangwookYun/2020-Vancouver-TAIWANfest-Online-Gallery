import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from 'react-snapshot';
import {BrowserRouter} from "react-router-dom";
// import className form ./js_file_name;
ReactDOM.render(
  <React.StrictMode>
    {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> */}
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
