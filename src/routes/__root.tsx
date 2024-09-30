import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarLayout } from '../components/SidebarDemo'

export const Route = createRootRoute({
    // loader: () => {
    //     redirect({
    //         to: "/home",
    //         throw: true,
    //     })
    // },
    component: () => (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-800">
            {/* Sidebar layout is now a dedicated component */}
            <SidebarLayout />


            {/* Main content area */}

            <Outlet />
            <TanStackRouterDevtools />

        </div>
    ),
});


