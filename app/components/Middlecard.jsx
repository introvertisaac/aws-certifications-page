import React from 'react'
import { Button } from '@/components/ui/button'

const Middlecard = () => {
  return (
    <div className='flex flex-row border-2'>
      <div className='bg-gray-900 text-white py-10 leading-10 px-20'>
        <ul>
            <li>Schedule and manage exams</li>
            <li>View your certification history</li>
            <li>Access your digital badges</li>
            <li>View your certification benefits</li>
        </ul>
      </div>
      <div className='bg-white text-white py-10 leading-8  border-2'>
        <div className='flex items-center text-center justify-center -mx-40 text-black font-semibold'>
            <p className='w-1/3'>Sign In to your AWS Training and
         Certification account to explore AWS Certifications.</p>
         </div>

        <div className='flex items-center text-center justify-center'><Button variant="signin2" size="signin">SIGN IN</Button></div>
      </div>
    </div>
  )
}

export default Middlecard