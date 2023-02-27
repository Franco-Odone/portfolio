import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import proyectsReducer, {
  proyectsFetch,
} from './slicesDirectory/proyectsSlice.js';

import App from './App';
import './index.css';

const store = configureStore({
  reducer: {
    proyects: proyectsReducer,
  },
});
store.dispatch(proyectsFetch());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
