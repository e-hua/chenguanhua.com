type SectionProps = {
  id: string
  title: string
  children: React.ReactNode
}

function Section({ id, title, children }: SectionProps) {
  return (
    <div
      id={id}
      className="
      scroll-mt-12 text-text-primary text-left 
      flex flex-col 
      gap-5 p-5"
    >
      <h1 className="font-sans font-semibold text-2xl md:text-3xl">{title}</h1>
      {children}
    </div>
  )
}

export default Section
