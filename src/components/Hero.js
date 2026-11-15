/**
 * Hero.js — Landing Banner (First Viewport)
 * -------------------------------------------
 * Simple carousel with automatic and arrow navigation.
 * The id="home" matches the navbar link href="#home"
 * so clicking "home" scrolls to this section.
 */
import { useEffect, useState } from 'react'
import { heroSlides } from '../data'
import '../scss/components/_hero.scss'
import Button from './Button.jsx'

const Hero = () => {
  const [index, setIndex] = useState(0)
  const slide = heroSlides[index]

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => (currentIndex + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const previousSlide = () => {
    setIndex((currentIndex) =>
      currentIndex === 0 ? heroSlides.length - 1 : currentIndex - 1
    )
  }

  const nextSlide = () => {
    setIndex((currentIndex) => (currentIndex + 1) % heroSlides.length)
  }

  return (
    <section className='hero' id='home'>
      <div className='hero-banner'>
        <h1>{slide.title}</h1>
        <p>{slide.text}</p>
        {/* Smooth in-page jump to the tours section */}
        {/* <a href='#tours' className='btn hero-btn '>
          explore tours
        </a> */}
        <Button link='#tours' classes='btn hero-btn'>
          explore tours
        </Button>
      </div>
      <button className='hero-arrow hero-arrow-left' onClick={previousSlide} aria-label='Previous slide'>
        <i className='fas fa-chevron-left'></i>
      </button>
      <button className='hero-arrow hero-arrow-right' onClick={nextSlide} aria-label='Next slide'>
        <i className='fas fa-chevron-right'></i>
      </button>
    </section>
  )
}

export default Hero
