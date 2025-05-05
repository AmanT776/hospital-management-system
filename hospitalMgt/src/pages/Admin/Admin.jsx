import React from 'react'
import AdminNav from "../../components/AdminNav/AdminNav"
import { Routes, Route } from 'react-router-dom'
import AddDoctor from "./AddDoctor/AddDoctor"
import UpdateDoctor from "./UpdateDoctor/UpdateDoctor";
import AddUser from './AddUser/AddUser';
import UpdateUser from './UpdateUser/UpdateUser';
import AddReception from './AddReception/AddReception';
import UpdateReception from './UpdateReception/UpdateReception';

import styles from "./styles/admin.module.css"
export default function Admin(){
    return(
        <div className={styles["admin-container"]}>
            <AdminNav/>
            <main className="admin-content">
                <Routes>
                    <Route path='/addDoctor' element={<AddDoctor/>}/>
                    <Route path='/updateDoctor' element={<UpdateDoctor/>}/>
                    <Route path='/addUser' element={<AddUser/>}/>
                    <Route path='/updateUser' element={<UpdateUser/>}/>
                    <Route path='/addReception' element={<AddReception/>}/>
                    <Route path='/updateReception' element={<UpdateReception/>}/>
                </Routes>
            </main>
        </div>
    )
}