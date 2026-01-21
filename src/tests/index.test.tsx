import { beforeEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import {
  RouterProvider,
  createRootRoute,
  createRouter,
} from '@tanstack/react-router'
import { App } from '@/App'
import { ThemeProvider } from '@/hooks/useTheme'
import '@/styles.css'

beforeEach(() => {
  const rootRoute = createRootRoute({
    component: () => (
      <ThemeProvider>
        <App />,
      </ThemeProvider>
    ),
  })
  const testRouter = createRouter({ routeTree: rootRoute })
  render(<RouterProvider router={testRouter} />)
})

describe('Homepage ', () => {
  it('should rendered my name correctly', async () => {
    const textElement = page.getByText('Chen Guanhua')
    await expect.element(textElement).toBeVisible()
  })
})
