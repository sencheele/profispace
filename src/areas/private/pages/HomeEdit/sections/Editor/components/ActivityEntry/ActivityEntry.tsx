import Field from '@/components/Field'
import styles from './ActivityEntry.module.scss'
import Icon from '@/components/Icon'

interface Props {
    index: number
}

const ActivityEntry = ( props: Props ) => {
    const {
        index,
    } = props

    return (
        <div className={styles['activity-entry']}>
            <div className={styles['activity-entry__number']}>
                {index}
            </div>

            <div className={styles['activity-entry__fields']}>
                <Field
                    className={styles['activity-entry__field-name']}
                    label='Название деятельности'
                    type='text'
                    placeholder='Введите название'
                    required
                />

                <button
                    className={styles['activity-entry__delete']}
                    type='button'
                >
                    <Icon name='trash'/>
                </button>

                <Field
                    className={styles['activity-entry__field-description']}
                    label='Описание деятельности'
                    textarea
                    placeholder='Введите описание'
                    required
                />
            </div>
        </div>
    )
}

export default ActivityEntry
