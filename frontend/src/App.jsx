import StickyCard from './components/StickyCard'
import DeveloperToolbox from './components/DeveloperToolbox'
import ConnectionForm from './components/ConnectionForm'
import Projects from './components/Projects'
import SmoothScroll from './components/SmoothScroll'
import "./App.css"

function App() {
  return (
    <SmoothScroll>
      <div className='bg-neutral-900 w-full min-w-screen min-h-screen poppins flex justify-center select-none'>
        {/* Main Layout Container */}
        <div className='w-full max-w-189 lg:max-w-285 items-center lg:items-start p-7.5 lg:p-10 bg-transparent h-fit flex flex-col lg:flex-row gap-[50px]'>
          
          <StickyCard />

          <div className='h-fit w-full flex flex-col gap-20 lg:gap-24'>
            {/* Reveal Wrapper for Toolbox */}
            <section className="reveal">
              <DeveloperToolbox />
            </section>

            {/* Projects already has internal sticky logic, but we can add reveal to title */}
            <section className="reveal">
              <Projects />
            </section>

            {/* Reveal Wrapper for Form */}
            <section className="reveal">
              <ConnectionForm />
            </section>
          </div>
        </div>
      </div>
    </SmoothScroll>
  )
}

export default App