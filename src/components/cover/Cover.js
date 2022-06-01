import React from 'react'
import "./Cover.css";
import coverVideo from "../../media/coverVideo.mp4";

/*Este componente va a cargar la portada del portafolio y mostrar un video de fondo 
*/
const Cover = () => {
  return (
    <div className='cover-container'>
      
        <video className='video' src={coverVideo} autoPlay loop muted/> 
        <h1>La liga de la Justicia</h1>
        <p>los super amigos</p>
    </div>
  )
}

export default Cover
