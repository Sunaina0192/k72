import React from 'react'
import Vedio from '../components/home/Vedio';
import HomeTop from '../components/home/HomeTop'
import HomeBottom from '../components/home/HomeBottom'
function Home() {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Vedio/>
      </div>
      <div className='h-screen w-screen relative flex flex-col justify-between'>
        <HomeTop/>
        <HomeBottom/>
      </div>
    </div>
  )
}

export default Home
