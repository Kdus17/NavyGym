import { Dot } from 'lucide-react';
import React, {  useState } from 'react'


const Facilities = () => {
  const equipment = [
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

  const[nav,setNav] =useState({state1 : true, state2: false, state3: false})
  const [products,setProd] = useState(equipment);

  return (
    <div id='Facilities' className='flex flex-col items-center gap-4 py-6 bg-neutral-950 w-full pt-20'>
      <h3 className='text-white font-bold text-3xl'>
        TOP OF THE LINE <span className='text-red-500'>EQUIPIMENT</span>
      </h3>
     <p className='text-gray-300 max-w-[900px] text-center'>
Every piece of equipment at The Fitters is chosen for one reason: to help you lift heavier, train harder, and break through plateaus. No fancy gadgets, just proven tools for serious athletes.
     </p>

          {/*  nav */}
     <div className='flex p-1 sm:skew-x-5 bg-neutral-800 gap-1 text-sm font-semibold mt-10'>
          <div onClick={(e)=>{
               e.preventDefault()
            setNav({state1:true,state2:false,state3:false})
            setProd(equipment);
          }}
           className={`px-7 py-2 flex items-center text-gray-300 cursor-pointer    ${nav.state1 ? 'bg-red-700 hover:bg-red-700' : 'bg-neutral-800 hover:bg-white/50'} `}>
                <p className='sm:-skew-x-5'>All Equipment</p>
          </div>
          <div onClick={(e)=>{
            e.preventDefault()
            setNav({state1:false,state2:true,state3:false})
            setProd( equipment.filter((eq)=>{
              if(eq.category == "powerlifting")
              return(
                  eq
              )
            })
            )
           
          }} className={` px-7 py-2 flex items-center text-gray-300 cursor-pointer ${nav.state2 ? 'bg-red-700' : 'bg-neutral-800 hover:bg-white/50'}`}>
                <p className='sm:-skew-x-5'>PowerLifting</p>
          </div>
          <div
           onClick={(e)=>{
            e.preventDefault()
            setNav({state1:false,state2:false,state3:true}) 
            setProd( equipment.filter((eq)=>{
              if(eq.category == "accessories")
              return(
                  eq
              )
            })
            )
          }}
           className={` px-7 py-2 flex items-center text-gray-300 cursor-pointer ${nav.state3 ? 'bg-red-700' : 'bg-neutral-800 hover:bg-white/50'}`}>
                <p className='sm:-skew-x-5'>Accessories</p>
          </div>
      </div>

      <div className='relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 bg-neutral-950 w-full px-16 py-8'>
        {products.map((card,index)=>{
          return(
            <div key={index} className='flex flex-col bg-gradient-to-br pb-4 sm:skew-x-1  from-neutral-900 to-neutral-800 transition-all duration-300 cursor-default hover:scale-105 ease-in-out gap-3'>
              <div className='relative w-full h-48 '>
                <img src={card.image} className='object-cover w-full h-full' alt="" />
                <span className='absolute top-5 bg-red-600 px-2 py-1 uppercase sm:skew-x-12 text-white right-5 text-xs font-bold'><p className='sm:-skew-x-12'>{card.category}</p></span>
              </div>
              <h1 className='text-white text-lg font-bold px-2  sm:-skew-x-1'>{card.name}</h1>
              <p className='text-neutral-500 text-sm px-2 sm:-skew-x-1'>{card.description}</p>
              <span className='text-red-400 text-sm px-2 sm:-skew-x-1 uppercase'>Key Features:</span>
              <div className='flex flex-col  text-neutral-400 text-sm font-medium px-2 sm:-skew-x-1 '>
                {card.specs.map((spec,index)=>{
                  return(
                    <p key={index} className='flex items-center '><span><Dot className='text-red-600'/></span>{spec}</p>
                  )
                })}
              </div>
            </div>
          )
        })}

      </div>

    </div>
  )
}

export default Facilities