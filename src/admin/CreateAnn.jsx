import { Save, X } from 'lucide-react'
import React from 'react'

export default function CreateAnn() {
  return (
    <div className='flex flex-col border-y-1 gap-4 p-10 bg-neutral-800'>
        <div className='flex justify-between text-white '>
            <h1 className='text-2xl font-bold'>Create Announcement</h1>
            <span><X/></span>
        </div>
        <div className='flex flex-col gap-1 text-white '>
            <label htmlFor="title" className='font-semibold'>Title</label>
            <input type="text" name="title" id="title" className='outline-none p-2 bg-neutral-700' />
        </div>

        <div className='flex flex-col gap-1 text-white '>
            <label htmlFor="announcment" className='font-semibold'>Announcment</label>
            <textarea cols={4} type="text" name="announcment" id="announcment" className='outline-none p-2 bg-neutral-700' />
        </div>

        <div className='flex justify-around '>
            <div className='skew-x-2 hover:bg-red-600 text-red-600 hover:text-white p-2 cursor-pointer'>
                <span className='-skew-x-2'>Cancel</span>
            </div>
            <div className='skew-x-2 bg-amber-600 text-white flex items-center p-2 cursor-pointer'>
                <Save/>
                <span className='-skew-x-2'>publish</span>
            </div>
        </div>


    </div>
  )
}
