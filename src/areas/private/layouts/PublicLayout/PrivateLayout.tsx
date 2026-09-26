import { Outlet } from 'react-router-dom'
import Sidebar from '@/areas/private/components/Sidebar'
import styles from './PrivateLayout.module.scss'

const PrivateLayout = () => {
    return (
        <div className={styles.layout}>
            <Sidebar />

            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default PrivateLayout
