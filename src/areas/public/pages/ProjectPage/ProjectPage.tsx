import styles from './ProjectPage.module.scss'
import ProjectHero from './sections/ProjectHero/ProjectHero'
import ProjectDescription from './sections/ProjectDescription'
import ProjectGallery from './sections/ProjectGallery'
import CollaborationCTA from '../../components/CollaborationCTA'

const ProjectPage = () => {
    return (
        <div className={styles['project-page']}>
            <ProjectHero />
            <ProjectDescription />
            <ProjectGallery />
            <CollaborationCTA />
        </div>
    )
}

export default ProjectPage
