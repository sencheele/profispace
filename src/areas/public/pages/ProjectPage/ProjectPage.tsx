import styles from './ProjectPage.module.scss'
import ProjectHero from './sections/ProjectHero/ProjectHero'
import ProjectDescription from './sections/ProjectDescription'

const ProjectPage = () => {
    return (
        <div className={styles['project-page']}>
            <ProjectHero />
            <ProjectDescription />
        </div>
    )
}

export default ProjectPage
