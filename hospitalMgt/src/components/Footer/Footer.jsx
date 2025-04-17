import React from "react";
import './styles/styles.css'

import logo from '../../assets/logo.png'
export default function Footer(){
    return(
        <footer>
            <div className="footer-logo">
                <img className="logo" src={logo}/>
                <p>Empowering Hospitals through innovative solutions</p>
            </div>
            <div className="footer-info">
                <a href="#"><p>contact: +123456</p></a>
                <a href="#"><p>email: eg@gmail.com</p></a>
                <a href="#"><p>telegram: @hakim</p></a>
            </div>
            <hr />
            <p className="copyright">&copy; 2025 Hakim systems. All rights are reserved.</p>
        </footer>
    )
}