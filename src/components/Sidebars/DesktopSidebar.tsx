import { Link, useLocation } from '@tanstack/react-router'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Moon, PanelLeft, Sun } from 'lucide-react'
import type { SidebarBlock } from '@/components/Sidebars/Sidebar'
import { cn } from '@/lib/utils/cn'
import { useTheme, useThemeSetter } from '@/hooks/useTheme'
import { useIsOpen, useSetIsOpen } from '@/hooks/useSidebarIsOpen'

function DesktopSidebar({ contentData }: { contentData: Array<SidebarBlock> }) {
  const [hoveredBlockPath, setHoveredBlockPath] = useState<string | undefined>(
    undefined,
  )
  const sidebarIsOpen = useIsOpen()

  return (
    <div
      className={cn(
        `
    bg-sidebar-background
    h-full 
    border-r border-sidebar-border 
    flex flex-col 
    justify-between
    items-center
    pt-5
    pb-20
    relative
    transition-all
    duration-200
    `,
        sidebarIsOpen ? 'w-30' : 'w-15',
      )}
      onMouseLeave={() => setHoveredBlockPath(undefined)}
    >
      <div className="flex flex-col gap-10 w-full">
        <SidebarToggle />

        <div className="w-full">
          {contentData.map((block) => {
            return (
              <DesktopSideBarBlock
                block={block}
                hoveredBlockPath={hoveredBlockPath}
                setHoveredBlockPath={setHoveredBlockPath}
                key={block.path}
                sidebarIsOpen={sidebarIsOpen}
              />
            )
          })}
        </div>
      </div>

      <LightSwitch
        hoveredBlockPath={hoveredBlockPath}
        setHoveredBlockPath={setHoveredBlockPath}
        sidebarIsOpen={sidebarIsOpen}
      />
    </div>
  )
}

function SidebarToggle({ className }: { className?: string }) {
  const sidebarIsOpen = useIsOpen()
  const setSidebarIsOpen = useSetIsOpen()

  return (
    <div
      className={cn(
        className,
        sidebarIsOpen
          ? 'flex flex-row justify-end pe-4'
          : 'flex justify-center items-center',
      )}
    >
      <PanelLeft
        size={22}
        className="text-text-secondary hover:text-text-primary"
        onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
      />
    </div>
  )
}

function DesktopSideBarBlock({
  block,
  hoveredBlockPath,
  setHoveredBlockPath,
  sidebarIsOpen,
}: {
  block: SidebarBlock
  hoveredBlockPath: string | undefined
  setHoveredBlockPath: (currPath: string) => void
  sidebarIsOpen: boolean
}) {
  const location = useLocation()
  const currPath = location.pathname

  return (
    <Link
      className={cn(
        'text-text-primary text-center font-semibold relative block',
        currPath === block.path ? 'text-text-primary' : 'text-text-secondary',
        'hover:text-text-primary',
        'transition-colors duration-300',
        'flex flex-row justify-center items-center',
        sidebarIsOpen ? 'px-2 py-5' : 'p-2',
      )}
      to={block.path}
      onPointerEnter={() => setHoveredBlockPath(block.path)}
      onFocus={() => setHoveredBlockPath(block.path)}
    >
      {sidebarIsOpen ? <p>{block.name}</p> : block.icon}

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
}

function LightSwitch({
  hoveredBlockPath,
  setHoveredBlockPath,
  sidebarIsOpen,
}: {
  hoveredBlockPath: string | undefined
  setHoveredBlockPath: (currPath: string) => void
  sidebarIsOpen: boolean
}) {
  const theme = useTheme()
  const setTheme = useThemeSetter()

  return (
    <div
      className={cn(
        `
      w-full 
      text-text-secondary hover:text-text-primary 
      transition-all duration-300
      relative 
      flex flex-col 
      items-center`,
        sidebarIsOpen ? 'px-2 py-5' : 'p-2',
      )}
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
  )
}

export default DesktopSidebar
export { DesktopSideBarBlock, LightSwitch }
