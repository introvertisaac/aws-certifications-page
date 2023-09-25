import Image from 'next/image'
import Topbar from './components/Topbar'

import Main from './components/Home'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <div>
      {/* <Navbar/> */}
    <Topbar />
    <Main/>
    <Footer/>
  
    </div>
  )
}
