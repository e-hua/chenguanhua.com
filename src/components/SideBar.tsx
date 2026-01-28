import { Link, useLocation } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils/cn'
import { useTheme, useThemeSetter } from '@/hooks/useTheme'

type SideBarBlock = {
  path: string
  name: string
}

const SIDEBAR_CONTENT_DATA: Array<SideBarBlock> = [
  { path: '/', name: 'Homepage' },
  { path: '/projects', name: 'Projects' },
]

function SideBar() {
  const [hoveredBlockPath, setHoveredBlockPath] = useState<string | undefined>(
    undefined,
  )
  const location = useLocation()
  const currPath = location.pathname
  const theme = useTheme()
  const setTheme = useThemeSetter()

  return (
    <div
      className="
    w-30 h-full 
    border border-sidebar-border 
    flex flex-col 
    justify-between
    items-center
    py-20
    "
      onMouseLeave={() => setHoveredBlockPath(undefined)}
    >
      <div className="w-full">
        {SIDEBAR_CONTENT_DATA.map((block) => {
          return (
            <Link
              className={cn(
                'text-text-primary text-center font-semibold relative px-2 py-5 block',
                currPath === block.path
                  ? 'text-text-primary'
                  : 'text-text-secondary',
                'hover:text-text-primary',
                'transition-colors duration-300',
              )}
              to={block.path}
              key={block.path}
              onPointerEnter={() => setHoveredBlockPath(block.path)}
              onFocus={() => setHoveredBlockPath(block.path)}
            >
              <p>{block.name}</p>

              {hoveredBlockPath === block.path && (
                <motion.div
                  className="absolute inset-2 top-0 bottom-0 bg-sidebar-hovered rounded-md"
                  layoutId="nav-hovered-block"
                />
              )}

              {currPath === block.path && (
                <motion.div
                  className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-0.5 bg-text-primary"
                  layoutId="nav-selected-underline"
                />
              )}
            </Link>
          )
        })}
      </div>

      <div
        className="
        w-full 
        text-text-secondary hover:text-text-primary 
        transition-all duration-300
        px-2 py-5 
        relative 
        flex flex-col 
        items-center"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        onPointerEnter={() => setHoveredBlockPath('light-switch')}
        onFocus={() => setHoveredBlockPath('light-switch')}
      >
        <span className="block">
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </span>
        {hoveredBlockPath === 'light-switch' && (
          <motion.div
            className="absolute inset-2 top-0 bottom-0 bg-sidebar-hovered rounded-md"
            layoutId="nav-hovered-block"
          />
        )}
      </div>
    </div>
  )
}

export default SideBar
