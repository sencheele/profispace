import type { ExpertiseItemData } from '../../Expertise'
import styles from './ExpertiseCard.module.scss'

type Props = {
    item: ExpertiseItemData,
}

const ExpertiseCard = ( props: Props ) => {
    const {
        item,
    } = props

    return (
        <article className={styles['expertise-card']}>
            <div className={styles['expertise-card__header']}>
                <span className={styles['expertise-card__number']}>
                    {item.id}
                </span>

                <h3 className={styles['expertise-card__title']}>
                    {item.title}
                </h3>
            </div>

            <div className={styles['expertise-card__description']}>
                <p>
                    {item.description}
                </p>
            </div>
        </article>
    )
}

export default ExpertiseCard
