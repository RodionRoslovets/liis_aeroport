import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);
window.store = store

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

