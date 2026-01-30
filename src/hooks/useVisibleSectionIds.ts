// Inspired by TanStack.com by its usage of IntersectionObserver
// https://github.com/TanStack/tanstack.com/blob/main/src/components/Doc.tsx#L188

import { useEffect, useRef, useState } from 'react'
import type { TopBarSection } from '@/components/HomeSections/TopBarSection.type'

function useVisibleSectionIds(sections: Array<TopBarSection>) {
  const headingElementsRef = useRef<Record<string, IntersectionObserverEntry>>(
    {},
  )
  const [activeIds, setActiveIds] = useState<Array<string>>([])

  useEffect(() => {
    const callback = (headingsList: Array<IntersectionObserverEntry>) => {
      // Notice that since the headingList is actually a queue
      // It's sorted from oldest to latest
      // Which means the event in the map is always the most recent one

      headingElementsRef.current = headingsList.reduce(
        (map, headingElement) => {
          map[headingElement.target.id] = headingElement
          return map
        },
        headingElementsRef.current,
      )

      const visibleHeadings: Array<IntersectionObserverEntry> = []

      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key]
        if (headingElement.isIntersecting) {
          visibleHeadings.push(headingElement)
        }
      })

      if (visibleHeadings.length > 0) {
        setActiveIds(visibleHeadings.map((h) => h.target.id))
      }
    }

    const observer = new IntersectionObserver(callback, {
      rootMargin: '0px',
      threshold: 0,
    })

    sections.map((section) => {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sections])

  return activeIds
}

export default useVisibleSectionIds
