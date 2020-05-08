import React from 'react'

import moveis from './../pages/assets/moveis.jpg'

export default function Projetos() {

  const projetos = [1,2,3,4,5,6]

  return (
    <div>
        <h2 className='px-8 py-2 text-2xl font-bold'>Projetos de moveis planejados</h2>
        <div className='flex flex-wrap'>
          { projetos.map (() => {
            return (
              <div className='max-w-sm'>
                <div className='m-2 rounded shadow-lg'>
                  <img src={moveis} alt="moveis"/>
                  <div className='px-6 py-4'>
                    <p className='font-bold text-xl mb-2'>Projeto</p>
                    <p>Descricao</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
    </div>
  )
}
