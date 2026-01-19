import { Moon, Sun } from 'lucide-react'
import type { ClassValue } from 'clsx'
import { useTheme, useThemeSetter } from '@/hooks/useTheme'
import { cn } from '@/lib/utils/cn'

function TopBarButton({
  children,
  className,
  border,
  onClick,
}: {
  children: React.ReactNode
  className?: ClassValue
  border?: boolean
  onClick?: () => void
}) {
  return (
    <div className="flex flex-row items-center gap-2" onClick={onClick}>
      <button
        className={cn(
          `
                bg-transparent text-center 
                px-5 py-2 
                mix-blend-lighten 
                hover:text-text-primary hover:bg-surface
                rounded-full
                transition-color duration-300
              `,
          className,
        )}
      >
        {children}
      </button>
      {border ? <div className="h-5 w-px bg-surface" /> : <></>}
    </div>
  )
}

function TopBar() {
  const sections = ['About me', 'Links', 'My tech stack']

  const theme = useTheme()
  const setTheme = useThemeSetter()

  return (
    <header className="flex flex-row justify-end text-text-secondary">
      <nav
        className="
      flex flex-row 
      w-fit 
      bg-surface backdrop-blur-xs 
      rounded-full overflow-hidden 
      p-1 gap-2"
      >
        {sections.map((section, idx) => {
          return (
            <TopBarButton key={idx} border>
              {section}
            </TopBarButton>
          )
        })}

        <TopBarButton
          className="p-2 hover:scale-105"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <span>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </span>
        </TopBarButton>
      </nav>
    </header>
  )
}

export default TopBar
