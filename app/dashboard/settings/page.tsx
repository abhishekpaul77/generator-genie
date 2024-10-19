import { UserProfile } from '@clerk/nextjs'
import React from 'react'

const Settings = () => {
  return (
    <div className='flex items-center justify-center h-full mt-2'>
      <UserProfile routing='hash'/>
    </div>
  )
}

export default Settings