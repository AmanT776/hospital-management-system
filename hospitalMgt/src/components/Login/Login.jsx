import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'

import Admin from '../../pages/Admin/Admin'

import logo from '../../assets/logo.png'
import './styles/login.css'
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
                navigate('/Admin')
            }else{
                navigate('/Doctor')
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
        <section className='login'>
                <img src={leftArrow} className='left-arrow' onClick={()=>navigate('/login')}/>
                <div className="img-container">
                        <img className='login-logo' src={logo} alt='logo'/>
                </div>
                <form onSubmit={handleSubmit} method='GET' className='login-form'>
                <h1>{user} Login</h1>
                <div className='input-container'>
                    <label htmlFor='username'>
                        Username
                    </label>
                    <input 
                    type="text" id='username' placeholder='Enter your username'
                    name='username' 
                    onChange={handleChange}/>
                    {errors.username && <p className='error-text'>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input 
                    type="password" id='password' placeholder='******' 
                    name='password'
                    onChange={handleChange}/>
                    {errors.password && <p className='error-text'>{errors.password}</p>}
                </div>
                <button type='submit'>Login</button>
            </form>
        </section>
    )
}
 