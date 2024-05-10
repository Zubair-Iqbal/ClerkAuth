import { UserButton } from '@clerk/nextjs'
import { UserResource } from '@clerk/types'

interface HeaderProps {
    user: UserResource | null | undefined
}

export const Header = ( {user}: HeaderProps) => {
  return (
    <div className='bg-slate-300 h-[300px]'>
        <h1>
            <UserButton/>
            {user?.username}
        </h1>
    </div>
  )
}

export default Header