import { SignUp } from '@clerk/nextjs'
import React from 'react'

const signup = () => {
  return (
    <div className='flex item-center justify-center w-full h-screen'>
      <SignUp/>
    </div>
  )
}

export default signup
