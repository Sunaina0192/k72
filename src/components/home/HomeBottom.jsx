import React from 'react'
import { Link } from 'react-router-dom'

function HomeBottom() {
  return (
    <>
    <div className='flex items-center justify-center'>
      <p className='ml-30'>K72 est une agence qui pense chaque action pour nourrir la marque. Demain, dans 5 mois et dans 5 ans. On cherche la friction qui crée l’étincelle pour générer de l’émotion. Pour assurer une relation honnête, on est sans filtre, on dit ce qui doit être dit, on fait ce qui doit être fait.</p>
       </div><br></br><br></br>
    <div className='font-[500] flex items-center justify-center gap-5'>
      <Link className='text-[3vw] leading-[4vw] border-2 mb-5 rounded-full pt-2 pb-2 pl-3 pr-3 uppercase hover:border-yellow-400 hover:text-yellow-400' to='/projects'>Projects</Link>
      <Link className='text-[3vw] leading-[4vw] border-2 mb-5 rounded-full pt-2 pb-2 pl-3 pr-3 uppercase hover:border-yellow-400 hover:text-yellow-400' to='/agence'>Agences</Link>
   
    </div>
    </>
  )
}

export default HomeBottom
