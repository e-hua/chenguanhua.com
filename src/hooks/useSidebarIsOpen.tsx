import Cookies from 'js-cookie'
import { createContext, useContext, useState } from 'react'
import DevError from '@/Errors/DevError'

type SidebarStatus = {
  isOpen: boolean
  setIsOpen: (targetState: boolean) => void
}

const SidebarStatusContext = createContext<SidebarStatus | undefined>(undefined)

function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(() => {
    const storedValue = Cookies.get('sidebar')
    if (storedValue === undefined) {
      return true
    }

    return storedValue === 'true'
  })

  return (
    <SidebarStatusContext.Provider
      value={{
        isOpen,
        setIsOpen: (targetState) => {
          Cookies.set('sidebar', String(targetState))
          setIsOpen(targetState)
        },
      }}
    >
      {children}
    </SidebarStatusContext.Provider>
  )
}

function useIsOpen() {
  const sidebarStatus = useContext(SidebarStatusContext)
  if (sidebarStatus === undefined) {
    throw new DevError("Cannot use 'useIsOpen' outside of its context provider")
  }

  return sidebarStatus.isOpen
}

function useSetIsOpen() {
  const sidebarStatus = useContext(SidebarStatusContext)
  if (sidebarStatus === undefined) {
    throw new DevError(
      "Cannot use 'useSetIsOpen' outside of its context provider",
    )
  }

  return sidebarStatus.setIsOpen
}

export { useIsOpen, useSetIsOpen, SidebarProvider }
