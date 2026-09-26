import styles from './Icon.module.scss'

interface Props {
    name: string
}

const Icon = ( props: Props ) => {
    const {
        name
    } = props

    return (
        <svg className={styles.icon}>
            <use href={`/sprite.svg#${name}`}></use>
        </svg>
    )
}

export default Icon
