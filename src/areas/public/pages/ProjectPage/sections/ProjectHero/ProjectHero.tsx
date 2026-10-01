import Icon from '@/components/Icon'
import styles from './ProjectHero.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'

const ProjectHero = () => {
    return (
        <section className={`section ${styles['project-hero']}`}>
            <div className='container'>
                <div className={styles['project-hero__wrapper']}>
                    <div className={styles['project-hero__information']}>
                        <div className={styles['project-hero__type']}>
                            Pet-project
                        </div>

                        <h1 className={`main-title ${styles['project-hero__name']}`}>
                            Название проекта
                        </h1>

                        <div className={styles['project-hero__description']}>
                            <p>
                                Краткое описание. Что это за проект и что было сделано и будет. Буквально несколько предложений. Краткое описание. Что это за проект и что было сделано. Буквально несколько предложений.
                            </p>
                        </div>

                        <ul className={styles['project-hero__details']}>
                            <li className={styles['project-hero__detail']}>
                                <Icon name='user'/>

                                <span className={styles['project-hero__detail-label']}>
                                    Роль:
                                </span>

                                <span className={styles['project-hero__detail-value']}>
                                    Frontend-разработчик
                                </span>
                            </li>

                            <li className={styles['project-hero__detail']}>
                                <Icon name='wrench'/>

                                <span className={styles['project-hero__detail-label']}>
                                    Инструменты:
                                </span>

                                <span className={styles['project-hero__detail-value']}>
                                    React, Vite, GIT
                                </span>
                            </li>

                            <li className={styles['project-hero__detail']}>
                                <Icon name='calendar'/>

                                <span className={styles['project-hero__detail-label']}>
                                    Период:
                                </span>

                                <span className={styles['project-hero__detail-value']}>
                                    2026
                                </span>
                            </li>
                        </ul>

                        <div className={styles['project-hero__buttons']}>
                            <a
                                className={`${buttonStyles.button} ${buttonStyles['button--fill']} ${buttonStyles['button--blue']}`}
                                href=""
                            >
                                Демонстрация
                            </a>

                            <a
                                className={`${buttonStyles.button} ${buttonStyles['button--stroke']} ${buttonStyles['button--blue']}`}
                                href=""
                            >
                                Исходники
                            </a>
                        </div>
                    </div>

                    <div className={styles['project-hero__image']}>
                        <img src='' alt='Превью проекта' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProjectHero
