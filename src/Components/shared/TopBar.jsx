import { OrganizationSwitcher, SignOutButton, SignedIn} from '@clerk/clerk-react'
import React from 'react'

function TopBar() {
 const isUserLoggedIn = true;
 return (
   <div className='topbar'>
    <a href="/home">
      <div className='flex items-center gap-4'>
        <img src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className='text-heading3-bold text-light-1 max-xs:hidden'>Threads</p>
      </div>
      </a>
      <div className='flex items-center gap-1' >
        <div className='block md:hidden'>
        <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <img src="/assets/logout.svg" alt="logout" width={24} height={24} />
              </div>
            </SignOutButton>
            
        </SignedIn>
          </div> 
          <OrganizationSwitcher 
        appearance={{
          elements: {
            organizationSwitcherTrigger:
            "py-2 px-4"
          }
        }}
      />
      </div>
      
      
  </div>
  
 )
}

console.log(OrganizationSwitcher)

export default TopBar
