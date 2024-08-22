import React from 'react'
import MenuOverlay from './MenuOverlay'

const menu_footer = [
  {
    title: 'Features',
    links: [
      {href: '#', title: 'How it works'},
      {href: '#', title: 'For teams'},
      {href: '#', title: 'Pricing'},
      {href: '#', title: 'Templates'},
    ]
  },
  {
    title: 'Resources',
    links: [
      {href: '#', title: 'Download Apps'},
      {href: '#', title: 'Help Center'},
      {href: '#', title: 'Productivity Methods'},
      {href: '#', title: 'Integration'},
      {href: '#', title: 'Channel Partners'},
      {href: '#', title: 'Developer API'},  
      {href: '#', title: 'Status'},
    ]
  },
  {
    title: 'Company',
    links: [
      {href: '#', title: 'About'},
      {href: '#', title: 'Careers'},
      {href: '#', title: 'Press'},
      {href: '#', title: 'Twist'},
      {href: '#', title: 'Insipiration hub'},
    ]
  },
  {
    title: 'Logo',
    links: [
      {href: '#', title: 'Twitter'},
      {href: '#', title: 'Youtube'},
      {href: '#', title: 'Facebook'},
      {href: '#', title: 'Instagram'},
    ]
  }
]



const Footer = () => {
  return (
    <>
    <div className='grid grid-cols-12 mx-16 border-t-2 mb-20'>
    <div className='col-span-3  flex flex-col mr-10 ml-4 mt-16'>
       <p className='text-xl font-bold'>Todo</p>
       <p className='font-semibold'>Join millions of people who organize work, life with Todoist.</p>
    </div>
    <div className='col-span-9 ml-20 mt-16'>
      <div className='grid grid-cols-12 gap-4'>
        {menu_footer.map((menu, index) => (
          <div key={index} className='col-span-3'>
            <p className='font-semibold'>{menu.title}</p>
            <ul className='mt-4'>
              {menu.links.map((link, index) => (
                <li key={index} className='mt-2'>
                  <a href={link.href} className='text-gray-500 hover:text-gray-700'>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className='text-center py-6 flex justify-between  pl-32 pr-32'>
      <p className='text-gray-500'>© 2024 Doist. All rights reserved.</p> 
      <p>English</p>
    </div>
    </>
  )
}

export default Footer