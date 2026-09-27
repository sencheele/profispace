import PrivateLayout from '@/areas/private/layouts/PublicLayout'
import Profile from '@/areas/private/pages/Profile'
import ProfileEdit from '@/areas/private/pages/ProfileEdit'
import PublicLayout from '@/areas/public/layouts/PublicLayout'
import About from '@/areas/public/pages/About'
import Home from '@/areas/public/pages/Home'
import Projects from '@/areas/public/pages/Projects'
import { createBrowserRouter, Navigate } from 'react-router-dom'

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
                element: <Home />
            },
            {
                path: 'projects',
                element: <Projects />,
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
            }
            // {
            //     path: 'home',
            //     element: <Home />
            // },
            // {
            //     path: 'projects',
            //     element: <Projects />,
            // },
            // {
            //     path: 'about',
            //     element: <About />,
            // },
        ],
    },
])

export default router
