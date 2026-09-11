import { NavLink } from 'react-router-dom'
import styles from './Sidebar.module.scss'
import { useState } from 'react'

const Sidebar = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false)

    const links = [
        {
            to: '/home',
            label: 'Главная',
        },
        {
            to: '/projects',
            label: 'Проекты',
        },
        {
            to: '/about',
            label: 'Обо мне',
        },
    ]

    const handleToggleSidebar = () => {
        setIsSidebarActive(prev => !prev)
    }

    return (
        <aside className={`${styles.sidebar} ${isSidebarActive ? 'is-active' : ''}`}>
            <a
                className={styles.sidebar__logo}
                href='/'
            >
                Sencheele
            </a>

            <nav className={styles.sidebar__nav}>
                {
                    links.map(link => (
                        <NavLink
                            className={({ isActive }) =>
                                `${styles.sidebar__link} ${isActive ? 'is-active' : ''}`}
                            to={link.to}
                            key={link.to}
                        >
                            {link.label}
                        </NavLink>
                    ))
                }
            </nav>

            <button
                className={styles.sidebar__toggle}
                type='button'
                onClick={handleToggleSidebar}
            ></button>
        </aside>
    )
}

export default Sidebar
