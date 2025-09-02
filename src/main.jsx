import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './components/common/Stairs.jsx'
import  Navcontext  from './components/context/Navcontext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Stairs>
        <Navcontext>
          <App />
        </Navcontext>
      </Stairs>
    </BrowserRouter>
  </React.StrictMode>,
)