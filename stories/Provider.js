import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureStore from '../src/configureStore';

const store = configureStore();
export default function Provider({ story }) {
  return <BrowserRouter><ReduxProvider store={store}>{story}</ReduxProvider></BrowserRouter>;
}
