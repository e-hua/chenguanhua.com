import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from 'react'
import DevError from '@/Errors/DevError'

type ThemeType = 'dark' | 'light'

const ThemeContext = createContext<ThemeType | undefined>(undefined)
const ThemeSetterContext = createContext<
  ((theme: ThemeType) => void) | undefined
>(undefined)

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(
    () => (Cookies.get('theme') as ThemeType | undefined) || 'dark',
  )

  useEffect(() => {
    Cookies.set('theme', theme)

    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeSetterContext value={setTheme}>
      <ThemeContext value={theme}>{children}</ThemeContext>
    </ThemeSetterContext>
  )
}

function useThemeSetter() {
  const themeSetter = useContext(ThemeSetterContext)

  if (!themeSetter) {
    throw new DevError(
      "Cannot use 'useThemeSetter' outside of a context provider",
    )
  }

  return themeSetter
}

function useTheme() {
  const theme = useContext(ThemeContext)

  if (!theme) {
    throw new DevError("Cannot use 'useTheme' outside of a context provider")
  }

  return theme
}

export { ThemeProvider }
export { useThemeSetter, useTheme }
