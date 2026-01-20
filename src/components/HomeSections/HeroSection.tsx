import Section from './Section'

function HeroSection() {
  return (
    <Section id="hero" title="About me">
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-10">
        <a
          href="https://github.com/e-hua"
          target="_blank"
          className="
          relative rounded-2xl overflow-hidden 
          grayscale hover:grayscale-0 
          hover:scale-102
          transition-all duration-300
          w-75 h-75 md:w-60 md:h-60 lg:w-120 lg:h-120
          "
        >
          <img
            src="https://github.com/e-hua.png"
            alt="My GitHub profile picture"
            className="
            w-full h-full
            opacity-90
            transition-all"
          />
          <div className="absolute inset-0 bg-surface backdrop-blur-[0.5px]" />
        </a>

        <div className="font-mono flex flex-col gap-8 text-left items-center">
          <div className="w-full">
            <span className="text-accent-primary inline">
              user@cgh:
              <span className="text-accent-secondary inline">~</span>
              <span className="text-text-secondary inline">$ </span>
              <span className="text-text-primary inline">whoami</span>
            </span>
            <h1 className="text-text-primary text-4xl md:text-6xl font-mono font-extrabold">
              <span className="text-text-secondary">{'>'}</span>
              Chen Guanhua
            </h1>
          </div>

          <div className="text-center">
            <h2 className="text-text-primary">NUS CS Y2 undergraudate</h2>

            <h2 className="text-text-secondary">
              also a [
              <h2 className="text-text-primary inline">
                Fullstack Developer, Cloud Enthusiast
              </h2>
              ]
            </h2>
          </div>

          <p className="text-text-secondary text-sm">
            // Really interested in managing infrastructures <br /> and building
            UI components
          </p>
        </div>
      </div>
    </Section>
  )
}

export default HeroSection
