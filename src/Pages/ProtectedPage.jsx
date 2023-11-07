import React from 'react'
import TopBar from '../Components/shared/TopBar'
import LeftSideBar from '../Components/shared/LeftSideBar'
import RightSideBar from '../Components/shared/RightSideBar'
import BottomBar from '../Components/shared/BottomBar'
import Home from './Home'

function ProtectedPage() {
  return (
    <div lang='en'>
        <div>
            <TopBar/>
            <div>
                <LeftSideBar/>
                <div className='main-container'>
                    <div className='w-full max-w-4xl'>
                        <Home/>
                        
                    </div>
                </div>
                <RightSideBar/>
            </div>
            <BottomBar/>
        </div>
    </div>
  )
}

export default ProtectedPage