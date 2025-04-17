import React from 'react'

import './styles/admin.css'
import { Link } from 'react-router-dom'
export default function Admin(){
    return(
        <>
            <ul>
                <li>Add Doctor</li>
                <li>Update Doctor Details</li>
                <li>Add Patient</li>
                <li>View All Patient</li>
                <li>Discharge Patient</li>
                <Link to='/login'><li>Logout</li></Link>
            </ul>
        </>
    )
}