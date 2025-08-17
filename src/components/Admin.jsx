import { Bell, ChartBar, Dumbbell, LogOutIcon, Radar, Settings, User2 } from 'lucide-react'
import React, { useState } from 'react'
import Overview from '../admin/Overview'
import Customers from '../admin/Customers'
import Announce from '../admin/Announcments'
import Machine from '../admin/Machine'


const cards = [
    {
        text: "Overview",
        icon: <ChartBar/>,
        component: <Overview/>
    },
    {
        text: "Customers",
        icon: <User2/>,
        component: <Customers/>
    },
    {
        text: "Announcments",
        icon: <Radar/>,
        component: <Announce/>
    },
    {
        text: "Machines",
        icon: <Dumbbell/>,
        component: <Machine/>
    },
]

export default function Admin() {
const [see,setSee] = useState(['Overview'])
  return (
  <div className='flex flex-col bg-neutral-950 cursor-default min-w-[245px]'>
    {/**Nav */}
    <div className='bg-neutral-800 border border-x-0 border-white/5 flex justify-around p-6'>
        <div className='flex flex-col'>
            <h1 className='text-white sm:text-3xl text-xl font-bold'>Admin Dashboard</h1>
            <p className='text-neutral-400 text-xs sm:text-md'>Manage your gym operations and members.</p>
        </div>
        <div className='flex gap-4 sm:gap-8 items-center text-neutral-300 '>
            <div className='flex items-center gap-2 cursor-pointer'><Bell className='size-5'/> <span className='hidden sm:block'>Notification</span></div>
            <div className='flex items-center gap-2 cursor-pointer'><Settings className='size-5'/> <span className='hidden sm:block'>Settings</span></div>
            <div className='flex items-center gap-2 text-red-700 cursor-pointer' ><LogOutIcon className='size-5'/> <span className='hidden sm:block'>Logout</span></div>
        </div>
    </div>

    <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-6 sm:p-16 min-h-screen'>
        <div className='grid grid-row-4 col-span-2 lg:col-span-1 bg-neutral-800 h-fit p-6 gap-3 border border-x-0 border-red-500/5 sm:skew-x-1 '>
            {cards.map((card,index)=>{
                return(
                <div key={index} className={`sm:skew-x-3 row-span-1 w-full hover:shadow-2xl p-4 ${see.includes(card.text)?"bg-red-500 scale-105":"hover:bg-neutral-500 hover:scale-102"} transition-all duration-300 ease-in-out`} onClick={()=>{setSee(card.text)}}>
                    <p className='sm:sm:-skew-x-4 text-white font-semibold text-lg flex items-end gap-4'>{card.icon}{card.text}{console.log(see)}</p>
                </div>
                )
            })}
            
        </div>

        {cards.map((card,index)=>{
            return(
            <div key={index} className={`col-span-2 md:row-span-2 h-full ${see.includes(card.text)?"block":"hidden"}`}>
                {card.component}
            </div>   
            )
        })}
        
        
    </div>

  </div>
  )
}
