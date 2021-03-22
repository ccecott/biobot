import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// should I move this to a separate component?
import { DatePicker } from 'antd';
import 'antd/dist/antd.css'; 


ReactDOM.render(
  <React.StrictMode>
    <App />
    <DatePicker />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
