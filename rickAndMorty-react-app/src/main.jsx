import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PersonagemProvider } from './Context/personagemContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersonagemProvider>
      <App />
    </PersonagemProvider>
  </React.StrictMode>,
)
