import { Save, X } from 'lucide-react'
import React from 'react'

export default function CreateCust({setSee}) {
  return (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div variant="intense" padding="lg" className="md:w-full max-w-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-heading-3 font-bold text-white">Add New Customer</h3>
              <X className='text-red-600 cursor-pointer' onClick={()=>{setSee(false)}}/>
            </div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 ">
                <div >
                  <label className="block text-lg font-semibold text-white mb-2">Full Name</label>
                  <input type="text" required placeholder="John Doe" className='border-red-600 text-white outline-none p-2 border rounded-md'/>
                </div>
                <div>
                 <label className="block text-lg font-semibold text-white mb-2">Email</label>
                 <input type="email" required placeholder="john@example.com" className='border-red-600 text-white outline-none p-2 border rounded-md'/>  
                </div>
                
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-lg font-semibold text-white mb-2">Phone</label>
                  <input type="tel" required placeholder="+251 911 123 456" className='outline-none border p-2 rounded-md border-red-600 text-white' />
                </div>
                
                <div>
                  <label className="block text-lg font-semibold text-neutral-200 mb-2">Membership Type</label>
                  <select className=" p-2 w-full bg-neutral-900 border border-neutral-700 text-neutral-100 capitalize">
                    <option value="active">active</option>
                    <option value="inactive">inactive</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end space-x-12 mt-16">
                <button className='p-2 rounded-md bg-red-500 text-white hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer' onClick={()=>{setSee(false)}}>
                  Cancel
                </button>
                <button className='p-2 rounded-md bg-blue-500 text-white hover:-translate-y-1 transition-all duration-300 ease-in-out cursor-pointer'>
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
  )
}
