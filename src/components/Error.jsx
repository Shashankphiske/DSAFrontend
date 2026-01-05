import React from 'react'

const Error = () => {
  return (
    <div className='w-screen h-screen bg-black'>
        <div className=' w-full h-full flex flex-col items-center justify-center gap-10'>
          <p className='text-[7vw] text-white font-bold'>404</p>
          <p className='text-[2vw] text-white'>Looks like you are lost.</p>
        </div>
    </div>
  )
}

export default Error
