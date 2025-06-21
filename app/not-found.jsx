import Image from 'next/image'
import React from 'react'
import Button from './_components/Button'

const NotFound= () => {
  return (
    <div className='w-full h-[75vh] flex flex-col items-center justify-center'>
        <Image 
        src="/404.jpg"
        width={500}
        height={500}
        alt="Not Found"
        />
        <Button text="Back to Home" link="/" second={true}/>
    </div>
  )
}

export default NotFound