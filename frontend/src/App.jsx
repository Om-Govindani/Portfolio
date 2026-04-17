import StickyCard from './components/StickyCard'
import DeveloperToolbox from './components/DeveloperToolbox'
import ConnectionForm from './components/ConnectionForm'
import Projects from './components/Projects'
import SmoothScroll from './components/SmoothScroll'
import "./App.css"
import Achievements from './components/Achievements'
import Intro from './components/Intro'
import Navbar from './components/Navbar'

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <div className='w-full max-w-screen min-w-screen min-h-screen poppins flex justify-center select-none mt-10'>
        <div className='w-full max-w-189 lg:max-w-285 p-7.5 lg:p-10 bg-transparent h-fit flex flex-col lg:flex-row gap-[25px]'> 
          <div className="flex-1 justify-center w-full">
            <StickyCard />
          </div>
          <div className='h-fit w-full flex flex-col gap-15 items-center'>

            <section id="home" className="reveal">
              <Intro />
            </section>

            
            <section id="toolbox" className="reveal">
              <DeveloperToolbox />
            </section>

            <section id="achievements" className="reveal">
              <Achievements />
            </section>

            
            <section id="projects" className="reveal">
              <Projects />
            </section>

            
            <section id="contact" className="reveal">
              <ConnectionForm />
            </section>
          </div>
        </div>
      </div>
    </SmoothScroll>
  )
}

export default App