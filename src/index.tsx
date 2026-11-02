import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from './App';
import { HabitsProvider } from './context/HabitsContext';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <HabitsProvider>
      <App />
    </HabitsProvider>
  </React.StrictMode>
);
