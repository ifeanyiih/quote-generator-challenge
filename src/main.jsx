import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Random from './components/Random'
import Quotes from './components/Quotes'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<Random/>} />
          <Route path="quotes" element={<Quotes/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  // {/* </React.StrictMode> */}
)
