'use client'

import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'
import MenuOverlay from './MenuOverlay'
import {Bars3Icon} from '@heroicons/react/24/solid'

const navLinks = [
    {title: 'Features', href: '#herosection'},
    {title: 'For Teams', href: '#aboutsection'},
    {title: 'Pricing', href: '#projectsection'},
    {title: 'Resources', href: '#contactsection'},
    {title: 'Log in', href: '/login'},
    {title: 'Start for Free', href: '/signup'}
]


const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false); 
  return (
    <nav className='fixed top-0 left-0 right-0 bg-white bg-opacity-100 z-10'>
        <div className='flex flex-wrap items-center justify-between mx-auto p-8 pt-4 px-10'>
           <Link href={'/'} className='text-2xl md:text-3xl font-semibold ml-40'>TODO</Link>
           <div className='modile-menu block md:hidden'>
              {
                !navbarOpen ? (
                    <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded hover:bg-[#fafafa]'>
                        <Bars3Icon className='h-6 w-6'/>
                    </button>
                ) : (
                    <button  onClick={() => setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 h-6 w-6">
                           <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                        </svg>
                    </button>
                )
              }     
           </div>
           <div className='menu hidden md:block md:w-auto mr-10' id='navbar'>
              <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 items-center'>
                    {navLinks.map((navLink, index) => (
                        <>
                        <li key={index}>
                            <NavLink href={navLink.href} title={navLink.title} />   
                        </li>
                        </>
                    ))}
              </ul>
           </div>
        </div>
        <div className={`mobile-menu-overlay ${navbarOpen ? 'block' : 'hidden'}`}>
            <MenuOverlay links={navLinks} />
        </div>
    </nav>
  )
}

export default NavBar