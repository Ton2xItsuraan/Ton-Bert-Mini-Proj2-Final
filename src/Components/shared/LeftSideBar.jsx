import React from 'react'
import { sidebarLinks } from '../../../constants/index'
import { Link, useLocation } from 'react-router-dom'
import { SignOutButton, SignedIn } from '@clerk/clerk-react'
import { useHistory } from 'react-router-use-history'

function LeftSideBar() {
  
  const location = useLocation()
  const history = useHistory()
  
 return (
        <div className='custom-scrollbar leftsidebar'>
     <div className='flex w-full flex-1 flex-col gap-6 px-6'>
       {sidebarLinks.map((link) => {
         const isActive = (location.pathname.includes(link.route) && link.route.length > 1) || location.pathname === link.route;



       return (
        <Link to={link.route} key={link.label} className={`leftsidebar_link ${isActive ? 'bg-primary-500' : ''}`}>

           <img src={link.imgURL} alt={link.label} width={24} height={24} />

           <p className='text-light-1 max-lg:hidden'>{link.label}</p>
         </Link>
       )})}
     </div>
     <div className='mt-10 px-6'>
     <SignedIn>
            <SignOutButton signOutCallback={() => history.push('/sign-in')}>
              <div className='flex cursor-pointer gap-4 p-4'>
                <img src="/assets/logout.svg" alt="logout" width={24} height={24} />
                <p className='text-light-2 max-lg:hidden'>Logout</p>
              </div>
            </SignOutButton>
            
        </SignedIn>
     </div>
   </div>
 )
}

export default LeftSideBar