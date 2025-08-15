import React, { useState } from 'react'


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
  const [products,setProd] =useState([]);


  return (
    <div id='Facilities' className='flex flex-col items-center gap-4 py-6 bg-neutral-950 w-full'>
      <h3 className='text-white font-bold text-3xl'>
        TOP OF THE LINE <span className='text-red-500'>EQUIPIMENT</span>
      </h3>
     <p className='text-gray-300 max-w-[900px] text-center'>
Every piece of equipment at The Fitters is chosen for one reason: to help you lift heavier, train harder, and break through plateaus. No fancy gadgets, just proven tools for serious athletes.
     </p>

          {/*  nav */}
     <div className='flex'>
          <div onClick={(e)=>{
               e.preventDefault()
            setNav({state1:true,state2:false,state3:false})
            setProd(equipment);
          }}
           className={`px-7 py-3 text-gray-300  hover:bg-white/50 skew-x-5 ${nav.state1 ? 'bg-neutral-800' : 'bg-red-700 '} `}>
                <p className='-skew-x-3'>All Equipment</p>
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
           
          }} className={` px-7 py-3 text-gray-300 hover:bg-white/50 skew-x-5 ${nav.state2 ? 'bg-neutral-800  ' : 'bg-red-700'}`}>
                <p className='-skew-x-3'>PowerLifting</p>
          </div>
          <div
           onClick={(e)=>{
            setNav({state1:false,state2:false,state3:true})
              e.preventDefault()
            setNav({state1:false,state2:true,state3:false})
            setProd( equipment.filter((eq)=>{
              if(eq.category == "accessories")
              return(
                  eq
              )
            })
            )
          }}
           className={` px-7 py-3 text-gray-300 hover:bg-white/50 skew-x-5 ${nav.state3 ? 'bg-neutral-800' : 'bg-red-700'}`}>
                <p className='-skew-x-3'>Accessories</p>
          </div>
      </div>


      <div className='flex gap-8 ml-20 flex-wrap w-full'>

       {/*  the cards */}
      {products.map((equip,key)=>(
        
      <div key={key} className='flex flex-col gap-4 w-[350px] h-[450px] bg-gradient-to-br from-neutral-900 to-neutral-800 mt-6 transition-all duration-100 hover:scale-105 ease-in-out'>

        <div style={{  backgroundImage: `url(${equip.image})`}} className={` bg-cover bg-no-repeat bg-center h-[350px] w-[350px] relative`}>
          <span className='p-1 bg-red-400 text-white skew-x-3  font-bold absolute top-0 right-0  '>{equip.category}</span>
        </div>
        <div className='flex flex-col gap-3 p-4'>
        <span className='font-bold text-lg text-white'>{equip.name}</span>
        <p className='text-gray-300  text-wrap'>{equip.description}</p>
        <p  className='text-red-400'>key features</p>
          <div className='flex flex-col  gap-3'>
        {equip.specs.map((spec,key)=>{
          return    <p key={key}  className='text-red-300'>{spec}</p>
           
        })} 
        </div>
        </div>
      </div>))}
      </div>
    </div>
  )
}

export default Facilities