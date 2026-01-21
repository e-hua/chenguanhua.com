import Section from './Section'
import type { JSX, SVGProps } from 'react'
import { GitHub, Gmail, LinkedIn } from '@/components/icons/TechIcons'
import { useTheme } from '@/hooks/useTheme'

type LinkData = {
  name: string
  href: string
  color?: string
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element
}

const LINK_DATA_SET: Array<LinkData> = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/guanhua-chen-089319325/',
    color: '#0077B5',
    icon: LinkedIn,
  },
  {
    name: 'GitHub',
    href: 'https://www.github.com/e-hua',
    icon: GitHub,
  },
  {
    name: 'email',
    href: 'mailto:e1481829@u.nus.edu',
    color: '#EA4335',
    icon: Gmail,
  },
]

function LinkIcon({ linkData }: { linkData: LinkData }) {
  const theme = useTheme()
  return (
    <a
      className="
        bg-(--brand-color)/5 hover:bg-(--brand-color)/10
        dark:bg-(--brand-color)/15 hover:dark:bg-(--brand-color)/20
        hover:scale-105
        transition-all duration-300
        text-text-primary 
        p-3 rounded-full overflow-hidden"
      href={linkData.href}
      target="_blank"
      style={
        {
          '--brand-color':
            linkData.color ?? (theme === 'dark' ? '#ffffff' : '#000000'),
        } as React.CSSProperties
      }
    >
      <linkData.icon className="w-8" />
    </a>
  )
}

function LinksSection() {
  return (
    <Section id="links" title="Links">
      <div className="flex flex-row gap-5">
        {LINK_DATA_SET.map((linkData) => {
          return <LinkIcon linkData={linkData} key={linkData.name} />
        })}
      </div>
    </Section>
  )
}

export default LinksSection
