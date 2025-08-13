import React from 'react'

export default function NavBar() {
  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];
  return (
    <div className='flex items-center justify-between px-10 py-2 h md:justify-around md:p-2 select-none'>
        <p className='py-1'>NavyGym</p>
        <div className='md:flex hidden gap-8 '>
            {navigationItems.map((item,i)=>{
                return(
                    <div key={i} className='group flex flex-col cursor-pointer pt-1'>
                        <a href={item.href} className='hover:text-red-600'>{item.name}</a>
                        <span className='w-0 h-1 bg-red-600 group-hover:w-full transition-all duration-600 ease-in-out'></span>
                    </div>
                )
            })}
        </div>
        <div className='md:flex hidden gap-4'>
            <button className='skew-x-12 hover:bg-gray-200 px-2 py-1'><p className='-skew-x-12'>Login</p></button>
            <button className='skew-x-12 bg-red-600 text-white hover:scale-105 px-2 py-1 transition-all duration-100 ease-in-out'><p className='-skew-x-12'>Vist us</p></button>
        </div>
        <button className='md:hidden'>
            menu
        </button>
    </div>
  )
}
