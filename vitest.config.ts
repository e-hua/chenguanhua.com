import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import { playwright } from '@vitest/browser-playwright'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    // 2 seconds per test
    testTimeout: 2000,
    browser: {
      provider: playwright(),
      // Activate your browser mode!
      enabled: true,
      // at least one instance is required
      instances: [{ browser: 'chromium' }],
      // No UI shown
      // Turns on the headless mode when the tests are runned on GitHub actions
      headless: !!process.env.CI,
      // trace: "retain-on-failure",
    },
  },
})
