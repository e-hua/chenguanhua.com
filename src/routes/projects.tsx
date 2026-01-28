import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full h-full text-text-primary text-center">
      <h1 className="font-sans font-semibold text-2xl md:text-3xl">
        Coming soon!
      </h1>
    </div>
  )
}
