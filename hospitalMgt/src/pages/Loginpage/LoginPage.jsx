import React from 'react';
import {Link } from 'react-router-dom';


import './styles/loginpage.css'
import adminIcon from '../../assets/admin.png'
import doctorIcon from '../../assets/doctor.png'


export default function LoginPage(){
    
    return(
        <div className="login-page">
            <h1 className='title'>Choose Login type</h1>
            <div className="img">
                <Link to='/adminLogin' style={{ color: '#00838f',textDecoration: 'none' }}>
                    <img src={adminIcon} alt='admin' className='admin-icon'/>
                    <h1>Admin</h1>
                </Link>
                
                <Link to='/doctorLogin' style={{ color: '#00838f',textDecoration: 'none' }}>
                    <img src={doctorIcon} alt='doctor' className='doctor-icon'/>
                    <h1>Doctor</h1>
                </Link>
                
            </div>
        </div>
        
    )
}