import PrivateLayout from '@/areas/private/layouts/PublicLayout'
import Profile from '@/areas/private/pages/Profile'
import ProfileEdit from '@/areas/private/pages/ProfileEdit'
import PublicLayout from '@/areas/public/layouts/PublicLayout'
import About from '@/areas/public/pages/About'
import HomePublic from '@/areas/public/pages/Home'
import HomePrivate from '@/areas/private/pages/Home'
import HomeEdit from '@/areas/private/pages/HomeEdit'
import ProjectPage from '@/areas/public/pages/ProjectPage'
import Projects from '@/areas/public/pages/ProjectsPage'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import ProjectsPagePrivate from '@/areas/private/pages/ProjectsPage'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='home' replace />
            },
            {
                path: 'home',
                element: <HomePublic />
            },
            {
                path: 'projects',
                element: <Projects />,
            },
            {
                path: 'project',
                element: <ProjectPage />
            },
            {
                path: 'about',
                element: <About />,
            },
        ],
    },
    {
        path: '/private',
        element: <PrivateLayout />,
        children: [
            {
                index: true,
                element: <Navigate to='profile' replace />
            },
            {
                path: 'profile',
                element: <Profile />
            },
            {
                path: 'profile/edit',
                element: <ProfileEdit />
            },
            {
                path: 'home',
                element: <HomePrivate />
            },
            {
                path: 'home/edit',
                element: <HomeEdit />
            },
            {
                path: 'projects',
                element: <ProjectsPagePrivate />
            },
            // {
            //     path: 'about',
            //     element: <About />,
            // },
        ],
    },
])

export default router
