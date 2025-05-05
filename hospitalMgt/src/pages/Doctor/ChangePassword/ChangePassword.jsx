
import styles from './styles/changedoctorpassword.module.css'

export default function ChangeDoctorPassword(){
    return(
        <div>
            <form action="" className={styles['container']}>
                <h1>Change Password</h1>
                <p className={styles.username}>username: </p>
                <label>
                    old Password
                    <input type="text" placeholder='enter old password'/>
                </label>
                <label>
                    New Password
                    <input type="text" placeholder='enter new password'/>
                </label>
                <button>update</button>
            </form>
            
        </div>
    )
}