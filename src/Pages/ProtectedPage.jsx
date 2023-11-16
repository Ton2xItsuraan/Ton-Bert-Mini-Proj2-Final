import React from 'react';
import TopBar from '../Components/shared/TopBar';
import LeftSideBar from '../Components/shared/LeftSideBar';
import RightSideBar from '../Components/shared/RightSideBar';
import BottomBar from '../Components/shared/BottomBar';

function ProtectedPage(props) {
  return (
    <div lang='en'>
      <div>
        <TopBar />
        <div className='flex flex-row'>
          <LeftSideBar />
          <div className='main-container'>
            <div className='w-full max-w-4xl'>{props.children}</div>
          </div>
          <RightSideBar />
        </div>
        <BottomBar />
      </div>
    </div>
  );
}

export default ProtectedPage;
