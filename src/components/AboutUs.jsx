import { Users,Dumbbell,Clock,Target, Award} from 'lucide-react';

const fourCards = [
  {
    symbol: <Users className='text-red-600 self-center -skew-x-3 size-8'/>,
    num: "300+",
    blab: "potential members"
  },
  {
    symbol: <Dumbbell className='text-red-600 self-center -skew-x-3 size-8'/>,
    num: "50+",
    blab: "equipment"
  },
  {
    symbol: <Clock className='text-red-600 self-center -skew-x-3 size-8'/>,
    num: "24/7",
    blab: "Open"
  },
  {
    symbol: <Target className='text-red-600 self-center -skew-x-3 size-8'/>,
    num: "0",
    blab: "excuses accepted"
  }
]
const threeCards = [
  {
    symbol: <Target  className='text-red-600 size-12 '/>,
    title: "Raw Strength",
    blab: "We believe in the pure pursuit of strength. No fancy machines, no gimmicks - just barbells, plates, and your determination."
  },
  {
    symbol: <Users  className='text-red-600 size-12 '/>,
    title: "Community of Iron ",
    blab: "Join a brotherhood of serious lifters who push each other to new heights. Spotters become friends, training partners become family"
  },
  {
    symbol: <Award  className='text-red-600 size-12 '/>,
    title: "Relentless Progress",
    blab: "Every rep counts. Every set matters. We measure success in plates added to the bar and barriers broken in your mind."
  }
]

const AboutUs = () => {
  return (
    <div id='about' className="flex flex-col items-center gap-10 pt-7 bg-neutral-900 w-full">
       <h1 className="text-white text-4xl"> FORGED IN  <span className="text-red-500">FIRE</span></h1>
        <p className="text-gray-200 text-center max-w-[800px]">The Fitters Gym isn't just a place to work out - it's where ordinary people transform into extraordinary athletes.
Located in the heart of Addis Ababa, we've built more than a gym; we've built a culture of excellence.</p>
     
     {/* the four cards */}

     <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-8 w-full px-32'>
      {fourCards.map((card,index)=>{
        return(
          <div key={index} className='flex bg-gradient-to-br from-neutral-900 to-neutral-800 flex-col gap-4 skew-x-3 border-t border-b border-red-500/20 shadow-2xl py-10'>
            {card.symbol}
            <span className='text-4xl self-center text-white -skew-x-3 font-bold'>{card.num}</span>
            <p className='text-lg text-gray-400 self-center -skew-x-3 font-sans capitalize  font-semibold'>{card.blab}</p>
          </div>
        )
      })}
     </div>

    <div  className='flex justify-center w-full flex-col md:flex-row gap-8 '>
         {/*  forged in fire */}
        <div
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"
          }}
          className="h-[500px] w-full md:w-[500px]  relative"
        >
            <div className='flex flex-col gap-2 p-4 mb-5 absolute bottom-0 left-0'>
            <span className='text-white italic '> This is where champions are forged, not born</span>
            <span className='text-yellow-200'>founder, Yared Teshager</span>
            </div>
        </div>
    {/* the misson */}
          <div className='flex  p-5 flex-col items-center gap-5 '>
              <h2 className='text-3xl text-white font-bold self-start'>
                  OUR <span className='text-red-600'>MISSION </span>
              </h2>

                <p className=' text-gray-200 max-w-[500px]'>
                    We exist to provide serious athletes and everyday warriors with the tools, environment, and community they need to push beyond their limits. Our mission is simple: strip away the noise and focus on what matters  pure, raw strength.
                  <br/>
                  <br />
                    No stress. No Distractions. No excuses. Just walk in, grab a barbell, and start your transformation. This is how fitness should be.
                </p>
                <div className='flex flex-col gap-4 p-6 bg-red-600/20 skew-x-2'>
                  <h3 className='text-red-400  font-bold text-1xl -skew-x-2'>
                      THE FITTERS PROMISE
                  </h3>
                  <p className='text-neutral-300 max-w-[500px] -skew-x-2'>
                    Every piece of equipment is commercial-grade. Every weight is accurate. Every member is committed. When you train here, you're not just working out  you're joining a legacy of strength that spans generations
                  </p>
                </div>
            
            </div>
        </div>
    
    {/* the  three cards */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full px-24 gap-12 py-12'>
          {threeCards.map((cards,index)=>{
            return(
              <div key={index} className={`flex flex-col gap-4 ${index == 2? "col-span-1 md:col-span-2 lg:col-span-1":""}  border border-x-0 p-12 bg-neutral-900/80 border-y-neutral-700/50 hover:scale-105 transition-all duration-300 ease-in-out`}>
                {cards.symbol}
                <h1 className='text-white text-2xl font-bold '>{cards.title}</h1>
                <p className='text-neutral-300 '>{cards.blab}</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default AboutUs