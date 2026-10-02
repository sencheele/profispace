import styles from './Field.module.scss'

interface Props {
    className?: string
    label: string
    type?: 'text' | 'tel' | 'number' | 'email' | 'password' | 'url'
    placeholder: string
    required: boolean,
    textarea?: boolean
}

const Field = ( props: Props ) => {
    const {
        className = '',
        label,
        type = 'text',
        placeholder,
        required,
        textarea = false,
    } = props

    return (
        <label className={`${styles.field} ${className}`}>
            <span className={styles.field__label}>
                {label}
            </span>

            {
                textarea ? (
                    <textarea
                        placeholder={placeholder}
                        required={required}
                    ></textarea>
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        required={required}
                    />
                )
            }
        </label>
    )
}

export default Field
