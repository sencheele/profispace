import styles from './ProjectsPage.module.scss'
import Projects from './sections/Projects'

const ProjectsPage = () => {
    return (
        <div className={styles['projects-page']}>
            <Projects />
        </div>
    )
}

export default ProjectsPage
