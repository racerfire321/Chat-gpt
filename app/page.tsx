import React from 'react'
import { SunIcon, BoltIcon, ExclamationTriangleIcon } from '@heroicons/react/20/solid'
const Home = () => {
  return (
    <div className='text-white flex-col flex items-center justify-center h-screen'>
      <h1 className='text-5xl font-bold'>ChatGPT</h1>
      <div className='flex  space-x-2 text-center 4'>
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
            <SunIcon className='h-8 w-8'/>
            <h2>Examples</h2>
                  </div>
                  <div className='space-x-2 space-y-4'>
                    <p className='infotext'>"Explain something to me"</p>
                    <p className='infotext'>"What is the difference between dog and cats?"</p>

                    <p className='infotext'>What is sun?</p>
                  </div>
        </div>

      
      
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
            <BoltIcon className='h-8 w-8'/>
            <h2>Capability</h2>
                  </div>
                  <div className='space-x-2 space-y-4 '>
                    <p className='infotext'>"Messages are stored in firebase"</p>
                    <p className='infotext'>"Why does star shine so bright"</p>

                    <p className='infotext'>Hot Toast when chatgpt is thinking</p>
                  </div>
        </div>

      

      
        <div>
          <div className=' flex flex-col items-center justify-center mb-5'>
            <ExclamationTriangleIcon className='h-8 w-8'/>
            <h2>limitation</h2>
                  </div>
                  <div className='space-x-2 space-y-4'>
                    <p className='infotext'>May occasionally generate information limited to knowledge</p>
                    <p className='infotext'>Limited knowledge of world and event after 2021</p>

                    <p className='infotext'>May occasionally produce harmful instruction on biased content</p>
                  </div>
        
</div>
      </div>
    </div>
  )
}

export default Home