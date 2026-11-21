/**
 * data.js — Central Content / Mock Database
 * -------------------------------------------
 * In beginner projects we often store page content in a plain JS file
 * instead of fetching it from an API.
 *
 * Benefits for students:
 * - One place to update text, links, and tour details
 * - Components stay clean (they only display data, they don't hard-code it)
 * - Easy to later replace this file with a real API response
 *
 * Pattern used everywhere in this project:
 *   import { tours } from '../data'
 *   tours.map((tour) => <Tour key={tour.id} {...tour} />)
 */

// Webpack / CRA lets us import image files. They become URL strings at build time.
import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
import tour5 from './images/tour-5.jpeg'
import tour6 from './images/tour-6.jpeg'

import banner1 from './images/main.jpeg';
import banner2 from './images/main.jpeg';
import banner3 from './images/main.jpeg';

/**
 * Navigation / footer page links (in-page anchors)
 * href values match section ids in the components (e.g. id="about")
 */
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tours', text: 'tours' },
  { id: 5, href: '#gallery', text: 'gallery' },
  { id: 6, href: '#contact', text: 'contact' },
]

/**
 * Hero carousel slides
 * The Hero component displays one object at a time.
 */
export const heroSlides = [
  {
    id: 1,
    title: 'backroads app',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta.',
    buttonText: 'explore first tour',
    buttonLink: '#tours',
    image: banner1,
  },
  {
    id: 2,
    title: 'explore the world',
    text: 'Discover beautiful places, meet new people, and make memories that last a lifetime.',
    buttonText: 'explore second tour',
    buttonLink: '#tours',
    image: banner2,
  },
  {
    id: 3,
    title: 'find your adventure',
    text: 'Choose your next journey and let Backroads help you create an unforgettable experience.',
    buttonText: 'explore third tour',
    buttonLink: '#tours',
    image: banner3,
  },
]

/**
 * Social media links used in Navbar and Footer
 * icon = Font Awesome class name string
 */
export const socialLinks = [
  { id: 1, href: '#', icon: 'fab fa-facebook', decernible: 'Facebook Icon' },
  { id: 2, href: '#', icon: 'fab fa-twitter', decernible: 'Twitter' },
  { id: 3, href: '#', icon: 'fab fa-squarespace', decernible: 'Squarespace' },
]

/**
 * Services section cards
 * Each object becomes one <Service /> component
 */
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Asperiores, officia.',
  },
]

/**
 * Featured tours
 * image fields use the imported image URLs above
 */
export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1th, 2020',
    title: 'best of java',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'indonesia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15th, 2020',
    title: 'explore hong kong',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'hong kong',
    duration: 8,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2019',
    title: 'kenya highlights',
    info: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.`,
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
]

/**
 * Photo gallery
 * --------------
 * A simple list of images. The Gallery component maps over this array.
 * We reuse the same tour photos already used on the Tours cards.
 */
export const galleryPhotos = [
  { id: 1, src: tour1, alt: 'Tibet adventure landscape' },
  { id: 2, src: tour2, alt: 'Best of Java scenery' },
  { id: 3, src: tour3, alt: 'Hong Kong city view' },
  { id: 4, src: tour4, alt: 'Kenya highlights safari' },
  { id: 5, src: tour5, alt: 'Mountain hiking trail' },
  { id: 6, src: tour6, alt: 'Coastal tour destination' },
]
