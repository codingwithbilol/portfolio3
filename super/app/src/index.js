import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/home';
import Second_home from './pages/second_home/second_home';
import Third_home from './pages/third_home/third_home';
import Card from './pages/card/card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home/>
    <Second_home/>
    <Third_home/>
    <Card/>
  </React.StrictMode>
);