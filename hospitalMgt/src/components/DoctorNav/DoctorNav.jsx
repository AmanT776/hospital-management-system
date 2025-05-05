import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles  from './styles/doctornav.module.css'
import { NavLink } from 'react-router-dom'

export default function AdminNav(){
    const[toggle,setToggle] = useState(false)
    function displayNav(updatedToggle){
        if (updatedToggle) {
            document.getElementById('nav-links').style.display = 'flex';
        } else {
            document.getElementById('nav-links').style.display = 'none';
        }
    }
    function toggleMenu(){
        setToggle(prevToggle => {
            const newToggle = !prevToggle;
            displayNav(newToggle);
            return newToggle;
        });

    }

    return(
        <>
            <nav className={styles.nav}>
                <FontAwesomeIcon 
                    icon={faBars} 
                    style={{
                        color: 'white',
                        fontSize: '2rem',
                        marginLeft: 'auto',
                        display: 'block',
                    }} 
                    className={styles.menuIcon}
                    onClick={toggleMenu}
                />
                <ul id='nav-links'>
                    <li>
                        <NavLink 
                            to="/Doctor/myDetails"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                        >
                        My details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Doctor/assignedPatient"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                       >
                            View Assigned Patient
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Doctor/changeDoctorPassword"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                       >
                            Change Password
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/login'
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                        >
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}