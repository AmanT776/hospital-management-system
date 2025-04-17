import React from 'react'
import { Link } from 'react-router-dom'

import HeroBanner from '../../assets/heroBanner.jpg'
import './styles/hero.css'

export default function Hero(){
    return(
        <section className='hero'>
            <div className="hero-text">
                <h1><span className='hero-title'>Smart Hospital management</span> for African Hospitals</h1>
                <p className='description'>The first Smart Hospital Management System deisgned to tackle the unique challenges of African Hospitals with cutting edge, custom solutions</p>
                <Link to='/login'><button className='start-btn'>Get Started</button></Link>
            </div>
            <div className='hero-img-container'>
                <img className='hero-banner' src={HeroBanner}/>
            </div>
        </section>
    )
}