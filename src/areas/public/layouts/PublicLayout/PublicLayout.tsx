import { Outlet } from 'react-router-dom'
import Sidebar from '@/areas/public/components/Sidebar'
import styles from './PublicLayout.module.scss'

const PublicLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />

            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default PublicLayout
