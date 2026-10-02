import Field from '@/components/Field'
import styles from './Editor.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'
import ActivityEntry from './components/ActivityEntry'
import Button from '@/components/Button'
import Icon from '@/components/Icon'
import { NavLink } from 'react-router-dom'

const Editor = () => {
    return (
        <section className={`section ${styles.editor}`}>
            <div className='container'>
                <div className={styles.editor__wrapper}>
                    <h1 className='main-title'>
                        Главная
                    </h1>

                    <form className={styles.editor__form}>
                        <div className={styles.editor__group}>
                            <h2 className={styles['editor__group-title']}>
                                Шапка
                            </h2>

                            <Field
                                label='Краткое описание'
                                textarea
                                placeholder='Введите текст'
                                required
                            />
                        </div>

                        <div className={styles.editor__group}>
                            <h2 className={styles['editor__group-title']}>
                                Чем я занимаюсь
                            </h2>

                            <div className={styles.editor__activities}>
                                <ActivityEntry index={1} />
                                <ActivityEntry index={2} />
                            </div>

                            <Button
                                className={styles['editor__button-add']}
                                type='button'
                                appearance='stroke'
                                color='blue'
                            >
                                Добавить деятельность
                                <Icon name='add' />
                            </Button>
                        </div>

                        <div className={styles.editor__buttons}>
                            <Button
                                type='submit'
                                appearance='fill'
                                color='blue'
                            >
                                Сохранить
                            </Button>

                            <NavLink
                                className={`${buttonStyles.button} ${buttonStyles['button--stroke']} ${buttonStyles['button--blue']}`}
                                to='/private/home'
                            >
                                Отменить изменения
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Editor
