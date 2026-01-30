import { createFileRoute } from '@tanstack/react-router'
import type { TopBarSection } from '@/components/HomeSections/TopBarSection.type'
import type { TechStackGroup } from '@/components/HomeSections/TechStackSection'
import TopBar from '@/components/TopBar'
import useVisibleSectionIds from '@/hooks/useVisibleSectionIds'
import StickySection from '@/components/ProjectsSection/StickySection'
import {
  AmazonWebServices,
  Docker,
  Electron,
  GitHubActions,
  Nodejs,
  PostgreSQL,
  React,
  SQLite,
  Spring,
  TailwindCSS,
  Terraform,
  Vite,
} from '@/components/icons/TechIcons'

export const Route = createFileRoute('/projects')({
  component: RouteComponent,
})

const TOPBAR_CONTENT_DATA_PROJECTS: Array<TopBarSection> = [
  { id: 'CloudWrap', title: 'CloudWrap', isRoot: true, route: '/projects' },
  { id: 'CourseCompass', title: 'CourseCompass', route: '/projects' },
]

const CLOUD_WRAP_TECH_STACK_GROUPS: Array<TechStackGroup> = [
  {
    category: 'Renderer(Frontend)',
    span: '',
    icons: [
      { name: 'React', icon: React },
      { name: 'Tailwind CSS', icon: TailwindCSS },
      { name: 'Vite', icon: Vite },
    ],
  },
  {
    category: 'Main Process(Backend)',
    span: '',
    icons: [
      { name: 'Electron', icon: Electron },
      { name: 'Node.js', icon: Nodejs },
      { name: 'SQLite', icon: SQLite },
    ],
  },
  {
    category: 'Cloud & DevOps',
    span: '',
    icons: [
      { name: 'AWS', icon: AmazonWebServices },
      { name: 'OpenTofu/Terraform', icon: Terraform },
      { name: 'Docker', icon: Docker },
    ],
  },
]

const COURSE_COMPASS_TECH_STACK_GROUPS: Array<TechStackGroup> = [
  {
    category: 'Frontend',
    span: '',
    icons: [
      { name: 'React', icon: React },
      { name: 'Tailwind CSS', icon: TailwindCSS },
      { name: 'Vite', icon: Vite },
    ],
  },
  {
    category: 'Backend',
    span: '',
    icons: [
      { name: 'Spring Boot', icon: Spring },
      { name: 'PostgreSQL', icon: PostgreSQL },
    ],
  },
  {
    category: 'DevOps',
    span: '',
    icons: [
      { name: 'Docker', icon: Docker },
      { name: 'GitHub Actions', icon: GitHubActions },
    ],
  },
]

function RouteComponent() {
  const visibleSectionIds = useVisibleSectionIds(TOPBAR_CONTENT_DATA_PROJECTS)

  return (
    <div className="w-full text-text-primary text-center">
      <div className="fixed top-5 right-5 z-10">
        <TopBar
          visibleSectionIds={visibleSectionIds}
          contentData={TOPBAR_CONTENT_DATA_PROJECTS}
        />
      </div>

      <div className="relative pt-25 pl-5">
        <StickySection
          id="CloudWrap"
          title="CloudWrap"
          imagePaths={[
            '/projects/CloudWrap-Onboarding.png',
            '/projects/CloudWrap-Credentials.png',
            '/projects/CloudWrap-Initing.png',
            '/projects/CloudWrap-Deploys.png',
            '/projects/CloudWrap-Deploying.png',
            '/projects/CloudWrap-Deployed.png',
            '/projects/CloudWrap-Projects.png',
            '/projects/CloudWrap-Bills.png',
          ]}
          techStackGroups={CLOUD_WRAP_TECH_STACK_GROUPS}
        >
          {
            <h2 className="font-sans text-text-secondary">
              A{' '}
              <code className="font-mono text-accent-secondary">
                desktop application
              </code>{' '}
              for deploying and managing{' '}
              <span className="font-mono text-accent-primary">
                AWS-hosted projects
              </span>
              {'. '}
              It automates deployments by spawning{' '}
              <span className="font-mono text-accent-primary">
                OpenTofu
              </span>{' '}
              child processes, capturing real-time stdout/stderr streams, and
              piping them through Electron IPC to an{' '}
              <span className="font-mono text-accent-primary">
                Xterm.js terminal
              </span>
              {'. '}
              The platform supports dual-path deployments: provisioning piping
              them through Electron IPC to an{' '}
              <span className="font-mono text-accent-secondary">
                S3 and CloudFront for static SPAs
              </span>{' '}
              and architecting{' '}
              <span className="font-mono text-accent-secondary">
                ECS clusters for dockerized backend services
              </span>
              {'. '}
            </h2>
          }
        </StickySection>
        <StickySection
          id="CourseCompass"
          title="CourseCompass"
          imagePaths={[
            '/projects/CourseCompass-Chart.png',
            '/projects/CourseCompass-Courses.png',
            '/projects/CourseCompass-AddCourse.png',
            '/projects/CourseCompass-Comments.png',
            '/projects/CourseCompass-Dependency.png',
          ]}
          techStackGroups={COURSE_COMPASS_TECH_STACK_GROUPS}
        >
          {
            <h2 className="font-sans text-text-secondary">
              A full-stack{' '}
              <code className="font-mono text-accent-secondary">
                web application
              </code>{' '}
              for NUS academic planning. Beyond simple scheduling, it resolves
              complex{' '}
              <span className="font-mono text-accent-primary">
                course prerequisites
              </span>{' '}
              as DAGs and clear{' '}
              <span className="font-mono text-accent-primary">
                visualization of GPA
              </span>{' '}
              to give students a definitive roadmap, while providing a platform
              to{' '}
              <span className="font-mono text-accent-primary">
                {' '}
                leave comments and rate modules{' '}
              </span>
              .
            </h2>
          }
        </StickySection>
      </div>
    </div>
  )
}
