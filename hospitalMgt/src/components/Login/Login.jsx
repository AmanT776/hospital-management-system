import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'

import Admin from '../AdminNav/AdminNav'

import logo from '../../assets/logo.png'
import styles from './styles/login.module.css'
import leftArrow from '../../assets/left-arrow.png'

export default function Login({user}) {
    const navigate = useNavigate()
    const initialValues = {username: "", password: ""}
    const [formValues,setFormValues] = useState(initialValues)
    const [errors,setErrors]= useState({})
    const handleChange = (e) =>{
         const {name,value} = e.target
         setFormValues(prevValues=>(
            {
                ...prevValues,
                [name]: value
             }
         ))
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const validationErrors = validateForm()
        setErrors(validationErrors)
        if(Object.keys(validationErrors).length === 0){
            if(user === 'Admin'){
                navigate('/Admin/addDoctor')
            }else if(user==='Doctor'){
                navigate('/Doctor')
            }else if(user === 'Reception'){
                navigate('/Reception/addPatient')
            }
        }
    }
    const validateForm = ()=>{
        const validationErrors = {}
        if(formValues.username === "" || formValues.password === ""){
            validationErrors.username = "username is required"
            validationErrors.password = "password is required"
        }
        if(formValues.username.length > 0 && formValues.username.length < 3){
            validationErrors.username = "Enter a username with 3 or more characters"
        }
        if(formValues.password.length > 0 && formValues.password.length < 3){
            validationErrors.password = "Enter a password with 3 or more characters"
        }
        return validationErrors
    }
    return(
        <section className={styles.login}>
            <img src={leftArrow} className={styles['left-arrow']} onClick={()=>navigate('/login')} alt="Back"/>
            <div className={styles['img-container']}>
                <img className={styles['login-logo']} src={logo} alt='logo'/>
            </div>
            <form onSubmit={handleSubmit} method='GET' className={styles['login-form']}>
                <h1>{user} Login</h1>
                <div className={styles['input-container']}>
                    <label htmlFor='username'>
                        Username
                    </label>
                    <input 
                        type="text" 
                        id='username' 
                        placeholder='Enter your username'
                        name='username' 
                        onChange={handleChange}
                    />
                    {errors.username && <p className={styles['error-text']}>{errors.username}</p>}
                </div>
                <div className={styles['input-container']}>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input 
                        type="password" 
                        id='password' 
                        placeholder='******' 
                        name='password'
                        onChange={handleChange}
                    />
                    {errors.password && <p className={styles['error-text']}>{errors.password}</p>}
                </div>
                <button type='submit'>Login</button>
            </form>
        </section>
    )
}
 