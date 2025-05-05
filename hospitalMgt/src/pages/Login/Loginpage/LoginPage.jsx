import React from 'react';
import {Link } from 'react-router-dom';
import styles from './styles/loginpage.module.css'
import adminIcon from '../../../assets/admin.png'
import doctorIcon from '../../../assets/doctor.png'
import userIcon from '../../../assets/user.svg'
import receptionIcon from '../../../assets/reception.svg'

export default function LoginPage(){
    return(
        <div className={styles['login-page']}>
            <h1 className={styles.title}>Choose Login type</h1>
            <div className={styles.img}>
                <Link to='/adminLogin' style={{ color: '#00838f',textDecoration: 'none' }}>
                    <img src={adminIcon} alt='admin' className={styles['admin-icon']}/>
                    <h1>Admin</h1>
                </Link>
                
                <Link to='/doctorLogin' style={{ color: '#00838f',textDecoration: 'none' }}>
                    <img src={doctorIcon} alt='doctor' className={styles['doctor-icon']}/>
                    <h1>Doctor</h1>
                </Link>
                <Link to='/userLogin' style={{ color: '#00838f',textDecoration: 'none' }}>
                    <img src={userIcon} alt='doctor' className={styles['user-icon']}/>
                    <h1>User</h1>
                </Link>
                <Link to='/receptionLogin' style={{ color: '#00838f',textDecoration: 'none' }}>
                    <img src={receptionIcon} alt='doctor' className={styles['reception-icon']}/>
                    <h1>Reception</h1>
                </Link>
            </div>
        </div>
    )
}