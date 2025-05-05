import React from 'react'

import styles from './styles/aboutus.module.css'
import DoctorImg from '../../assets/doctor.jpg'
import TileCard from '../../components/TileCard/TileCard'
import Footer from '../../components/Footer/Footer'

const info =[
    {
        title: "Mission",
        description: "Our mission is to revolutionize healthcare by providing a comprehensive platform that connects patients with doctors, streamlining the appointment process and enhancing the overall patient experience."
    },
    {
        title: "Vision",
        description: "Our vision is to be the leading healthcare platform that empowers patients to take control of their health and well-being, while providing doctors with the tools they need to deliver exceptional care."
    },
    {
        title: "Values",
        description: "We value integrity, innovation, and collaboration. We are committed to providing a secure and user-friendly platform that prioritizes patient privacy and data security."
    }
]

export default function AboutUs() {
    return(
        <>
            <section className={styles['about-us']}>
                <div className={styles.container}>
                    <div className={styles['about-banner']}>
                        <img src={DoctorImg} alt="Doctor" />
                    </div>
                    <div className={styles['about-text']}>
                        <h1>What is Hakim ?</h1>
                        <p>Hakim is a web application that allows patients to book appointments with doctors and manage their medical records online. It aims to provide a convenient and efficient way for patients to access healthcare services.</p>
                        <div className={styles['block-text']}>
                            <h2>Admin Services</h2>
                            <p>We manage and optimize digital environmets, ensuring seamless operations and empowering teams with efficient tools and strategies for success</p>
                            <h2>Empowering Hospitals</h2>
                            <p>We are shaping the future of learning by creating impactful digital experiences that inspire and engage across all platforms.</p>
                        </div>
                    </div>
                </div>
                <div className={styles['about-card']}>
                    {info.map((item, index) => (
                        <TileCard title={item.title} description={item.description} key={index} />
                    ))}
                </div>
            </section>
            <Footer/>
        </>
    )
}