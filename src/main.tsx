import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import RespCon from './components/RespCon.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RespCon>
    <App />
    </RespCon>
  </React.StrictMode>,
)
