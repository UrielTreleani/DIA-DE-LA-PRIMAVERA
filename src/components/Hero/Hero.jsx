import React from 'react'
import "./Hero.css"
import VideoControls from "../VideoControls/VideoControls"


function Hero() {
  return (
    <section className='hero__container'>
      <div className='hero__title-container'>
        <h1 className='hero__title'>
          Feliz dia de la primavera, Anhi...
        </h1>
        <p>
          Este es un regalo hecho con mucho cariño, quise que sea algo especial, algo distinto, darte algo que no sea "lo normal", algo único. De corazon espero que te guste y puedas disfrutar de esto que hice para vos.
        </p>
      </div>
      <div className='hero__button-container'>
        <VideoControls src="video-prueba.mp4" poster="POSTER-HERO.png"/>
        <a className='hero__button' href="#card">
          Sigamos avanzando...
        </a>
      </div>
    </section>
  )
} 

export default Hero