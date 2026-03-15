import { useState } from 'react'
import { createPortal } from 'react-dom'
import { TextAlignCenter, X } from 'lucide-react'
import { DesktopSideBarBlock, LightSwitch } from './DesktopSidebar'
import type { SidebarBlock } from './Sidebar'
import Modal from '@/components/ui/Modal'

function MobileSidebar({ contentData }: { contentData: Array<SidebarBlock> }) {
  const [isClosed, setIsClosed] = useState(true)

  return (
    <>
      {createPortal(<SidebarToggle setIsClosed={setIsClosed} />, document.body)}
      <Modal isClosed={isClosed} setIsClosed={setIsClosed}>
        <SidebarPopup contentData={contentData} setIsClosed={setIsClosed} />
      </Modal>
    </>
  )
}

function SidebarToggle({
  setIsClosed,
}: {
  setIsClosed: (isClosed: boolean) => void
}) {
  return (
    <div
      className="
      text-text-primary fixed top-5 left-5 p-2 
      bg-sidebar-background
      border-sidebar-border border
      rounded-md
      hover:bg-bg-secondary
      transition-all duration-200
      "
      onClick={() => setIsClosed(false)}
    >
      <TextAlignCenter size={22} />
    </div>
  )
}

function SidebarPopup({
  contentData,
  setIsClosed,
}: {
  contentData: Array<SidebarBlock>
  setIsClosed: (isClosed: boolean) => void
}) {
  const [hoveredBlockPath, setHoveredBlockPath] = useState<string | undefined>(
    undefined,
  )

  return (
    <div
      className={`
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
    w-30
    `}
      onMouseLeave={() => setHoveredBlockPath(undefined)}
    >
      <div className="flex flex-col gap-10 w-full">
        <CloseSidebarButton setIsClosed={setIsClosed} />
        <div className="w-full">
          {contentData.map((block) => {
            return (
              <DesktopSideBarBlock
                block={block}
                hoveredBlockPath={hoveredBlockPath}
                setHoveredBlockPath={setHoveredBlockPath}
                key={block.path}
                sidebarIsOpen
              />
            )
          })}
        </div>
      </div>

      <LightSwitch
        hoveredBlockPath={hoveredBlockPath}
        setHoveredBlockPath={setHoveredBlockPath}
        sidebarIsOpen
      />
    </div>
  )
}

function CloseSidebarButton({
  setIsClosed,
}: {
  setIsClosed: (isClosed: boolean) => void
}) {
  return (
    <div className="flex flex-row justify-end pe-4">
      <X
        size={22}
        className="text-text-secondary hover:text-text-primary"
        onClick={() => setIsClosed(true)}
      />
    </div>
  )
}

export default MobileSidebar
