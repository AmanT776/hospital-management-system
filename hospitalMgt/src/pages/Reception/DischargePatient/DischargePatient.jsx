
import styles from './styles/dischargepatient.module.css'
export default function DischargePatient(){

    return(
        <form action="" className={styles.container}>
            <label>
                Patient Id
                <input type="text" />
            </label>
            <button>Search</button>
        </form>
    )
}