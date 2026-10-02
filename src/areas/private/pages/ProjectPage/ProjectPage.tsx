import styles from './ProjectPage.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'
import ProjectHero from './sections/ProjectHero/ProjectHero'
import ProjectDescription from './sections/ProjectDescription'
import ProjectGallery from './sections/ProjectGallery'
import { NavLink } from 'react-router-dom'

const ProjectPage = () => {
    return (
        <div className={styles['project-page']}>
            <ProjectHero />
            <ProjectDescription />
            <ProjectGallery />

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

export default ProjectPage
