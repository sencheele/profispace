import { NavLink } from 'react-router-dom'
import buttonStyles from '@/components/Button/Button.module.scss'
import styles from './ProfileHero.module.scss'
import ProfileInfoItem from './components/ProfileInfoItem'
import type { Profile } from '@/types/profile'
import Icon from '@/components/Icon'

const ProfileHero = () => {
    const mockProfile: Profile = {
        surname: 'Савченко',
        name: 'Ксения',
        profession: 'Frontend-разработчик',
        location: 'Россия, Санкт-Петербург',

        contacts: [
            {
                type: 'phone',
                value: '+79642124660',
            },
            {
                type: 'email',
                value: 'savchenko.chita02@gmail.com',
            },
            {
                type: 'telegram',
                value: 'sencheele',
            },
            {
                type: 'whatsapp',
                value: 'sencheele',
            },
        ],

        professionalLinks: [
            {
                type: 'github',
                value: 'github.com/sencheele',
            },
            {
                type: 'linkedin',
                value: 'linkedin.com/sencheele',
            },
        ],
    }

    return (
        <section className={`section ${styles['profile-hero']}`}>
            <div className='container'>
                <div className={styles['profile-hero__wrapper']}>
                    <div className={styles['profile-hero__identity']}>
                        <div className={styles['profile-hero__avatar']}>
                            <img src='' alt='' />
                        </div>

                        <div className={styles['profile-hero__details']}>
                            <div className={styles['profile-hero__name']}>
                                {`${mockProfile.surname} ${mockProfile.name}`}
                            </div>

                            <div className={styles['profile-hero__profession']}>
                                {mockProfile.profession}
                            </div>

                            <div className={styles['profile-hero__location']}>
                                <Icon name='pin' />

                                <span className={styles['profile-hero__location-text']}>
                                    {mockProfile.location}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className={styles['profile-hero__info']}>
                        <div className={styles['profile-hero__group']}>
                            {
                                mockProfile.contacts.map(item => (
                                    <ProfileInfoItem
                                        icon={item.type}
                                        key={item.type}
                                    >
                                        {item.value}
                                    </ProfileInfoItem>
                                ))
                            }
                        </div>

                        <div className={styles['profile-hero__group']}>
                            {
                                mockProfile.professionalLinks.map(item => (
                                    <ProfileInfoItem
                                        icon={item.type}
                                        key={item.type}
                                    >
                                        {item.value}
                                    </ProfileInfoItem>
                                ))
                            }
                        </div>
                    </div>

                    <NavLink
                        className={`${buttonStyles.button} ${buttonStyles['button--stroke']} ${buttonStyles['button--blue']} ${styles['profile-hero__button']}`}
                        to='edit'
                    >
                        Редактировать профиль
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default ProfileHero
