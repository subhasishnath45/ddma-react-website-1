/**
 * Navbar.js — Top Navigation Bar
 * --------------------------------
 * Learning goals:
 * 1. useState for UI open/close state (mobile menu)
 * 2. Conditional class names based on state
 * 3. Passing callback props to child components (onClose)
 * 4. Rendering lists with .map()
 *
 * Mobile menu flow:
 * - showLinks starts as false → menu is hidden (CSS height: 0)
 * - Hamburger click → setShowLinks(true) → adds "show-links" class
 * - Close button (in PageLinks) → setShowLinks(false)
 */

import { useState } from 'react'
import logo from '../images/logo.svg'
import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'
import '../scss/components/_navbar.scss'

const Navbar = () => {
  // Local component state: is the mobile nav open?
  // let showLinks = false;
  const [showLinks, setShowLinks] = useState(false)

  return (
    <nav className='navbar'>
      <div className='nav-center'>
        {/* Logo + hamburger (hamburger is CSS-hidden on large screens) */}
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          
          <button
            type='button'
            className='nav-toggle'
            id='nav-toggle'
            // Toggle between open and closed on each click
            onClick={() => setShowLinks(!showLinks)}
          >
            <i className='fas fa-bars'></i>
          </button>
        </div>

        {/*
          parentClass is dynamic:
          - closed: "nav-links"
          - open:   "nav-links show-links"
          onClose tells PageLinks how to close the menu from inside the overlay.
        */}
        <PageLinks
          parentClass={`${showLinks ? 'nav-links show-links' : 'nav-links'}`}
          itemClass='nav-link'
          onClose={() => setShowLinks(false)}
        />

        {/* Desktop social icons (often hidden/shown via CSS media queries) */}
        <ul className='nav-icons'>
          {socialLinks.map((link) => {
            // {...link} spreads id, href, icon as individual props
            return <SocialLink {...link} key={link.id} itemClass='nav-icon' />
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
