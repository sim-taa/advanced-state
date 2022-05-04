import React from 'react'
import ReactDOM from "react-dom";
import App from './App';
import { connect, Provider } from 'react-redux';
import { legacy_createStore, applyMiddleware, configureStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { connect } from 'react-redux';

import reducer from '../state/reducer';

const store = legacy_createStore(reducer, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>
)

//export const connect(state => state)(Wheel);

export default function Wheel(props) {
  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>B</div>
        <div className="cog" style={{ "--i": 1 }}></div>
        <div className="cog" style={{ "--i": 2 }}></div>
        <div className="cog" style={{ "--i": 3 }}></div>
        <div className="cog" style={{ "--i": 4 }}></div>
        <div className="cog" style={{ "--i": 5 }}></div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button onClick = {counterClockw} id = "counterClockwiseBtn" >Counter clockwise</button>
        <button onClick = {clockWise} id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}