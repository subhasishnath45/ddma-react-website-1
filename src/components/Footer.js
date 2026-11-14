/**
 * Footer.js — Site Footer
 * -------------------------
 * Reuses the same building blocks as Navbar:
 * - <PageLinks /> for page navigation (different CSS classes)
 * - <SocialLink /> for social icons
 *
 * Dynamic year:
 *   {new Date().getFullYear()}
 * updates the copyright year automatically every year.
 *
 * Notice: Footer does NOT pass onClose to PageLinks,
 * so the mobile close button does not appear here.
 */

import { socialLinks } from '../data'
import PageLinks from './PageLinks'
import SocialLink from './SocialLink'

const getYear = function() {
  return new Date().getFullYear();
}

const Footer = () => {
  return (
    <footer className='section footer'>
      {/* Reuse PageLinks with footer-specific CSS classes */}
      <PageLinks parentClass='footer-links' itemClass='footer-link' />
      <ul className='footer-icons'>
        {socialLinks.map((link) => {
          return <SocialLink key={link.id} {...link} itemClass='footer-icon' />
        })}
      </ul>

      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{getYear()}</span>. all rights reserved
      </p>
    </footer>
  )
}

export default Footer
