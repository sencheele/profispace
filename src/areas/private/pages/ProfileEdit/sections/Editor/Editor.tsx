import Button from '@/components/Button'
import styles from './Editor.module.scss'
import buttonStyles from '@/components/Button/Button.module.scss'
import Field from '@/components/Field'
import { NavLink } from 'react-router-dom'

const Editor = () => {
    return (
        <section className={`section ${styles.editor}`}>
            <div className='container'>
                <div className={styles.editor__wrapper}>
                    <h1 className='main-title'>
                        Профиль
                    </h1>

                    <form className={styles.editor__form}>
                        <div className={styles.editor__group}>
                            <h2 className={styles['editor__group-title']}>
                                Основная информация
                            </h2>

                            <div className={styles['editor__group-fields']}>
                                <Field
                                    label='Фамилия'
                                    type='text'
                                    placeholder='Введите фамилию'
                                    required
                                />

                                <Field
                                    label='Имя'
                                    type='text'
                                    placeholder='Введите имя'
                                    required
                                />

                                <Field
                                    label='Профессия'
                                    type='text'
                                    placeholder='Введите профессию'
                                    required
                                />

                                <Field
                                    label='Локация'
                                    type='text'
                                    placeholder='Введите страну и город'
                                    required
                                />
                            </div>
                        </div>

                        <div className={styles.editor__group}>
                            <h2 className={styles['editor__group-title']}>
                                Способы связи
                            </h2>

                            <div className={styles['editor__group-fields']}>
                                <Field
                                    label='Номер телефона'
                                    type='tel'
                                    placeholder='Введите номер'
                                    required
                                />

                                <Field
                                    label='Email'
                                    type='email'
                                    placeholder='Введите email'
                                    required
                                />

                                <Field
                                    label='Telegram'
                                    type='text'
                                    placeholder='Введите ник'
                                    required={false}
                                />

                                <Field
                                    label='WhatsApp'
                                    type='text'
                                    placeholder='Введите '
                                    required={false}
                                />
                            </div>
                        </div>

                        <div className={styles.editor__group}>
                            <h2 className={styles['editor__group-title']}>
                                Профессиональные профили
                            </h2>

                            <div className={styles['editor__group-fields']}>
                                <Field
                                    label='Личный вебсайт'
                                    type='url'
                                    placeholder='Введите ссылку'
                                    required={false}
                                />

                                <Field
                                    label='LinkedIn'
                                    type='url'
                                    placeholder='Введите ссылку'
                                    required={false}
                                />

                                <Field
                                    label='hh.ru'
                                    type='url'
                                    placeholder='Введите ссылку'
                                    required={false}
                                />

                                <Field
                                    label='GitHub'
                                    type='url'
                                    placeholder='Введите ссылку'
                                    required={false}
                                />

                                <Field
                                    label='GitLab'
                                    type='url'
                                    placeholder='Введите ссылку'
                                    required={false}
                                />
                            </div>
                        </div>

                        <div className={styles.editor__buttons}>
                            {/* <Button
                                type='button'
                                appearance='stroke'
                                color='blue'
                            >
                                Отменить изменения
                            </Button> */}
                            <NavLink
                            className={`${buttonStyles.button} ${buttonStyles['button--stroke']} ${buttonStyles['button--blue']}`}
                                to='..'
                            >
                                Отменить изменения
                            </NavLink>

                            <Button
                                type='submit'
                                appearance='fill'
                                color='blue'
                            >
                                Сохранить
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Editor
