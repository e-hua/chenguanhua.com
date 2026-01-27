import { createFileRoute } from '@tanstack/react-router'
import { App } from '@/App'

export const Route = createFileRoute('/')({
  // https://tanstack.com/start/latest/docs/framework/react/guide/seo#basic-meta-tags
  head: () => ({
    meta: [{ title: 'Chen Guanhua | Full Stack Developer | NUS CS' }],
  }),
  component: App,
})
