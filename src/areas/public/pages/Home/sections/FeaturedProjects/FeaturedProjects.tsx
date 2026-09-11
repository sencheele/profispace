import ProjectList from '@/components/ProjectList'
import styles from './FeaturedProjects.module.scss'

const FeaturedProjects = () => {
    return (
        <section className={`section ${styles['featured-projects']}`}>
            <div className='container'>
                <div className={styles.hero__wrapper}>
                    <h2 className={`section__title ${styles['featured-projects__title']}`}>
                        Featured projects
                    </h2>

                    <ProjectList />
                </div>
            </div>
        </section>
    )
}

export default FeaturedProjects
