import React from 'react'

const Navbar = () => {
  return (
    <div className='grid sm:grid-rows-6 md:grid-rows-4 lg:grid-rows-2'>
        
           <div  className='bg-red-200'> <a>SERVICES</a> </div> 
           <div className='bg-yellow-900'><a>GUESTS</a></div> 
           <div className='bg-green-200'><a>CREATIVES</a></div> 
           <div className='bg-purple-200'><a>HELP</a></div> 
           <div className='bg-blue-500'><a>HELP</a></div> 
            
            
            
        
    </div>
  )
}

export default Navbar