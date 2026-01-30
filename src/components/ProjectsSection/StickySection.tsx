// Inspired by https://motion.dev/tutorials/js-scroll-pinning
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import type { SectionProps } from '@/components/HomeSections/Section'
import type { TechStackGroup } from '@/components/HomeSections/TechStackSection'
import { TechStackTile } from '@/components/HomeSections/TechStackSection'
import useIsMobile from '@/hooks/useIsMobile'
import { cn } from '@/lib/utils/cn'

type StickySectionProps = SectionProps & {
  imagePaths: Array<string>
  techStackGroups: Array<TechStackGroup>
}

function TechStackRow({ techStackGroup }: { techStackGroup: TechStackGroup }) {
  return (
    <div className="w-full flex flex-row gap-5 justify-start items-center">
      <h3 className="font-mono text-text-secondary text-sm min-w-50">
        {techStackGroup.category}
      </h3>
      <div className="flex flex-row gap-2">
        {techStackGroup.icons.map((icon, idx) => {
          return (
            <TechStackTile {...icon} key={idx} iconClassName="w-10 md:w-10" />
          )
        })}
      </div>
    </div>
  )
}

function StickySection({
  id,
  title,
  children,
  imagePaths,
  techStackGroups,
}: StickySectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  const isMobile = useIsMobile()

  const totalPercent = -((imagePaths.length - 1) / imagePaths.length) * 100
  const offset = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', `${totalPercent}%`],
  )

  return (
    /**
     * Giving extra height to the section tag
     * So that the users can scroll through the images of the section
     */
    <section
      className="relative"
      style={{ height: `${imagePaths.length * 100}vh` }}
      ref={sectionRef}
      id={id}
    >
      {/**
       * The sticky container with only h-screen who's on the top of the section
       * Showing both the images and the descriptions
       *
       * Use the sticky attribute to keep the container in the screen
       * When the section tag is in view
       *
       * (
       * The sticky positioning means the element stays in place
       * relative to the viewport
       * as long as you're scrolling within the section container
       * )
       */}
      <div className="sticky top-0 h-screen overflow-hidden w-full flex flex-col">
        {/**
         * The title and descriptions
         */}
        <h1 className="font-sans font-semibold text-2xl text-left md:text-3xl">
          {title}
        </h1>
        <div
          className="
        flex-1 flex flex-col 
        items-center justify-center 
        border-b border-sidebar-border 
        md:flex-row 
        gap-2"
        >
          <div className="flex-1">{children}</div>
          <div className="flex-1 flex flex-col items-center">
            {techStackGroups.map((group, idx) => (
              <div className="md:w-100" key={idx}>
                <TechStackRow techStackGroup={group} />
              </div>
            ))}
          </div>
        </div>

        {/**
         * The motion div to animate the scrolling of images
         */}
        <div className="flex-2 md:h-full relative overflow-hidden w-full @container flex md:flex-col items-center">
          <motion.div
            className="flex flex-row w-max h-max md:w-auto md:flex-col"
            style={isMobile ? { x: offset } : { y: offset }}
          >
            {imagePaths.map((path, idx) => {
              return (
                <div
                  key={idx}
                  className={cn(
                    isMobile ? 'w-[100cqw]' : 'w-full h-screen',
                    'shrink-0 flex flex-col justify-start items-center',
                  )}
                >
                  <img
                    src={path}
                    alt={path}
                    className="h-5/6 w-5/6 object-contain max-h-100"
                  />
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StickySection
