import React from 'react'

import Footer from '../../components/Footer/Footer'
import TileCard from '../../components/TileCard/TileCard'
import styles from './styles/services.module.css'

const info = [
    {
        title: "Add Patient",
        description: "Keep doctors informed with patient information and history."
    },
    {
        title: "Dischrage Patient",
        description: "discharge patient and print their bills"
    },
    {
        title: "Bed Management",
        description: "Manage bed availability and patient assignments efficiently."
    },
    {
        title: "Get Doctor Information",
        description: "Access doctor details, including specialization and availability."
    },
    {
        title: "Bed Management",
        description: "Manage bed availability and patient assignments efficiently."
    },
    {
        title: "Get Doctor Information",
        description: "Access doctor details, including specialization and availability."
    }
]

export default function Services() {
    return(
        <>
            <section className={styles.services}>
                <h1 className={styles['page-title']}>🌟Services🌟</h1>
                <div className={styles['service-card']}>
                    {info.map((item, index) => (
                        <TileCard title={item.title} description={item.description} key={index}/>
                    ))}
                </div>
                <button className={styles['get-started']}>
                    <a href="/login">Get Started</a>
                </button>
            </section>
            <Footer/>
        </>
    )
}