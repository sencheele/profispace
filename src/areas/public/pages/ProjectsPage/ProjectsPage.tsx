import styles from './ProjectsPage.module.scss'
import Projects from './sections/Projects'

const ProjectsPage = () => {
    return (
        <div className={styles['projects-page']}>
            <Projects
                title='Избранные проекты'
                pageTitle='Проекты'
            />

            <Projects
                title='Все проекты'
            />
        </div>
    )
}

export default ProjectsPage
