import { Link } from '@tanstack/react-router'
import type { ClassValue } from 'clsx'
import type { TopBarSection } from '@/components/HomeSections/TopBarSection.type'
import { cn } from '@/lib/utils/cn'

function TopBarButton({
  children,
  className,
  border,
  onClick,
  hashId,
  active,
  route,
}: {
  children: React.ReactNode
  className?: ClassValue
  border?: boolean
  onClick?: () => void
  hashId?: string
  active?: boolean
  route?: string
}) {
  const isLink = !!hashId
  const newClassName = cn(
    `
                bg-transparent text-center 
                px-5 py-2 
                mix-blend-lighten 
                hover:text-text-primary hover:bg-surface
                rounded-full
                transition-color duration-300
              `,
    className,
    active ? 'text-text-primary bg-surface' : '',
  )

  return (
    <div className="flex flex-row items-center gap-2" onClick={onClick}>
      {isLink ? (
        <Link className={newClassName} to={route ?? '/'} hash={hashId}>
          {children}
        </Link>
      ) : (
        <button className={newClassName}> {children} </button>
      )}
      {border ? <div className="h-5 w-px bg-surface" /> : <></>}
    </div>
  )
}

// The hash and smooth scrolling between sections is provided by TanStack router
/* 
Inspired by the Toc component by TanStack.com 
https://github.com/TanStack/tanstack.com/blob/main/src/components/Toc.tsx
*/
function TopBar({
  visibleSectionIds,
  contentData,
}: {
  visibleSectionIds: Array<string>
  contentData: Array<TopBarSection>
}) {
  return (
    <header className="flex flex-row justify-end text-text-secondary">
      <nav
        className="
      flex flex-row 
      w-fit 
      bg-surface backdrop-blur-xs 
      backdrop-brightness-90
      rounded-full overflow-hidden 
      p-1 gap-2"
      >
        {contentData.map((section, idx) => {
          return (
            <TopBarButton
              key={idx}
              border={idx !== contentData.length - 1}
              hashId={section.id}
              route={section.route}
              active={visibleSectionIds.includes(section.id)}
            >
              {section.title}
            </TopBarButton>
          )
        })}
      </nav>
    </header>
  )
}

export default TopBar
