import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Root from './pages/index';
import configureStore from './configureStore';

const store = configureStore(window.PRELOADED_STATE);

const div1 = (
  <Root Router={BrowserRouter} store={store}/>
);

hydrate(div1, document.getElementById('div1'));