import TopBar from './components/TopBar'

function App() {
  return (
    <div className="w-full text-center">
      <div className="fixed top-5 w-full px-5">
        <TopBar />
      </div>
      <h1 className="text-text-primary text-4xl lg:text-6xl font-mono">
        Chen Guanhua
      </h1>
    </div>
  )
}

export { App }
