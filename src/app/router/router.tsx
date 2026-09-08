import PublicLayout from '@/areas/public/layouts/PublicLayout'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />
    },
])

export default router
