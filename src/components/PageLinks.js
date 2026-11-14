/**
 * PageLinks.js — Reusable List of Page Links
 * --------------------------------------------
 * Used in BOTH Navbar and Footer with different CSS classes.
 *
 * Props:
 * - parentClass → class name for the <ul> (e.g. "nav-links" or "footer-links")
 * - itemClass   → class name for each <a> (e.g. "nav-link" or "footer-link")
 * - onClose     → optional function; when provided, a close (×) button appears
 *
 * Why optional onClose?
 * - Navbar needs a close button for the mobile overlay
 * - Footer does NOT pass onClose, so no close button is rendered there
 *
 * Key React idea: same component, different behavior via props.
 */

import { pageLinks } from '../data'
import PageLink from './PageLink'

const PageLinks = ({ parentClass, itemClass, onClose }) => {
  return (
    <ul className={parentClass} id='nav-links'>
      {/* Only render the close button when a close handler was provided */}
      {onClose && (
        <li className='nav-close'>
          <button
            type='button'
            className='nav-toggle'
            id='nav-close'
            onClick={onClose}
            aria-label='Close menu'
          >
            <i className='fas fa-times'></i>
          </button>
        </li>
      )}

      {/* Convert data array → list of PageLink components */}
      {pageLinks.map((link) => {
        // key helps React track each list item efficiently
        return <PageLink key={link.id} link={link} itemClass={itemClass} />
      })}
    </ul>
  )
}

export default PageLinks
