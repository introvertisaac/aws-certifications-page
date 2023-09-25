import { Button } from '@/components/ui/button'
import React from 'react'
import Middlecard from './Middlecard'

const Main = () => {
  return (
    <div className='flex flex-col'>
    <div className='w-full min-w-full  h-2/3 py-20 bg-gradient-to-b from-amber-400 via-orange-300 to-amber-500'>
        <div className='flex flex-col justify-center items-center mx-96'>
        <h2 className='text-4xl  font-thin'>AWS Certification</h2>
       <div className='flex items-center justify-center text-center py-4'>
       <p className='te font-extralight'>
            AWS Certification helps learners build credibility and confidence by validating their cloud expertise 
            with an industry-recognized credential, and organizations identify skilled professionals to lead cloud initiatives using AWS.
           Learn more on how to prepare for your exams.
        </p>
        </div> 
        
        </div>
        <div className='flex items-center justify-center'>
        <Middlecard className=""/>
    </div>
    </div>
    
     
     </div>
  )
}

export default Main