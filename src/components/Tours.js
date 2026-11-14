/**
 * Tours.js — Featured Tours Section (Parent / List)
 * ---------------------------------------------------
 * Same parent/child pattern as Services:
 *   Tours (list) → Tour (single card)
 *
 * Students: compare this file with Services.js —
 * the structure is intentionally almost identical.
 */

import { tours } from '../data'
import Title from './Title'
import Tour from './Tour'
import Button from './Button.jsx'

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <Title title='featured' subTitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          return <Tour {...tour} key={tour.id} />
        })}
      </div>
        <div className='section-center' style={{ textAlign: 'center' }}>
          <Button link='#featured' classes='btn btn--tours' identifier='featured-btn'>read more about Featured Tours</Button>
        </div>
    </section>
  )
}

export default Tours
