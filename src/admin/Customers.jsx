import { UserPlus } from 'lucide-react'
import React, { useState } from 'react'
import CreateAnn from './CreateAnn'

const customers = [
  {
    name: "John",
    contact: "John@gmail.com",
    status: "Inactive",
    last_active: "A month ago"
  },
  {
    name: "Abel",
    contact: "Abel@gmail.com",
    status: "Active",
    last_active: "today"
  },
  {
    name: "super",
    contact: "man@GalleryThumbnailsIcon.com",
    status: <select>
      <option value="inactive">inactive</option>
      <option value="active">active</option>
    </select>,
    last_active: "Yesterday"
  },
  {
    name: "duper",
    contact: "dog@gmail.com",
    status: "Active",
    last_active: "midnight"
  }
]

export default function Customers() {
  const [see,setSee] = useState(false)
  return (
    <>
    <div className='flex flex-col'>
      <div className='flex justify-between items-center'>
        <span className='text-white sm:text-3xl text-xl font-bold'>Customer Managment</span>
        <div  className='sm:skew-x-3 row-span-1  hover:shadow-2xl  p-4 bg-gradient-to-r from-red-700 to-red-500 hover:scale-105 transition-all duration-300 ease-in-out'
        onClick={()=>{setSee(true)}}>
          <p className='sm:sm:-skew-x-4 text-white font-semibold text-lg flex items-end gap-4'><UserPlus/>Add New Customer</p>
        </div>
      </div>

      <div  className='bg-white '>
        <table className='w-full table-fixed border-spacing-2 border '>
          <thead className='bg-red-300'>
            <tr className=''>
              <th className='border'>Customer</th>
              <th className='border'>Contact</th>
              <th className='border'>Status</th>
              <th className='border'>Activity</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((cell,index)=>{
              return (
                <tr key={index} className=''>
                  {Object.entries(cell).map(([key,value])=>{
                    return(
                      <td key={key} className='overflow-x-auto border p-2 scrollbar-hidden text-center'>{value}</td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
    { see &&
    <CreateAnn setSee={setSee}/>}
    </>
  )
}
