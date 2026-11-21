/**
 * Lightbox.js — Full-screen photo overlay
 * -----------------------------------------
 * This child does NOT own the "which photo is open?" state.
 * The parent (Gallery) owns that state and passes it down as props.
 *
 * Props (data coming from the parent):
 *   photos       → the full array of gallery images
 *   currentIndex → which item in that array to show right now
 *   onClose      → function to run when the student clicks X
 *   onPrev       → function to run when the student clicks ←
 *   onNext       → function to run when the student clicks →
 *
 * Teaching idea: "lift state up"
 *   The child calls onClose / onPrev / onNext.
 *   Those functions live in Gallery and call setCurrentIndex.
 *   Then Gallery re-renders and sends a NEW currentIndex back down.
 *
 * createPortal:
 *   The navbar is position:fixed with z-index: 2.
 *   If we keep the lightbox inside <main>, it can hide BEHIND the navbar.
 *   createPortal paints this HTML as a child of document.body instead,
 *   so the overlay can cover the whole screen including the navbar.
 */

import { createPortal } from 'react-dom'

const Lightbox = ({ photos, currentIndex, onClose, onPrev, onNext }) => {
  // Pick the one photo we should display
  const photo = photos[currentIndex]

  const overlay = (
    // The dark layer covers the whole screen (position: fixed in CSS)
    <div className='lightbox'>
      {/* Close button — top right, matches the screenshot */}
      <button
        type='button'
        className='lightbox-close'
        onClick={onClose}
        aria-label='Close photo'
      >
        <i className='fas fa-times'></i>
      </button>

      {/* The large photo in the middle */}
      <img src={photo.src} alt={photo.alt} className='lightbox-image' />

      {/* Previous / Next sit under the photo, like the screenshot */}
      <div className='lightbox-nav'>
        <button
          type='button'
          className='lightbox-arrow'
          onClick={onPrev}
          aria-label='Previous photo'
        >
          <i className='fas fa-chevron-left'></i>
        </button>
        <button
          type='button'
          className='lightbox-arrow'
          onClick={onNext}
          aria-label='Next photo'
        >
          <i className='fas fa-chevron-right'></i>
        </button>
      </div>
    </div>
  )

  // Second argument = where in the real HTML this should appear
  return createPortal(overlay, document.body)
}

export default Lightbox
