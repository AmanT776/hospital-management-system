import React from "react";
import {Routes, Route, useLocation} from 'react-router-dom' 

import Home from './pages/Home/Home'
import NavBar from './components/NavBar/NavBar'
import AboutUs from './pages/AboutUs/AboutUs'
import Services from './pages/Services/Services'
import ContactUs from './pages/ContactUs/ContactUs'
import LoginPage from "./pages/Login/Loginpage/LoginPage";
import AdminLogin from "./pages/Login/AdminLogin/AdminLogin";
import DoctorLogin from "./pages/Login/DoctorLogin/DoctorLogin";
import Admin from "./pages/Admin/Admin";
import Doctor from "./pages/Doctor/doctor";
import Reception from "./pages/Reception/Reception";
import ReceptionLogin from "./pages/Login/ReceptionLogin/ReceptionLogin";

import './index.css'
 export default function App(){
  const location = useLocation()
  const hideNavBarRoutes = [
    '/Admin','/Doctor','/Admin/addDoctor','/Admin/updateDoctor',
    '/Admin/addPatient','/Admin/addPatients','/Admin/dischargePatient',
    '/Admin/viewPatients','/Admin/addUser','/Admin/updateUser',
    '/Admin/addReception','/Admin/updateReception',
    "/Doctor/myDetails","/Doctor/assignedPatient",
    "/Doctor/changePassword","/Doctor/changeDoctorPassword",
    "/Reception","/Reception/addPatient","/Reception/viewPatients",
    "/Reception/changeReceptionPassword",'/Reception/dischargePatient'
  ]
  const shouldShowNavbar = !hideNavBarRoutes.includes(location.pathname)
  return(
    <>
      {shouldShowNavbar && <NavBar/>}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/adminLogin" element={<AdminLogin/>}/>
        <Route path="/doctorLogin" element={<DoctorLogin/>}/>
        <Route path="/Admin/*" element={<Admin/>}/>
        <Route path="/Doctor/*" element={<Doctor/>}/>
        <Route path="/Reception/*" element={<Reception/>}/>
        <Route path="/receptionLogin" element={<ReceptionLogin/>}/>
      </Routes>
    </>
  )
 }
