import ProjectList from '@/components/ProjectList'
import styles from './Projects.module.scss'

interface Props {
    title: 'Избранные проекты' | 'Все проекты'
    pageTitle?: 'Проекты'
}

const Projects = ( props: Props ) => {
    const {
        title,
        pageTitle,
    } = props
    return (
        <section className={`section ${styles.projects}`}>
            <div className='container'>
                <div className={styles.projects__wrapper}>
                    {
                        pageTitle && (
                            <h1 className='main-title'>
                                {pageTitle}
                            </h1>
                        )
                    }

                    <h2 className={`section__title styles.projects__title`}>
                        {title}
                    </h2>

                    <ProjectList />
                </div>
            </div>
        </section>
    )
}

export default Projects
