import { X } from 'lucide-react'
import React from 'react'

export default function CreateAnn({setSee}) {
  return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="md:w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-white">Announcement</h3>
              <X className='text-red-600 cursor-pointer' onClick={()=>{setSee(false)}}/>
            </div>
            <form className="space-y-6">
                <div className='w-full'>
                  <label className="block text-lg font-semibold text-white mb-2">Title</label>
                  <input  type="text" required className='border-red-600 text-white outline-none p-2 border rounded-md w-full'/>
                </div>

                <div className=''>
                  <label className="block text-lg font-semibold text-white mb-2">Message</label>
                  <textarea rows={5} name="" id="" className='outline-none border p-2 rounded-md border-red-600 text-white w-full'></textarea>
                </div>
                
              <div className="flex justify-end space-x-12 mt-16">
                <button className='p-2 rounded-md bg-red-500 text-white hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer' onClick={()=>{setSee(false)}}>
                  Cancel
                </button>
                <button className='p-2 rounded-md bg-blue-500 text-white hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer'>
                  Announce
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}
