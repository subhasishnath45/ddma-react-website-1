/**
 * Hero.js — Landing Banner (First Viewport)
 * -------------------------------------------
 * Static presentational section. No props and no state.
 * The id="home" matches the navbar link href="#home"
 * so clicking "home" scrolls to this section.
 */
import '../scss/components/_hero.scss'
import Button from './Button.jsx'

const Hero = () => {
  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>backroads app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        {/* Smooth in-page jump to the tours section */}
        {/* <a href='#tours' className='btn hero-btn '>
          explore tours
        </a> */}
        <Button link='#tours' classes='btn hero-btn'>
          explore tours
        </Button>
      </div>
    </section>
  )
}

export default Hero
