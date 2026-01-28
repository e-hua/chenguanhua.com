import { HeadContent, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import SideBar from '@/components/SideBar'

function RootComponent() {
  return (
    <div className="min-h-screen w-full">
      <header>
        <HeadContent />
      </header>
      <div className="fixed inset-0 bg-bg-primary" />
      {/*
        Use a relative wrapper around the <Outlet/> component.
        Since they're both positioned elements, 
        the browser uses the "Painter's Algorithm" (DOM Order) 
        to determine which one is on top 

        In this case, the container of Outlet comes last, 
        hence it's on the top
         */}
      <main className="relative grid grid-cols-[auto_1fr]">
        <SideBar />
        <div className="h-screen overflow-y-scroll">
          <Outlet />
        </div>
      </main>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </div>
  )
}

export const Route = createRootRoute({
  component: RootComponent,
})
