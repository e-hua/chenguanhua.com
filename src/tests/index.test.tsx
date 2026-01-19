import { beforeEach, describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { page } from 'vitest/browser'
import { App } from '@/App'

beforeEach(() => {
  render(<App />)
})

describe('Homepage ', () => {
  it('should rendered my name correctly', async () => {
    const textElement = page.getByText('Chen Guanhua')
    await expect.element(textElement).toBeVisible()
  })
})
