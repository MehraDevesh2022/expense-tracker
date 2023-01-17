import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalContextProvider } from './context/GlobalState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
