import { Delete, Dot, Plus, Trash2Icon } from 'lucide-react';
import React from 'react'
  const products = [
    {
      id: 1,
      name: 'Olympic Powerlifting Platform',
      category: 'powerlifting',
      description: 'Professional-grade lifting platform with authentic Olympic barbells and competition bumper plates.',
      image: 'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg',
      specs: ['45lb Olympic Barbell', 'Competition Bumper Plates']
    },
    {
      id: 2,
      name: 'Heavy Duty Squat Rack',
      category: 'powerlifting',
      description: 'Commercial squat rack built to handle serious weight with multiple safety positions.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
      specs: ['2000lb Weight Capacity', 'Adjustable Safety Bars']
    },
    {
      id: 3,
      name: 'Deadlift Station',
      category: 'powerlifting',
      description: 'Dedicated deadlift area with proper flooring and multiple bar options.',
      image: 'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg',
      specs: ['Specialized Deadlift Bar', 'Iron Plates Available']
    },
    {
      id: 4,
      name: 'Bench Press Station',
      category: 'powerlifting',
      description: 'Competition-standard bench press with adjustable settings and safety features.',
      image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
      specs: ['Competition Bench', 'Safety Spotting Arms']
    },
    {
      id: 5,
      name: 'Cable Machine System',
      category: 'accessories',
      description: 'Multi-station cable system for targeted muscle development and rehabilitation.',
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg',
      specs: ['Dual Cable System', 'Multiple Attachments']
    },
    {
      id: 6,
      name: 'Dumbbell Collection',
      category: 'accessories',
      description: 'Complete set of dumbbells from 5lbs to 150lbs for all training needs.',
      image: 'https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg',
      specs: ['5-150lb Range', 'Rubber Coated']
    }
  ];
export default function Machine() {
  return (
      <div className='relative grid lg:grid-cols-2 lg:gap-3 md:grid-cols-2 grid-cols-1 gap-12 bg-neutral-950 w-full'>
        {products.map((card,index)=>{
          return(
            <div key={index} className='flex flex-col bg-gradient-to-br pb-4 sm:skew-x-1  from-neutral-900 to-neutral-800 cursor-default gap-3'>
              <div className='relative w-full h-48 select-none'>
                <img src={card.image} className='object-cover w-full h-full' alt="" />
                <span className='absolute top-5 bg-red-600 px-2 py-1 uppercase sm:skew-x-12 text-white right-5 text-xs font-bold'><p className='sm:-skew-x-12'>{card.category}</p></span>
                <span className='absolute top-12 bg-yellow-600 px-2 py-1 uppercase sm:skew-x-12 text-white right-4 text-xs font-bold'><p className='sm:-skew-x-12'>change image</p></span>
              </div>
              <input type='text' className='text-white text-lg font-bold px-2 outline-none border-1 rounded-md  sm:-skew-x-1' value={card.name}/>
              <textarea className='text-neutral-500 text-sm px-2 sm:-skew-x-1 outline-none border-1 rounded-md caret-amber-50' value={card.description}/>
              <span className='text-red-400 text-sm px-2 sm:-skew-x-1 uppercase'>Key Features:</span>
              <div className='flex flex-col  text-neutral-400 text-sm font-medium px-2 sm:-skew-x-1 '>
                {card.specs.map((spec,index)=>{
                  return(
                    <p key={index} className='flex items-center py-1 last:mb-1'><span><Dot className='text-red-600'/></span> <span className='w-full'>{spec}</span> <span className='text-red-600 '><Trash2Icon className='size-5 cursor-pointer'/></span></p>
                  )
                })}
                  <div className='flex items-center my-2'><Dot className='text-red-600'/> <input type="text" className='outline-none caret-red-600 w-full border-2 rounded-sm mr-2' /><Plus className=' bg-blue-600 text-white'/></div>
                  <span className='bg-red-600 px-2 py-1 uppercase sm:skew-x-12 text-white  font-semibold text-center'><p className='sm:-skew-x-12 '>Save Changes</p></span>
              </div>
            </div>
          )
        })}

      </div>
  )
}
