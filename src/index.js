import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App 
    name = 'Emran Hossain'
    country = 'Bangladesh'
    city = 'Brahmanbaria'
    number = '01917850000'
    email = 'sodium197@gmail.com'
    facebook = 'Emran Hossain'
    github = 'emrah197'
    skills = {['HTML', 'CSS', 'JavaScript', 'React']}
    interests = {['Reading', 'coding','Treveling']}
    />
    <App 
    name = 'Habibul Rahman'
    country = 'Bangladesh'
    city = 'Dhaka'
    number = '01968550000'
    email = 'sodium197@gmail.com'
    facebook = 'Habibul Rahman'
    github = 'habibul197'
    skills = {['HTML', 'CSS', 'JavaScript', 'React']}
    interests = {['Reading', 'coding','Treveling']}
    />
     <App 
    name = 'Rahul'
    country = 'Bangladesh'
    city = 'Brahmanbaria'
    number = '019175850000'
    email = 'sodium197@gmail.com'
    facebook = 'Rahul'
    github = 'rahul197'
    skills = {['Photoshop', 'Graphic Design', ]}
    interests = {['Reading', 'Treveling']}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
