import ReceptionNav from "../../components/ReceptionNav/ReceptionNav"
import {Routes,Route} from 'react-router-dom'
import AddPatient from "./AddPatient/AddPatient"
import ViewPatients from "./ViewPatient/ViewPatients"
import ChangeReceptionPassword from "./ChangeReceptionPassword/ChangeReceptionPassword"
import DischargePatient from "./DischargePatient/DischargePatient"

import styles from './styles/reception.module.css'
export default function Reception(){

    return(
        <div container={styles.container}>
            <ReceptionNav/>
            <Routes>
                <Route path='/addPatient' element={<AddPatient/>}/>
                <Route path="/viewPatients" element={<ViewPatients/>}/>
                <Route path="/changeReceptionPassword" element={<ChangeReceptionPassword/>}/>
                <Route path="/dischargePatient" element={<DischargePatient/>}/>
            </Routes>
        </div>
    )
}