import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './reset.css'

// в HTML документ через константу root вставляем React приложение 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
