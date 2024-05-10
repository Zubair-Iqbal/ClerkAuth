import React from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const page = () => {
  return (
    <div className='flex h-screen w-full items=center justify=center'>
      <h1 className='text-5xl'>
        Home
      </h1>
      <Button>
        <Link href="/sign-in">
        Go to Dashboard
        </Link>       
      </Button>
    </div>
  )
}

export default page
