import styles from './ProjectPage.module.scss'
import ProjectHero from './sections/ProjectHero/ProjectHero'

const ProjectPage = () => {
    return (
        <div className={styles['project-page']}>
            <ProjectHero />
        </div>
    )
}

export default ProjectPage
