import type { TopBarSection } from '@/components/HomeSections/TopBarSection.type'
import useVisibleSectionIds from '@/hooks/useVisibleSectionIds'
import TopBar from '@/components/TopBar'
import HeroSection from '@/components/HomeSections/HeroSection'
import TechStackSection from '@/components/HomeSections/TechStackSection'
import LinksSection from '@/components/HomeSections/LinksSection'

const TOPBAR_CONTENT_DATA: Array<TopBarSection> = [
  { id: 'hero', title: 'About me', isRoot: true },
  { id: 'stack', title: 'My tech stack' },
  { id: 'links', title: 'Links' },
]

function App() {
  const visibleSectionIds = useVisibleSectionIds(TOPBAR_CONTENT_DATA)

  return (
    <div className="w-full text-center relative">
      <div className="pt-20 relative flex flex-col gap-20">
        <HeroSection />
        <TechStackSection />
        <LinksSection />
      </div>
      {/*
     Let the topbar show up last in the DOM 
     So it gets to be at the top of the stacking context
     */}
      <div className="fixed top-5 w-full px-5">
        <TopBar visibleSectionIds={visibleSectionIds} />
      </div>
    </div>
  )
}

export { App }
export { TOPBAR_CONTENT_DATA }
