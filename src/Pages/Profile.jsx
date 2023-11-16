import React from 'react'
import ProtectedPage from './ProtectedPage'

function Profile() {
  return (
    <ProtectedPage>
      Hi
    </ProtectedPage>
  )
}

export default Profile
