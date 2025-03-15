import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.js'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  React.createElement(React.StrictMode, null,
    React.createElement(HashRouter, null,
      React.createElement(App)
    )
  )
); 