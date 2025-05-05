
import styles from './styles/changereceptionpassword.module.css'

export default function ChangeReceptionPassword(){
    return(
        <div>
        <form action="" className={styles['container']}>
            <h1>Change Password</h1>
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