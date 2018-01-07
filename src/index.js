import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import allReducers from './reducers';
import { Provider } from 'react-redux';

// for Chrome Extension with redux DevTool
const enhancers = composeWithDevTools();

const store = createStore(allReducers, enhancers);
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
