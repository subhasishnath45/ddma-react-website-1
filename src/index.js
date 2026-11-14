/**
 * index.js — Application Entry Point
 * ------------------------------------
 * This is the FIRST file that runs when the React app starts.
 * Think of it as the "main()" of a traditional program.
 *
 * What happens here?
 * 1. We find the empty <div id="root"> in public/index.html
 * 2. We create a React "root" attached to that div
 * 3. We render our top-level <App /> component into it
 *
 * Students: Almost every Create React App project starts this way.
 */

import React from 'react'
import ReactDOM from 'react-dom/client'

// Global stylesheet — imported once so every component can use these classes
import './index.scss'

// The top-level component that builds the whole page layout
import App from './App'

// Connect React to the real DOM node with id="root"
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render the app.
// StrictMode is a development helper that warns about unsafe patterns.
// It does NOT change how the app looks to users.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
