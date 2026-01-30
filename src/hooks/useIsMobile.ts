import { useEffect, useState } from 'react'

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const isMobileMediaQuery = window.matchMedia('(max-width: 768px)')
    // Set the value of the isMobile boolean on mount
    setIsMobile(isMobileMediaQuery.matches)
    const onChange = () => {
      setIsMobile(isMobileMediaQuery.matches)
    }

    isMobileMediaQuery.addEventListener('change', onChange)

    return () => {
      isMobileMediaQuery.removeEventListener('change', onChange)
    }
  }, [])

  return isMobile
}

export default useIsMobile
