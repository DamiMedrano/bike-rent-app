import React from 'react'
import { AppProvider } from './AppContext'
import ReactDOM from 'react-dom/client'
import App from 'routes'
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
