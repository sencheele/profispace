import { NavLink } from 'react-router-dom'
import styles from './Hero.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'

const Hero = () => {
    return (
        <section className={`section ${styles.hero}`}>
            <div className='container'>
                <div className={styles.hero__wrapper}>
                    <h1 className={styles.hero__title}>
                        Савченко Ксения
                    </h1>

                    <p className={styles.hero__position}>
                        Frontend-разработчик
                    </p>

                    <div className={styles.hero__description}>
                        <p>
                            Добро пожаловать в моё профессиональное пространство!
                        </p>

                        <p>
                            Здесь я делюсь своими проектами, опытом и профессиональным развитием — всем, что помогает лучше узнать меня как специалиста.
                        </p>
                    </div>

                    <div className={styles.hero__buttons}>
                        <NavLink
                            className={`${buttonStyles.button} ${buttonStyles['button--fill']}`}
                            to='/projects'
                        >
                            Посмотреть проекты
                        </NavLink>

                        <NavLink
                            className={`${buttonStyles.button} ${buttonStyles['button--stroke']}`}
                            to='/about'
                        >
                            Узнать обо мне
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
