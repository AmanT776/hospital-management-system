import React from "react";
import styles from './styles/footer.module.css'

import logo from '../../assets/logo.png'
export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles['footer-logo']}>
                <img className={styles.logo} src={logo} alt="Hakim Systems Logo"/>
                <p>Empowering Hospitals through innovative solutions</p>
            </div>
            <div className={styles['footer-info']}>
                <a href="#"><p>contact: +123456</p></a>
                <a href="#"><p>email: eg@gmail.com</p></a>
                <a href="#"><p>telegram: @hakim</p></a>
            </div>
            <hr />
            <p className={styles.copyright}>&copy; 2025 Hakim systems. All rights are reserved.</p>
        </footer>
    )
}