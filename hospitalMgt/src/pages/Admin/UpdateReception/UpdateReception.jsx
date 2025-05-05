
import styles from './styles/updatereception.module.css'

export default function UpdateReception(){

    return(
        <form className={styles.form}>
                    <h1>Update Doctor Details</h1>
                    <label>
                        Id
                        <input className={styles.doctorId} type="number" placeholder='enter reception id' />
                    </label>
                    <button className={styles.searchButton} type="button">Search</button>
        </form>
    )
}