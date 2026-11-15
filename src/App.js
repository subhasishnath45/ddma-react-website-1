/**
 * App.js — Root Layout Component
 * --------------------------------
 * App is the "page blueprint". It does not hold much logic itself.
 * Instead, it assembles smaller section components in the correct order.
 *
 * Page structure (top → bottom):
 *   Navbar  → sticky navigation / mobile menu
 *   Hero    → first viewport banner (#home)
 *   About   → company intro (#about)
 *   Services→ list of service cards (#services)
 *   Tours   → featured tour cards (#tours)
 *   Footer  → links, social icons, copyright
 *
 * React idea to remember:
 * - Components are reusable building blocks
 * - Parent components compose children
 * - Fragment (<> or React.Fragment) groups siblings without adding an extra DOM node
 */

import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {
  return (
    // Fragment avoids wrapping everything in an unnecessary <div>
    <React.Fragment>
      <Navbar />
      <main>
      <Hero />
      <About />
      <Services />
      <Tours />
      </main>
      <Footer />
    </React.Fragment>
  )
}

// default export → other files can: import App from './App'
export default App
