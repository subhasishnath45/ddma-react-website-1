/**
 * About.js — About Section
 * --------------------------
 * Demonstrates:
 * - Importing a local image asset
 * - Reusing the shared <Title /> component
 * - Semantic HTML structure (section / article)
 *
 * id="about" connects to the navbar link href="#about"
 */

import aboutImg from '../images/about.jpeg'
import Title from './Title'
import Button from './Button.jsx'
import ImageBox from './ImageBox.jsx'

const About = () => {
  return (
    <section className='section' id='about'>
      {/* Reusable heading: "about us" */}
      <Title title='about' subTitle='us' />

      <div className='section-center about-center'>
        {/* <div className='about-img'>
          <img src={aboutImg} className='about-photo' alt='awesome beach' />
        </div> */}

        <ImageBox aboutImgSrc={aboutImg} aboutImgAlt="About Us Image" extraImgClass="about-photo" />

        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor?
          </p>
          {/* <a href='#' className='btn'>
            read more about us
          </a> */}
          <Button link='https://example.com/about' classes='btn' identifier='about-btn'>read more about us</Button>
          {/* <a href='#' className='btn'>
            read more about our vision
          </a> */}
          <Button link='https://example.com/vision' classes='btn' identifier='vision-btn'>read more about our vision</Button>
        </article>
      </div>
    </section>
  )
}

export default About
