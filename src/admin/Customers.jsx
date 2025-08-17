import { UserPlus } from 'lucide-react'
import React from 'react'

export default function Customers() {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <span className='text-white sm:text-3xl text-xl font-bold'>Customer Managment</span>
        <div  className='sm:skew-x-3 row-span-1  hover:shadow-2xl  p-4 bg-gradient-to-r from-red-700 to-red-500 hover:scale-105 transition-all duration-300 ease-in-out'>
          <p className='sm:sm:-skew-x-4 text-white font-semibold text-lg flex items-end gap-4'><UserPlus/>Add New Customer</p>
        </div>
      </div>

      <div></div>
    </div>
  )
}
