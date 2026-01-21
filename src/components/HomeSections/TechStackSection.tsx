import 'devicon/devicon.min.css'
import {
  AmazonWebServices,
  C,
  CSSNew,
  Electron,
  Expressjs,
  HTML5,
  Java,
  JavaScript,
  Nodejs,
  PostgreSQL,
  Python,
  React,
  ReactQuery,
  SQLite,
  Spring,
  TailwindCSS,
  Terraform,
  TypeScript,
} from '../icons/TechIcons'
import Section from './Section'
import type { ClassValue } from 'clsx'
import type { JSX, SVGProps } from 'react'
import { cn } from '@/lib/utils/cn'
import { useTheme } from '@/hooks/useTheme'

type TechIcon = {
  name: string
  icon: (
    props: SVGProps<SVGSVGElement>,
    fill?: string | undefined,
  ) => JSX.Element
  hexColor: string
  pureText?: boolean
}

type TechStackGroup = {
  category: string
  span: ClassValue
  icons: Array<TechIcon>
}

const TECH_STACK_GROUPS: Array<TechStackGroup> = [
  {
    category: 'Languages',
    span: 'md:col-span-2 md:row-span-2',
    icons: [
      { name: 'TypeScript', icon: TypeScript, hexColor: '#3178C6' },
      { name: 'JavaScript', icon: JavaScript, hexColor: '#F7DF1E' },
      { name: 'HTML5', icon: HTML5, hexColor: '#E34F26' },
      { name: 'CSS3', icon: CSSNew, hexColor: '#1572B6' },
      { name: 'Java', icon: Java, hexColor: '#ED8B00' },
      { name: 'C', icon: C, hexColor: '#A8B9CC' },
      { name: 'Python', icon: Python, hexColor: '#3776AB' },
    ],
  },
  {
    category: 'Frontend',
    span: 'md:col-span-1 md:row-span-2',
    icons: [
      { name: 'React', icon: React, hexColor: '#61DAFB' },
      { name: 'Tailwind', icon: TailwindCSS, hexColor: '#06B6D4' },
      { name: 'React Query', icon: ReactQuery, hexColor: '#FF4154' },
    ],
  },
  {
    category: 'Backend',
    span: 'md:col-span-1 md:row-span-2',
    icons: [
      { name: 'Spring Boot', icon: Spring, hexColor: '#6DB33F' },
      { name: 'Node.js', icon: Nodejs, hexColor: '#339933' },
      {
        name: 'Express',
        icon: Expressjs,
        hexColor: '#000000',
        pureText: true,
      },
    ],
  },
  {
    category: 'Database',
    span: 'md:col-span-1 md:row-span-1',
    icons: [
      { name: 'SQLite', icon: SQLite, hexColor: '#003B57' },
      { name: 'PostgreSQL', icon: PostgreSQL, hexColor: '#4169E1' },
    ],
  },
  {
    category: 'Cloud',
    span: 'md:col-span-1 md:row-span-1',
    icons: [
      { name: 'Terraform(OpenTofu)', icon: Terraform, hexColor: '#FFFF00' },
      { name: 'AWS', icon: AmazonWebServices, hexColor: '#FF9900' },
    ],
  },
  {
    category: 'Desktop',
    span: 'md:col-span-1 md:row-span-1',
    icons: [{ name: 'Electron', icon: Electron, hexColor: '#47848F' }],
  },
]

function TechStackTile({ name, icon: Icon, pureText }: TechIcon) {
  const theme = useTheme()
  return (
    <div
      className="
    relative w-fit 
    rounded-xl 
    opacity-70 hover:opacity-100 hover:scale-105
    transition-all duration-300 
    group"
    >
      {pureText ? (
        <Icon
          className="
          w-15 h-15 md:w-20 md:h-20 text-text-primary  
          rounded-xl overflow-hidden "
          fill={theme === 'light' ? '#000000' : '#ffffff'}
        />
      ) : (
        <Icon
          className="
        w-15 h-15 md:w-20 md:h-20 text-text-primary
        rounded-xl overflow-hidden"
        />
      )}
      <h3
        className="
      bg-bg-primary 
      absolute top-0 left-1/2
      hidden group-hover:block 
      text-md text-text-secondary text-xs
      -translate-y-full -translate-x-1/2
      p-2 rounded-xl 
      border border-border-subtle
      "
      >
        {name}
      </h3>
    </div>
  )
}

function TechStackSection() {
  return (
    <Section id="stack" title="My tech stack">
      <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 gap-5 p-10">
        {TECH_STACK_GROUPS.map((group) => {
          return (
            <div
              key={group.category}
              className={cn(
                'flex flex-col',
                group.span,
                'justify-center',
                'bg-bg-secondary rounded-xl',
                'backdrop-blur-2xl',
                'p-3',
              )}
            >
              <h2 className="text-text-secondary">{group.category}</h2>
              <div className="flex flex-row flex-wrap gap-5">
                {group.icons.map((icon, idx) => {
                  return (
                    <TechStackTile
                      key={idx}
                      name={icon.name}
                      icon={icon.icon}
                      hexColor={icon.hexColor}
                      pureText={icon.pureText}
                    />
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default TechStackSection
