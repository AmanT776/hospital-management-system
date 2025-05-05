
import styles from './styles/updateuser.module.css'

export default function UpdateUser(){

    return(
        <form className={styles.form}>
                <h1>Update Doctor Details</h1>
                    <label>
                        Id
                        <input className={styles.doctorId} type="number" placeholder='enter doctor id' />
                    </label>
                    <button className={styles.searchButton} type="button">Search</button>
        </form>
    )
}