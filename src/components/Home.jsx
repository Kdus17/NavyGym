import React, { useEffect, useState } from 'react'
import {Circle, Zap} from 'lucide-react'



const pages = [
    {
      image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      title: 'NO EXCUSES',
      subtitle: 'NO GIMMICKS',
      cta: 'JUST LIFTING'
    },
    {
      image: 'https://images.pexels.com/photos/949126/pexels-photo-949126.jpeg',
      title: 'FORGE YOUR',
      subtitle: 'STRENGTH',
      cta: 'DEFINE YOUR LIMITS'
    },
    {
      image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg',
      title: 'WHERE LEGENDS',
      subtitle: 'ARE MADE',
      cta: 'JOIN THE ELITE'
    }
]



export default function Home() {
const [num, setnum] = useState(0)
useEffect(()=>{
  const once =  setTimeout(()=>{
        setnum((num)=>(num+1) % pages.length)
    },5000)
   return () => clearInterval(once)
},[])

  return (
    <section id='home' className='min-h-screen bg-neutral-900'>
        {pages.map((page,i)=>{
            return(
                <div className='absolute inset-0' key={i}>
                    <img src={page.image} className={`w-full h-full object-cover ${i == num ? "opacity-100":"opacity-0"}`} alt="" />
                    <div className='absolute inset-0 bg-gradient-to-r from-black/30 via-black/50 to-transparent'>
                    </div>
                </div>
            )
        })}
        <div className='relative  min-h-screen flex items-center justify-around '>
            <div className=' gap-8 w-2/3 flex flex-col '>
                <div className='bg-red-600/20 border border-red-600/30 rounded-md w-fit flex px-4 gap-2 py-1 '>
                    <Zap className='text-red-500'/>
                    <p className='text-red-400'>Addis Ababa's Strongest</p>
                </div>
                <div className='flex flex-col text-4xl sm:text-6xl font-extrabold'>
                    <span className='text-white'>{pages[num].title}</span>
                    <span className='text-red-700'>{pages[num].subtitle}</span>
                </div>
                <h2 className='text-2xl sm:text-3xl text-amber-300 font-bold'>{pages[num].cta}</h2>
                <p className='text-gray-400 text-lg'>The most intense powerlifting and strength training facility in Addis Ababa. No membership fees, no contracts, no bullshit. Just pure iron and determination.</p>
                <div className='flex gap-2 p-2 text-xl font-semibold'>
                    <button className='skew-x-6 p-6 hover:scale-105 bg-red-600 text-white'><p className='-skew-x-6'>Visit Us Today</p></button>
                    <span className='text-red-500 p-6 capitalize'>Watch Our Story</span>
                </div>
                <div className='flex self-center  text-white gap-2'>
                    <Circle onClick={()=>setnum(0)} className={`rounded-full ${num == 0 ? "bg-white": ""}`}/>
                    <Circle onClick={()=>setnum(1)} className={`rounded-full ${num == 1 ? "bg-white": ""}`}/>
                    <Circle onClick={()=>setnum(2)} className={`rounded-full ${num == 2 ? "bg-white": ""}`}/>
                </div>
            </div>
        </div>

    </section>
  )
}
