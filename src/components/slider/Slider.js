import React from 'react'
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import slides from './Slides';
import "./Slider.css";
/*Este componente va a cargar el carousel de fotos de cada personaje 
*/

const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>
                Superehoes de DC
            </h2>

        </div>
        <Carousel 
            arrows 
            slidesPerPage = {3}
            infinite
            animationSpeed={200}
            centered
            offset={50}
            itemwidth={400}
            slides= {slides}
            breakpoints={{
              960:{
                slidesPerPage: 1,
                arrows: false,
                itemwidth: 250,
              }
            }}
            
        />
      
    </div>
  )
}

export default Slider
