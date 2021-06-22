import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import Exam from './exam';
import Profileform from './Profile_form';
import Profileform1 from './Profile_form1';
import ProfilePage from './Profile_Page';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <>
    <Home />
  </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
