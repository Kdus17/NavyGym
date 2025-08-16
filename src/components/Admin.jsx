import { Bell, LogOutIcon, Settings } from 'lucide-react'
import React from 'react'
import Overview from '../admin/Overview'

const cards = [
    {
        text: "Overview"
    },
    {
        text: "Customers"
    },
    {
        text: "Announcments"
    },
    {
        text: "Machines"
    },
]

export default function Admin() {
  return (
  <div className='flex flex-col bg-neutral-950'>
    {/**Nav */}
    <div className='bg-neutral-700 border border-x-0 border-white/5 flex justify-around p-6'>
        <div className='flex flex-col'>
            <h1 className='text-white text-3xl font-bold'>Admin Dashboard</h1>
            <p className='text-neutral-400'>Manage your gym operations and members.</p>
        </div>
        <div className='flex gap-8 items-center text-neutral-300 '>
            <div className='flex items-center gap-2 hover:scale-115 hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out'><Bell className='size-5'/> Notification</div>
            <div className='flex items-center gap-2 hover:scale-115 hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out'><Settings className='size-5'/> Settings</div>
            <div className='flex items-center gap-2 text-red-700 hover:scale-115 hover:-translate-y-1 cursor-pointer transition-all duration-300 ease-in-out' ><LogOutIcon className='size-5'/> Logout</div>
        </div>
    </div>

    <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-6 p-16 min-h-screen'>
        <div className='grid grid-row-4 col-span-2 lg:col-span-1 bg-neutral-800 h-fit p-6 gap-3 border border-x-0 border-red-500/5 skew-x-1'>
            {cards.map((card,index)=>{
                return(
                <div key={index} className='skew-x-3 row-span-1 w-full hover:shadow-2xl  p-4 hover:bg-red-500'>
                    <p className='-skew-x-4 text-white font-semibold text-lg'>{card.text}</p>
                </div>
                )
            })}
            
        </div>
        <div className='col-span-2 md:row-span-2 h-full'>
            <Overview />
        </div>
        
        
    </div>

  </div>
  )
}
