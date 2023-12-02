import React from 'react'
import ProtectedPage from './ProtectedPage'
import ThreadForm from './ThreadForm'

const CreateThread = () => {
  return (
    <ProtectedPage>
     <div>
        <ThreadForm/>
     </div>
    </ProtectedPage>
  )
}

export default CreateThread
