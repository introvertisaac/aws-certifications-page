import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <nav className=' w-full  h-1/3 bg-white border '>

        <div className='flex '>
        <Image src={"/aws.svg"} width={160} height={130} className='py-5 mx-10' />
        
        <li className='flex sm:flex-col md:flex-row py-8 mx-5 text-sm text-gray-600 font-light  cursor-pointer'>
            <ul className='pr-3'>Learning Library</ul>
            <ul className='pr-3'>AWS Skill Builder</ul>
            <ul className='pr-3'>Certification</ul>
            <ul className='pr-3'>Support</ul>
            <ul className='pr-3'>Partner Training</ul>
           
        </li>
        <div className='py-5 font-semibold '><Button>Feedback</Button></div>
        <div className='py-5 pl-5 '><Input type="search" placeholder="search amazon" /></div>
        <li className='flex flex-row justify-end items-end py-8 mx-7 text-sm text-gray-600 font-light cursor-pointer'>
            <ul className='pr-3'>English</ul>
            <ul className='pr-3'>Sign in</ul>
            
           
        </li>
        </div>
       
    </nav>
  )
}

export default Topbar