
import styles from './styles/adminreception.module.css'

export default function AddReception(){

    return(
        <form className={styles.form}>
            <h1>Add Receptionist</h1>
            <label>
                Reception Id
                <input type="number" />
            </label>
            <label>
                Name of receptionist
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