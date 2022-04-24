import { useRef } from 'react'

import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Gallery.css'

const galleryImages  = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]

const Gallery = () => {
    const scrollRef = useRef()

    const scroll = (direction) => {
        const { current } = scrollRef

        switch (direction) {
            case 'left':
              current.scrollLeft -= 301
              break
            case 'right':
              current.scrollLeft += 301
              break
            default:
              throw new Error('Invalid direction')
        }
    }
    return (
      <div className="app__gallery flex__center">
          <div className="app__gallery-content">
              <SubHeading title='Instagram' />
              <h1 className="headtext__cormorant">Photo Gallery</h1>
              <p className="p__opensans" style={{color: '#AAA', marginTop: '2rem'}}>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu.</p>
              <button className="custom__button">View More</button>
          </div>

          <div className="app__gallery-images">
              <div ref={scrollRef} className="app__gallery-images_container">
                  {galleryImages.map((image, index) => (
                      <div className="app__gallery-image_card flex__center" key={index}>
                          <img src={image} alt="gallery" />
                          <BsInstagram className="gallery__image-icon" />
                      </div>
                  ))}
              </div>
              <div className="app__gallery-images_arrows">
                  <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
                  <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
              </div>
          </div>
      </div>
)}

export default Gallery
