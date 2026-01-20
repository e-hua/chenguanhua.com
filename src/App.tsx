import useVisibleSectionIds from './hooks/useVisibleSectionIds'
import Section from './components/HomeSections/Section'
import type { TopBarSection } from '@/components/HomeSections/TopBarSection.type'
import TopBar from '@/components/TopBar'

const TOPBAR_CONTENT_DATA: Array<TopBarSection> = [
  { id: 'hero', title: 'About me', isRoot: true },
  { id: 'stack', title: 'My tech stack' },
  { id: 'links', title: 'Links' },
]

function App() {
  const visibleSectionIds = useVisibleSectionIds(TOPBAR_CONTENT_DATA)

  return (
    <div className="w-full text-center">
      <div className="fixed top-5 w-full px-5">
        <TopBar visibleSectionIds={visibleSectionIds} />
      </div>
      <div className="pt-20">
        <Section id="hero" title="About me">
          <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
            <a href="https://github.com/e-hua">
              <img
                src="https://github.com/e-hua.png"
                alt="My GitHub profile picture"
                className="w-75 h-75 md:w-120 md:h-120"
              />
            </a>

            <div className="font-mono flex flex-col gap-8 text-left items-center">
              <div className="w-full">
                <span className="text-accent-primary inline">
                  user@cgh:
                  <span className="text-accent-secondary inline">~</span>
                  <span className="text-text-secondary inline">$ </span>
                  <span className="text-text-primary inline">whoami</span>
                </span>
                <h1 className="text-text-primary text-4xl md:text-6xl font-mono font-extrabold">
                  <span className="text-text-secondary">{'>'}</span>
                  Chen Guanhua
                </h1>
              </div>

              <div className="text-center">
                <h2 className="text-text-primary">NUS CS Y2 undergraudate</h2>

                <h2 className="text-text-secondary">
                  also a [
                  <h2 className="text-text-primary inline">
                    Fullstack Developer, Cloud Enthusiast
                  </h2>
                  ]
                </h2>
              </div>

              <p className="text-text-secondary text-sm">
                // Really interested in managing infrastructures <br /> and
                building UI components
              </p>
            </div>
          </div>
        </Section>
        <Section id="stack" title="My tech stack"></Section>
        <Section id="links" title="Links"></Section>
      </div>
    </div>
  )
}

export { App }
export { TOPBAR_CONTENT_DATA }
