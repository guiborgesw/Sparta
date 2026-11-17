import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css' // permanece até a Fase 3
import App from './App'
import { HabitsProvider } from './context/HabitsContext'
import { AppThemeProvider } from './styles/AppThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <HabitsProvider>
        <App />
      </HabitsProvider>
    </AppThemeProvider>
  </React.StrictMode>
)