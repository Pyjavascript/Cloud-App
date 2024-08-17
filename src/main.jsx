import React from 'react'
import ReactDOM from 'react-dom/client'
const  App = () => import('./App.jsx')
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
