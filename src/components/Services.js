/**
 * Services.js — Services Section (Parent / List)
 * ------------------------------------------------
 * Parent components usually:
 * 1. Import data
 * 2. Map over the data
 * 3. Render one child component per item
 *
 * Child = Service.js (one card)
 */

import { services } from '../data'
import Title from './Title'
import Service from './Service'

const Services = () => {
  return (
    <section className='section services' id='services'>
      <Title title='our' subTitle='services' />

      <div className='section-center services-center'>
        {services.map((service) => {
          // Spread all service fields (icon, title, text, id) as props
          return <Service {...service} key={service.id} />
        })}
      </div>
    </section>
  )
}

export default Services
