import React from 'react'
import styles from './styles/addDoctor.module.css'

export default function AddDoctor(){
    return(
        <form className={styles.form}>
            <h1>Add Doctor</h1>
            <label>
                Id
                <input type="number" />
            </label>
            <label>
                Name
                <input type="text" />
            </label>
            <label>
                Address
                <input type="text" />
            </label>
            <label>
                Email
                <input type="email" />
            </label>
            <label>
                Phone No.
                <input type="text" />
            </label>
            <label>
                Specialization
                <input type="text" />
            </label>
            <label>
                Salary
                <input type="number" />
            </label>
            <label>
                Password
                <input type="password" />
            </label>
            <button className={styles.button} type="submit">Submit</button>
        </form>
    )
}