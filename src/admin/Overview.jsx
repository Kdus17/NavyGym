import React from 'react'

const stats = [
    {
        num: 247,
        being: "Total Members",
        change: "+12 this week",
        color: "text-green-500"
    },
    {
        num: 34,
        being: "Today's Check-ins",
        change: "+8 this week",
        color: "text-blue-500"
    },
    {
        num: 189,
        being: "Active This Week",
        change: "+15 this week",
        color: "text-purple-500"
    },
    {
        num: 220,
        being: "Active This Month",
        change: "+ 40 this month",
        color: "text-amber-500 "

    }
]

const people = [
    {
        name: "John Lifter",
        date: "2024-01-15 06:30",
        ago: "2h 15m"
    },
    {
        name: "Sarah Strong",
        date: "2024-01-15 18:45",
        ago: "1h 45m"     
    },
    {
        name: "Alex Fit",
        date: "2024-01-15 07:00",
        ago: "2h 30m"
    }
]

export default function Overview() {
  return (
    <div className='grid grid-cols-4 gap-4 w-full h-full lg:grid-rows-3 cursor-default'>
        {stats.map((card,index)=>{
            return(
            <div key={index} className='flex flex-col col-span-4 md:col-span-2 lg:col-span-1 items-center text-center bg-neutral-800 shadow-2xl h-full 
            self-center justify-center py-6 px-4 gap-3 border border-x-0 border-y-1 border-red-500/20 sm:skew-x-2 md:hover:scale-110 transition-all duration-300 ease-in-out '>
                <span className='font-bold text-white  text-3xl sm:-skew-x-2'>{card.num}</span>
                <p className='text-neutral-500 text-center max-w-[80px] self-center sm:-skew-x-2'>{card.being}</p>
                <span className={`${card.color } sm:-skew-x-2 font-semibold`}>{card.change}</span>
            </div>
            )
        })}
        <div className='col-span-4 lg:row-span-2  bg-neutral-800  border border-x-0 border-white/20 shadow-2xl flex flex-col sm:skew-x-1  p-10 gap-6 h-fit'>
            <span className='text-white text-2xl font-bold sm:-skew-x-1'>Recent Check-ins</span>
            {people.map((person,index)=>{
                return(
                    <div key={index} className='flex justify-between border-b-4 border-neutral-700 py-2 last:border-0 sm:-skew-x-1'>
                        <div className='flex flex-col gap-1'>
                            <span className='text-white text-lg font-semibold'>{person.name}</span>
                            <span className='text-neutral-500'>{person.date}</span>
                        </div>
                        <span className='text-neutral-500'>{person.ago}</span>
                    </div>
                )
            })}
        </div>

    </div>
  )
}
