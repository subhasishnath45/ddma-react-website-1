import React from 'react'

/*

props = {
  aboutImgSrc: "https://example.com/about-image.jpg",
  aboutImgAlt: "About Us Image"
}

console.log(props.aboutImgSrc) // "https://example.com/about-image.jpg"
console.log(props.aboutImgAlt) // "About Us Image"

*/

const ImageBox = (props) => {
  return (
    <>
        <div className={`boxed-img ${props.extraImgClass}`}>
          {/* Imported image becomes a URL string used in src */}
          <img src={props.aboutImgSrc} className='about-photo' alt={props.aboutImgAlt} />
        </div>
    </>
  )
}

export default ImageBox