import styles from './Profile.module.scss'
import ProfileHero from './sections/ProfileHero'

const Profile = () => {
    return (
        <div className={styles.profile}>
            <ProfileHero />
        </div>
    )
}

export default Profile
