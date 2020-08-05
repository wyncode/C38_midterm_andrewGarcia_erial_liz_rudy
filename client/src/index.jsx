import React from 'react';
import ReactDOM from 'react-dom';
import Credit from './components/Credit';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';

ReactDOM.render(
  [<App key="1" />, <Credit key="2" />],
  document.getElementById('root')
);
