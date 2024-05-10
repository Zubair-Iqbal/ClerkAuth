import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signin = () => {
  return (
    <div className='flex item-center justify-center w-full h-screen'>
      <SignIn/>
    </div>
  )
}

export default signin
