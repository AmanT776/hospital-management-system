
import styles from './styles/mydetails.module.css'

export default function MyDetails(){
    return(
        <div className={styles['mydetails-container']}>
            <h1>My Details</h1>
            <h3>Name: </h3>
            <h3>Address</h3>
            <h3>Email</h3>
            <h3>Phone No. </h3>
            <h3>Specialization</h3>
            <h3>salary</h3>
        </div>
    )
}