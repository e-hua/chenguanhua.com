import { FolderClosed, House } from 'lucide-react'
import type { JSX } from 'react'
import useIsMobile from '@/hooks/useIsMobile'
import DesktopSidebar from '@/components/Sidebars/DesktopSidebar'
import MobileSidebar from '@/components/Sidebars/MobileSidebar'

type SidebarBlock = {
  path: string
  name: string
  icon: JSX.Element
}

const SIDEBAR_CONTENT_DATA: Array<SidebarBlock> = [
  { path: '/', name: 'Homepage', icon: <House size={22} /> },
  { path: '/projects', name: 'Projects', icon: <FolderClosed size={22} /> },
]

function SideBar() {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return <DesktopSidebar contentData={SIDEBAR_CONTENT_DATA} />
  }

  return <MobileSidebar contentData={SIDEBAR_CONTENT_DATA} />
}

export default SideBar
export type { SidebarBlock }
