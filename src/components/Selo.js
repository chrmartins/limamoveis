import React from 'react'

import selo from './../pages/assets/selo.png'

export default function Selo() {

    const selos = [1,2,3,4]

    return (
      <div className='flex flex-col items-center sm:flex-row justify-around'>
        {selos.map(() => {
          return <img className='my-4' src={selo} alt='selo' />
        })}
      </div>
    )
  
}
