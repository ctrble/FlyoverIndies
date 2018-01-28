import React from 'react';
import { render } from 'react-snapshot';
import Home from './Home';
import './index.css';

render(
  <Home/>,
  document.getElementById('root')
);
