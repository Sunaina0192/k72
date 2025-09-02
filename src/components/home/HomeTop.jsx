import React from 'react'
import Vedio from './Vedio'


function HomeTop() {
  return (
    <div className=' font-[500] mt-70 lg:mt-0 text-center'>
      <div className='lg:text-[6vw] text-[12vw] uppercase  justify-center flex items-center  lg:leading-[9vh] leading-[12vh]'>L'étincelle</div>
      <div className='lg:text-[6vw] text-[12vw] uppercase justify-center flex items-center lg:leading-[9vh] leading-[12vh]'>qui
      <div className='h-[7vw]  w-[16vw] mt-5 mb-3 rounded-full overflow-hidden'><Vedio /></div>génère</div>
      <div className='lg:text-[6vw] text-[12vw] uppercase lg:leading-[9vh] leading-[12vh]'>la créativité</div>
    </div>
  )
}

export default HomeTop
