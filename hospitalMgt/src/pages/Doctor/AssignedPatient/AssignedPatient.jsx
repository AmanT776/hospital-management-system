import { Link } from 'react-router-dom'
import styles from './styles/assignedpatient.module.css'

export default function AssignedPatient(){
    return(
        <div className={styles["container"]}>
            <h1>Assigned Patients</h1>
            <table className={styles["patient-table"]}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Amir Mohammed</td>
                        <td>Common cold</td>
                        <td><Link>View more</Link></td>
                    </tr>
                </tbody>
            </table>


            
        </div>
    )
}