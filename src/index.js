import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import reducer, { initialState } from './Reducer';
import { StateProvider } from './StateProvider'; 
// basically here StateProvider is just a normal component which returns a structure similar to
// what andre taught in course, here we passed initialState and reducer to the StateProvider constructor
// component as props and along with that <App /> component also went as props.children
ReactDOM.render(
  <StateProvider initialState={initialState}
  reducer={reducer}>
    <App /> 
  </StateProvider>,
  document.getElementById('root')
);

