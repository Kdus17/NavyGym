import { Users,Dumbbell,Clock,Target, Award} from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-7 bg-black w-full">
            <h1 className="text-white text-4xl"> FORGED IN  <span className="text-red-500">FIRE</span></h1>
        <p className="text-gray-200 text-center max-w-[800px]">The Fitters Gym isn't just a place to work out - it's where ordinary people transform into extraordinary athletes.
Located in the heart of Addis Ababa, we've built more than a gym; we've built a culture of excellence.</p>
     {/* 
     the four cards */}
     <div className="flex flex-row justify-around  px-8 w-full">
        <div className="flex flex-col gap-4 min-w-[200px] py-4 px-4 items-center bg-gradient-to-tl from-gray-900 to-gray-800 rounded-md">
             <Users  className='text-red-400 size-8'/>
             <p className='text-white text-3xl'>300+</p>
             <p className='text-gray-200'>potential members</p>
        </div>
        <div className="flex flex-col gap-4 min-w-[200px] py-4 px-4 items-center bg-gradient-to-tl from-gray-900 to-gray-800 rounded-md">
             <Dumbbell  className='text-red-400 size-8'/>
             <p className='text-white text-3xl'>50+</p>
             <p className='text-gray-200'>Equipment</p>
        </div>
        <div className="flex flex-col gap-4 min-w-[200px] py-4 px-4 items-center bg-gradient-to-tl from-gray-900 to-gray-800 rounded-md">
             <Clock  className='text-red-400 size-8'/>
             <p className='text-white text-3xl'>24/7</p>
             <p className='text-gray-200'>open</p>
        </div>
        <div className="flex flex-col gap-4 min-w-[200px] py-4 px-4 items-center bg-gradient-to-tl from-gray-900 to-gray-800 rounded-md">
             <Target  className='text-red-400 size-8'/>
             <p className='text-white text-3xl'>0</p>
             <p className='text-gray-200'>excuses accpeted</p>
        </div>
     </div>
        <div  className='flex justify-center gap-8 '>
         {/*  forged in fire */}
<div
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }}
  className="h-[500px] w-[500px] border-4 relative"
>
    <div className='flex flex-col gap-2 p-4 mb-5 absolute bottom-0 left-0'>
    <span className='text-white italic '> This is where champions are forged, not born</span>
    <span className='text-yellow-200'>founder, Yared Teshager</span>
    </div>
</div>
{/* the misson */}
<div className='flex  p-5 flex-col items-center gap-5 '>
    <h2 className='text-2xl text-white font-bold self-start'>
        OUR <span className='text-red-400'>MISSON </span>
         </h2>

        <p className=' text-gray-200 max-w-[500px]'>
            We exist to provide serious athletes and everyday warriors with the tools, environment, and community they need to push beyond their limits. Our mission is simple: strip away the noise and focus on what matters  pure, raw strength.
<br/>
no stress. No contracts. No excuses. Just walk in, grab a barbell, and start your transformation. This is how fitness should be.
        </p>
        <div className='flex flex-col gap-4 py-5 px-3 bg-red-400/20'>
          <h3 className='text-red-600  font-bold text-1xl'>
THE FITTERS PROMISE
          </h3>
          <p className='text-gray-200 max-w-[500px]'>
Every piece of equipment is commercial-grade. Every weight is accurate. Every member is committed. When you train here, you're not just working out  you're joining a legacy of strength that spans generations
          </p>
        </div>
   
</div>
        </div>
{/* 
the  three cards */}
        <div className='flex flex-col gap-8 items-center w-full py-8 bg-slate-950'>
          <h2 className='text-2xl text-red-400 font-bold'><span className='text-white'>Our</span> Philosophy</h2>
          <div className='flex  justify-around  w-full'>
          <div className='flex flex-col gap-4 p-5 items-start w-[300px]  hover:scale-102 transition-all duration-400 ease-in-out border-y-white  shadow-sm shadow-gray-400    '>
           <Target  className='text-red-400 size-8'/>
           <p className='text-white font-bold'>Raw Strength</p>
           <p className='text-gray-300'>
We believe in the pure pursuit of strength. No fancy machines, no gimmicks - just barbells, plates, and your determination.</p>
          </div>
          <div className='flex flex-col gap-4 p-5 items-start w-[300px]  hover:scale-102 transition-all duration-400 ease-in-out border-y-white  shadow-sm shadow-gray-400    '>
           <Users  className='text-red-400 size-8'/>
           <p className='text-white font-bold'>Community of Iron </p>
           <p className='text-gray-300'>

Join a brotherhood of serious lifters who push each other to new heights. Spotters become friends, training partners become family</p>
          </div>
          <div className='flex flex-col gap-4 p-5 items-start w-[300px]  hover:scale-102 transition-all duration-400 ease-in-out border-y-white  shadow-sm shadow-gray-400    '>
           <Award  className='text-red-400 size-8'/>
           <p className='text-white font-bold'>Relentless Progress</p>
           <p className='text-gray-300'>

Every rep counts. Every set matters. We measure success in plates added to the bar and barriers broken in your mind.</p>
          </div>
          </div>

        </div>
    </div>
  )
}

export default AboutUs