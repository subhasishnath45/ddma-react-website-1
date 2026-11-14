/**
 * PageLink.js — Single Navigation Link Item
 * -------------------------------------------
 * Small presentational component: receives data, returns JSX.
 *
 * Props:
 * - link      → { id, href, text } from data.js
 * - itemClass → CSS class for styling (nav vs footer)
 *
 * Note: The parent already provides the React "key" on <PageLink />,
 * so the key on <li> below is optional / redundant — kept simple for students.
 */

const PageLink = ({ link, itemClass }) => {
  return (
    <li>
      <a href={link.href} className={itemClass}>
        {link.text}
      </a>
    </li>
  )
}

export default PageLink
