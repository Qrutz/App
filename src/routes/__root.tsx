import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { SidebarLayout } from '../components/SidebarDemo'

export const Route = createRootRoute({
    component: () => (
        <div className="flex h-screen">
            {/* Sidebar layout is now a dedicated component */}
            <SidebarLayout />

            {/* Main content area */}

            <Outlet />
            <TanStackRouterDevtools />

        </div>
    ),
});


