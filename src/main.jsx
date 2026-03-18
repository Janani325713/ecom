import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import {Store} from "./store"
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={Store}>
 <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Provider>
)
