/**
 * Gallery.js — Photo Grid + Lightbox (beginner version)
 * -------------------------------------------------------
 * What this component teaches:
 * 1. useState to remember "which photo is open?"
 * 2. .map() to turn an array of photos into a grid of <img> tags
 * 3. Passing data and functions down to a child (Lightbox)
 *
 * How the lightbox works (very small idea):
 *   currentIndex = null  → lightbox is CLOSED
 *   currentIndex = 0,1,2... → lightbox is OPEN on that photo
 *
 * IMPORTANT for students:
 *   Do NOT write:  if (currentIndex) { ... }
 *   because 0 is a valid index, but 0 is also "falsy" in JavaScript.
 *   Always compare with null:  currentIndex !== null
 */

import { useState } from 'react'
import { galleryPhotos } from '../data'
import Title from './Title'
import Lightbox from './Lightbox'
import '../scss/components/_gallery.scss'

const Gallery = () => {
  // null means "no photo selected" (lightbox closed)
  const [currentIndex, setCurrentIndex] = useState(null)

  // Clicking a thumbnail stores THAT photo's position in the array
  const openLightbox = (index) => {
    setCurrentIndex(index)
  }

  // Setting the value back to null hides the lightbox
  const closeLightbox = () => {
    setCurrentIndex(null)
  }

  /**
   * Go to the previous photo.
   * The + photos.length trick keeps the number from going negative:
   *   index 0 → previous → last photo
   * % (modulo) wraps around the end of the list.
   */
  const showPrevious = () => {
    setCurrentIndex((index) => {
      return (index - 1 + galleryPhotos.length) % galleryPhotos.length
    })
  }

  /**
   * Go to the next photo.
   * Last photo → next → first photo (index 0)
   */
  const showNext = () => {
    setCurrentIndex((index) => {
      return (index + 1) % galleryPhotos.length
    })
  }

  return (
    <section className='section gallery' id='gallery'>
      <Title title='photo' subTitle='gallery' />

      {/*
        CSS Grid draws the 3-column layout.
        .map() creates one <button> per photo.
        key={photo.id} helps React track each item in the list.
      */}
      <div className='section-center gallery-grid'>
        {galleryPhotos.map((photo, index) => {
          return (
            <button
              type='button'
              className='gallery-item'
              key={photo.id}
              onClick={() => openLightbox(index)}
            >
              <img src={photo.src} alt={photo.alt} className='gallery-image' />
            </button>
          )
        })}
      </div>

      {/*
        Conditional render:
        Only create the Lightbox when a photo is selected.
        We pass the WHOLE photos array so Next/Prev can pick neighbors.
      */}
      {currentIndex !== null && (
        <Lightbox
          photos={galleryPhotos}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onPrev={showPrevious}
          onNext={showNext}
        />
      )}
    </section>
  )
}

export default Gallery
