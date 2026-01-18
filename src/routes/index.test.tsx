import { beforeEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { App } from '.'

beforeEach(() => {
  render(<App />)
})

describe('Homepage ', () => {
  it('should be rendered correctly', async () => {
    const textElement = page.getByText('Learn TanStack')
    await expect.element(textElement).toBeVisible()
  })
})
