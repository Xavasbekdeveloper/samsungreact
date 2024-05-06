import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="container hero__container">
            <p className='hero__text'>Save $800</p>
            <h1 className='hero__title'>New Bespoke AI Laundry <br />  Combo™</h1>
            <p className='hero__desc'>Get $800 off. Plus, enjoy free installation, haul away and more.</p>
            <button className='hero__btn'>Buy now</button>
        </div>
    </section>
  )
}

export default Hero