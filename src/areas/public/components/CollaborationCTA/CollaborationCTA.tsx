import styles from './CollaborationCTA.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'
import { NavLink } from 'react-router-dom'

const CollaborationCTA = () => {
    return (
        <section className={`section ${styles['collaboration-cta']}`}>
            <div className='container'>
                <div className={styles['collaboration-cta__wrapper']}>
                    <div className={styles['collaboration-cta__content']}>
                        <h2 className={`section__title ${styles['collaboration-cta__title']}`}>
                            Давайте работать вместе
                        </h2>

                        <div className={styles['collaboration-cta__description']}>
                            <p>
                                Открыта к интересным проектам, новым задачам и предложениям о сотрудничестве.
                            </p>
                        </div>
                    </div>

                    <NavLink
                        className={`
                            ${buttonStyles.button}
                            ${buttonStyles['button--fill']}
                            ${buttonStyles['button--blue']}
                            ${styles['collaboration-cta__button']}
                        `}
                        to='/projects'
                    >
                        Связаться со мной
                    </NavLink>
                </div>
            </div>
        </section>
    )
}

export default CollaborationCTA
