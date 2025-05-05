
import styles from './styles/addpatient.module.css'
export default function AddPatient(){
    
    return(
        <form className={styles["container"]}>
            <label>
                Name
                <input type="text" />
            </label>
            <label>
                Address
                <input type="text" />
            </label>
            <label>
                Phone No.
                <input type="text" />
            </label>
            <label>
                Case
                <input type="text" />
            </label>
            <label>
                Date
                <input type="date" />
            </label>
            <label>
                Time 
                <input type='time'/>
            </label>
            <div className={styles.buttons}>
                <button>Add</button>
                <button>Assign Bed</button>
            </div>
        </form>
    )
}