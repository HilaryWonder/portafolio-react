import React from "react";
import "./Slider.css"


const slidesInfo = [
    {
        src: 'img/batman.jpg',
        alt: 'Project 1',
        desc: 'Batman'
    },
    {
        src: 'img/superman.jpg',
        alt: 'Project 2',
        desc: 'Superman'
    },
    {
        src: 'img/Wonder.jpg',
        alt: 'Project 3',
        desc: 'Mujer Maravilla'
    },


]

const slides = slidesInfo.map(slide => (
    <div className="slide-container">
        <img src={slide.src} alt={slide.alt}/>
        <div className="slide-desc">

            <span> {slide.desc}</span>

        </div>
    </div>
))

export default slides;