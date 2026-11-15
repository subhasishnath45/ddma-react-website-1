/**
 * SocialLink.js — Single Social Media Icon Link
 * -----------------------------------------------
 * Props:
 * - href      → destination URL
 * - icon      → Font Awesome class string (e.g. "fab fa-twitter")
 * - itemClass → CSS class (nav-icon or footer-icon)
 *
 * Accessibility / security notes:
 * - target="_blank" opens a new browser tab
 * - rel="noreferrer" is recommended with target="_blank" for security
 */

const SocialLink = ({ itemClass, href, icon, decernible }) => {
  return (
    <li>
      <a href={href} target='_blank' rel='noreferrer' className={itemClass}>
        <span className="sr-only">{decernible}</span>
        <i className={icon}></i>
      </a>
    </li>
  )
}

export default SocialLink
