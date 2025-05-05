import React from 'react'
import{Routes,Route} from 'react-router-dom'
import DoctorNav from '../../components/DoctorNav/DoctorNav'
import MyDetails from './MyDetails/MyDetails'
import AssignedPatient from './AssignedPatient/AssignedPatient'
import ChangeDoctorPassword from './ChangePassword/ChangePassword'

import styles from './styles/doctor.module.css'

export default function Doctor(){
    return(
       <div className={styles["doctor-container"]}>
            <DoctorNav/>
            <Routes>
                <Route path='/myDetails' element={<MyDetails/>}/>
                <Route path='/assignedPatient' element={<AssignedPatient/>}/>
                <Route path='/changeDoctorPassword' element={<ChangeDoctorPassword/>}/>
            </Routes>
       </div>
    )
}