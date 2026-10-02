import styles from './Home.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'
import Hero from './sections/Hero'
import FeaturedProjects from './sections/FeaturedProjects'
import Expertise from './sections/Expertise'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className={styles.home}>
            <Hero />
            <FeaturedProjects />
            <Expertise />

            <section className='section'>
                <div className='container'>
                    <div className='section__wrapper'>
                        <NavLink
                            className={`${buttonStyles.button} ${buttonStyles['button--stroke']} ${buttonStyles['button--blue']} ${styles['profile-hero__button']}`}
                            to='edit'
                        >
                            Редактировать
                        </NavLink>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
