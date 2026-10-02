import styles from './HomeEdit.module.scss'
import Editor from './sections/Editor'

const HomeEdit = () => {
    return (
        <div className={styles['home-edit']}>
            <Editor />
        </div>
    )
}

export default HomeEdit
