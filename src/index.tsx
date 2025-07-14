import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import SplashCursor from './SplashCursor';

ReactDOM.render(
  <React.StrictMode>
    <>
      <SplashCursor />
      <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
)