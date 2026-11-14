/**
 * Title.js — Reusable Section Heading
 * -------------------------------------
 * Many sections share the same heading layout:
 *   "our services", "featured tours", "about us"
 *
 * Instead of copying the HTML 3 times, we pass two strings as props.
 *
 * Example usage:
 *   <Title title="featured" subTitle="tours" />
 * renders: featured tours  (with "tours" styled via <span>)
 */

const Title = ({ title, subTitle }) => {
  return (
    <div className='section-title'>
      <h2>
        {title} <span>{subTitle}</span>
      </h2>
    </div>
  )
}

export default Title
