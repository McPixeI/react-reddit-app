import React from 'react'
import ReactDOM from 'react-dom/client'
import '../src/styles/index.css'
import App from './app/App'
import { AppProviders } from './app/AppProviders'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AppProviders>
    <App />
  </AppProviders>
)
