
import styles from './styles/viewpatient.module.css'

export default function ViewPatients(){

    return(
        <table>
            <thead>
                <tr>
                    <th>Patient Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Phone No.</th>
                    <th>Case</th>
                    <th>Doctor Id</th>
                    <th>Date</th>
                    <th>time</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>01</td>
                    <td>Abebe Kebede</td>
                    <td>Bahirdar</td>
                    <td>092534</td>
                    <td>malaria</td>
                    <td>121</td>
                    <td>10/11/2017</td>
                    <td>6:00 AM</td>
                </tr>
            </tbody>
        </table>
    )
}