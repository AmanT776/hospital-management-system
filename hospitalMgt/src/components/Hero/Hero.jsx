import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles/hero.module.css'
import HeroBanner from '../../assets/heroBanner.jpg'

export default function Hero(){
    return(
        <section className={styles.hero}>
            <div className={styles['hero-text']}>
                <h1><span className={styles['hero-title']}>Smart Hospital management</span> for African Hospitals</h1>
                <p className={styles.description}>The first Smart Hospital Management System deisgned to tackle the unique challenges of African Hospitals with cutting edge, custom solutions</p>
                <Link to='/login'><button className={styles['start-btn']}>Get Started</button></Link>
            </div>
            <div className={styles['hero-img-container']}>
                <img className={styles['hero-banner']} src={HeroBanner} alt="Hospital Management System"/>
            </div>
        </section>
    )
}