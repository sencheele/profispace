import ProjectList from '@/components/ProjectList'
import styles from './FeaturedProjects.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'
import { NavLink } from 'react-router-dom'

const FeaturedProjects = () => {
    return (
        <section className={`section ${styles['featured-projects']}`}>
            <div className='container'>
                <div className={styles['featured-projects__wrapper']}>
                    <h2 className={`section__title ${styles['featured-projects__title']}`}>
                        Featured projects
                    </h2>

                    <ProjectList />

                    <NavLink
                        className={`${buttonStyles.button} ${buttonStyles['button--fill']} ${buttonStyles['button--white']} ${styles['featured-projects__button']}`}
                        to='/projects'
                    >
                        Все проекты
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects
