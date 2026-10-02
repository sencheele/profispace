import ProjectList from '@/components/ProjectList'
import styles from './Projects.module.scss'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

const Projects = () => {
    return (
        <section className={`section ${styles.projects}`}>
            <div className='container'>
                <div className={styles.projects__wrapper}>
                    <div className={styles.projects__header}>
                        <h1 className={`main-title ${styles['projects__main-title']}`}>
                            Проекты
                        </h1>

                        <Button
                            className={styles.projects__button}
                            type='button'
                            appearance='fill'
                            color='blue'
                        >
                            <span>
                                Добавить проект
                            </span>

                            <Icon name='add' />
                        </Button>
                    </div>

                    <ProjectList />
                </div>
            </div>
        </section>
    )
}

export default Projects
