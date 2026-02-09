import { useState } from 'react'
import StickyCard from './components/StickyCard'
import ConnectionForm from './components/ConnectionForm'


function App() {
  
  return (
    <div className='bg-neutral-900 w-full h-full min-w-screen min-h-screen poppins flex items-center justify-center select-none'>
      <div className='w-full max-w-189 lg:max-w-[1140px] items-center lg:items-start p-7.5 lg:p-10 bg-transparent h-fit flex flex-col lg:flex-row gap-[100px] lg:gap-[50px] '>
        <div className='h-fit flex flex-row-reverse'><StickyCard /></div>
        <div className='h-fit w-full flex flex-col gap-25 lg:gap-30'>
          <ConnectionForm />
        </div>
      </div>
    </div>
  )
}

export default App
