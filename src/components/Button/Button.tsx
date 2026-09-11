import styles from './Button.module.scss'

type Props = {
    children: string,
}

const Button = ( props:Props ) => {
    const {
        children,
    } = props

    return (
        <button className={styles.button}>
            {children}
        </button>
    )
}

export default Button
