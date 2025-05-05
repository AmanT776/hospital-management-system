import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import styles  from './styles/adminnav.module.css'
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
                            to="/Admin/addDoctor"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                        >
                            Add Doctor
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Admin/updateDoctor"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                       >
                            Update Doctor Details
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Admin/addUser"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                       >
                            Add User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Admin/updateUser"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                        >
                            Update User
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="/Admin/addReception"
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                        >
                            Add Reception
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to='/Admin/updateReception'
                            className={({isActive}) => isActive ? styles.active : styles['nav-link']}
                          
                        >
                        Update Reception Details
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