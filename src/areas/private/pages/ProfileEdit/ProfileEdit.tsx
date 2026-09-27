import styles from './ProfileEdit.module.scss'
import Editor from './sections/Editor'

const ProfileEdit = () => {
    return (
        <div className={styles['profile-edit']}>
            <Editor />
        </div>
    )
}

export default ProfileEdit
