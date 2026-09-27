import styles from './Field.module.scss'

interface Props {
    label: string
    type: 'text' | 'tel' | 'number' | 'email' | 'password' | 'url'
    placeholder: string
    required: boolean,
    className?: string
}

const Field = ( props: Props ) => {
    const {
        label,
        type,
        placeholder,
        required,
        className = '',
    } = props

    return (
        <label className={`${styles.field} ${className}`}>
            <span className={styles.field__label}>
                {label}
            </span>

            <input
                type={type}
                placeholder={placeholder}
                required={required}
            />
        </label>
    )
}

export default Field
