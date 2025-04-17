import React from 'react'

import './styles/adminlogin.css'
import Login from '../../components/Login/Login'
import Footer from '../../components/Footer/Footer'

export default function AdminLogin() {
    return(
        <>
            <Login user='Admin'/>
            <Footer/>
        </>
    )
}