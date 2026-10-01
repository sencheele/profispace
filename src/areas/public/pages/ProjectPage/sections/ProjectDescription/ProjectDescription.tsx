import styles from './ProjectDescription.module.scss'

const ProjectDescription = () => {
    return (
        <section className={`section ${styles['project-description']}`}>
            <div className='container'>
                <div className={styles['project-description__wrapper']}>
                    <h2 className={`section__title ${styles['project-description__title']}`}>
                        Описание проекта
                    </h2>

                    <div className={styles['project-description__description']}>
                        <p>
                            Нормальное/подробное описание проекта. Что это за проект и что было сделано и будет. Буквально несколько предложений. Нормальное/подробное описание проекта. Что это за проект и что было сделано. Буквально несколько предложений. Нормальное/подробное описание проекта. Что это за проект и что было сделано и будет. Буквально несколько предложений. Нормальное/подробное описание проекта. Что это за проект и что было сделано. Буквально несколько предложений.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectDescription
