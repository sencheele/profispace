import type { ReactNode } from 'react'
import styles from './Button.module.scss'

interface Props {
    className?: string
    type: 'button' | 'submit'
    appearance: 'stroke' | 'fill'
    color: 'blue' | 'white'
    children: ReactNode
}

const Button = ( props:Props ) => {
    const {
        className = '',
        type,
        appearance,
        color,
        children,
    } = props

    return (
        <button
            className={`${styles.button} ${styles[`button--${appearance}`]} ${styles[`button--${color}`]} ${className}`}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button
