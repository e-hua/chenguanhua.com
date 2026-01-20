import type { TopBarSection } from '@/components/HomeSections/TopBarSection.type'
import useVisibleSectionIds from '@/hooks/useVisibleSectionIds'
import Section from '@/components/HomeSections/Section'
import TopBar from '@/components/TopBar'
import HeroSection from '@/components/HomeSections/HeroSection'

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
        <HeroSection />
        <Section id="stack" title="My tech stack"></Section>
        <Section id="links" title="Links"></Section>
      </div>
    </div>
  )
}

export { App }
export { TOPBAR_CONTENT_DATA }
