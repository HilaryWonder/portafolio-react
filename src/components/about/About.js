import React from 'react';
import "./About.css"

const About = () => {
  return (
      <div className='about-container'>
          <div className='about-desc'>
        <h3>¿Cuál es el proposito de la liga de la justicia?</h3>
        <p>La Liga de la Justicia es una organización compuesta por los superhéroes más poderosos del mundo dedicados
           a la lucha contra el crimen y la injusticia. Ellos trabajan juntos como un equipo que
         actúa como primera línea de defensa contra las amenazas terrestres y extra-terrestres de la Tierra. 
        </p>
      
    </div>
    <div className='about-img'>

        <img src='img/Wonder.jpg'
         alt='about'/>

    </div>

      </div>
    
  )
}

export default About
