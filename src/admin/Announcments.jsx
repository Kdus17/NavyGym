import { Trash, UserPlus } from 'lucide-react'
import React from 'react'

const announcments = [
  {
    announcer: "admin",
    announcment: "super duper",
    messgae: "aowuhdb",
    announced_on: "tuesday"
  },
  {
    announcer: "admin",
    announcment: "super duper",
    messgae: "aowuhdb",
    announced_on: "tuesday"
  }
]

export default function Announce() {
  return (
    <div className='flex flex-col '>
      <div className='flex justify-between items-center'>
        <span className='text-white sm:text-3xl text-xl font-bold'>Announcment Managment</span>
        <div  className='sm:skew-x-3 row-span-1  hover:shadow-2xl  p-4 bg-gradient-to-r from-red-700 to-red-500 hover:scale-105 transition-all duration-300 ease-in-out'>
          <p className='sm:sm:-skew-x-4 text-white font-semibold text-lg flex items-end gap-4'><UserPlus/>Add Announcment</p>
        </div>
      </div>
      {announcments.map((ann,index)=>{
        return(
        <div key={index} className='flex justify-between p-10 bg-neutral-800 border-b-amber-400 not-last:border-b-1'>
          <div className='flex flex-col'>
            <h1 className='text-2xl font-bold text-white'>{ann.announcment}</h1>
            <p className='text-lg font-semibold text-white'>{ann.messgae}</p>
            <div className='flex gap-2 text-neutral-500'>
              <span>by {ann.announcer}</span>
              <span>on {ann.announced_on}</span>
            </div>
          </div>
          <div>
            <Trash className='size-6 text-red-600'/>
          </div>
        </div>
        )
      })}

    </div>
  )
}
