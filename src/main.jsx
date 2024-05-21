import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { BarberiaApp } from './BarberiaApp'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <BarberiaApp />
    </React.StrictMode>,
  </BrowserRouter>
)
