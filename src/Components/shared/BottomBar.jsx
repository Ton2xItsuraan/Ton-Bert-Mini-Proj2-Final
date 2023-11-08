import React from 'react'
import { sidebarLinks } from '../../../constants'
import { Link, useLocation } from 'react-router-dom';

function BottomBar() {
  const location = useLocation()
  return (
    <div className='bottombar'>
        <div className='bottombar_container'>
        {sidebarLinks.map((link) => {
         const isActive = (location.pathname.includes(link.route) && link.route.length > 1) || location.pathname === link.route;



       return (
        <Link to={link.route} key={link.label} className={`bottombar_link ${isActive ? 'bg-primary-500' : ''}`}>

           <img src={link.imgURL} alt={link.label} width={24} height={24} />

           <p className='text-subtle-medium text-light-1 max-sm:hidden'>{link.label.split(/\s+/)[0]}</p>
         </Link>
       )})}
        </div>
    </div>
  )
}

export default BottomBar