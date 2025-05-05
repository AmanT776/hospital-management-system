import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles  from './styles/receptionnav.module.css'
import { NavLink } from 'react-router-dom'

export default function ReceptionNav(){
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
                            to="/Reception/addPatient"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                        >
                        Add Patient
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Reception/viewPatients"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                       >
                            View All Patient
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Reception/changeReceptionPassword"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                       >
                            Change Password
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/Reception/dischargePatient'
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                        >
                            Discharge Patient
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