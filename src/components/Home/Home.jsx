import React from 'react'
import "./Home.css"
import Hero from '../Hero/Hero'
import Cards from '../Cards/Cards'

function Home() {
  return (
    <div className='home__container'>
      <Hero/>
      <Cards/>
    </div>
  )
}

export default Home