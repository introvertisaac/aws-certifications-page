import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Footer = () => {
  return (
    <div className='flex flex-col py-14'>
        <div className='flex flex-row'>
                <div><Image src={"/aws.svg"} width={160} height={130} className='py-5 mx-10' /></div>
                <div className='ml-32'>
                    <h3 className='font-semibold text-xl pb-5'>Site Map</h3>
                    <ul className='font-semibold'>
                        <li >Learning Library</li>
                        <li >Certification</li>
                        <li >Support</li>
                    </ul>
                </div>

                <div className='ml-20'>
                <h3 className='font-semibold text-xl pb-5'>Resources</h3>
                    <ul className='font-semibold'>
                        <li >Training Overview</li>
                        <li >Learning Paths</li>
                        <li >Exam Study Guides</li>
                    </ul>
                </div>
                <div className='ml-28'>
                <h3 className='font-semibold text-2xl pb-5'>Account</h3>
                <Button size="signin" variant="destructive" >SIGN IN</Button>

                </div>
        </div>

        <div className='flex flex-row justify-between -mb-20 py-10 text-xs mx-40'>
            <div>Legal | Privacy | Cookie preferences | Third-party license notices</div>
            <div>© 2023, Amazon Web Services, Inc. or its affiliates. All rights reserved.</div>
        </div>
        
    </div>
  )
}

export default Footer