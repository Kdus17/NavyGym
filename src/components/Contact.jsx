import { Clock, Flame, Mail, Phone, Pin, Plane, PlaneIcon, Send } from 'lucide-react'
import React from 'react'
const fourCards = [
    {
        symbol: <Pin className='text-red-500 size-10 sm:-skew-x-3'/>,
        title: "Location",
        blab: "Bole, Addis Ababa",
        secondblab: "Ethiopia"
    },
    {
        symbol: <Phone className='text-amber-500 size-10 sm:-skew-x-3'/>,
        title: "Phone",
        blab: "+25190000000",
        secondblab: "+25191111111"
    },
    {
        symbol: <Mail className='text-green-500 size-10 sm:-skew-x-3'/>,
        title: "Email",
        blab: "NavyGym@gmail.com",
        secondblab: "Sup@gmail.com"
    },
    {
        symbol: <Clock className='text-blue-500 size-10 sm:-skew-x-3'/>,
        title: "Hours",
        blab: "24/7 Access Available",
        secondblab: "Drop in anytime!"
    }
]

const time = [
    {
        day: "Monday - Friday",
        time: "5:00 AM - 11:00 PM"
    },
    {
        day: "Saturday",
        time: "6:00 AM - 10:00 PM"
    },
    {
        day: "Sunday",
        time: "7:00 AM - 9:00 PM"
    }
]

const blank = [
    {
        label: "Name",
        holder: "Your fullname",
        sty: "bg-gradient-to-r from-neutral-900 to-neutral-800 p-2 sm:skew-x-3 text-neutral-400 outline-none border border-x-0 border-red-500/20 has-focus:border-red-500/80 transition-all duration-200 ease-in-out"
    },
    {
        label: "Phone",
        holder: "+251 900 000 000",
        sty: "bg-gradient-to-r from-neutral-900 to-neutral-800 p-2 sm:skew-x-3 text-neutral-400 outline-none border border-x-0 border-red-500/20 has-focus:border-red-500/80 transition-all duration-200 ease-in-out"
    },
    {
        label: "Email",
        holder: "example@gmail.com",
        sty: "bg-gradient-to-r from-neutral-900 to-neutral-800 p-2 sm:skew-x-3 text-neutral-400 outline-none border border-x-0 border-red-500/20 has-focus:border-red-500/80 transition-all duration-200 ease-in-out"
    }
]

export default function Contact() {
  return (
    <section id='contact' className='bg-neutral-950 flex flex-col py-10'>
        <div className='flex flex-col max-w-4xl self-center text-center gap-8'>
            <h1 className='text-4xl uppercase font-bold mt-10 text-white'>Start Your <span className='text-red-500'>Journey</span></h1>
            <p className='text-neutral-300'>Ready to transform your strength? Don't wait for the perfect moment - it doesn't exist. Walk through our doors today and start building the strongest version of yourself.</p>
        </div>

        <div className='grid lg:grid-cols-2 w-full md:px-24 px-12 mt-10 gap-16'>
            {/**Left Side */}
            <div className='flex flex-col gap-8'>
                <h2 className='text-3xl font-bold uppercase text-white'>get in <span className='text-red-600'>touch</span></h2>
                <div className='grid md:grid-cols-2 gap-6'>
                    {fourCards.map((cards,index)=>{
                        return(
                            <div key={index} className='p-8 flex flex-col bg-neutral-800 border hover:scale-102 transition-all duration-300 ease-in-out border-red-500/20 border-x-0 sm:skew-x-3 gap-2'>
                                {cards.symbol}
                                <span className='text-white font-semibold sm:-skew-x-3'>{cards.title}</span>
                                <p className='text-neutral-500 sm:-skew-x-3'>{cards.blab}</p>
                                <p className='text-neutral-500 sm:-skew-x-3'>{cards.secondblab}</p>
                            </div>
                        )
                    })}
                </div>

                <div className='bg-neutral-900 w-full flex flex-col p-10 gap-4 border border-white/5 '>
                    <h1 className='flex gap-2 items-center text-white font-bold text-lg'><Clock className='text-red-500 size-5'/> Operation Hours</h1>
                    {time.map((sth,index)=>{
                        return(
                        <div key={index} className='flex justify-between text-md'>
                            <span className='text-neutral-500'>{sth.day}</span>
                            <span className='text-white font-bold'>{sth.time}</span>
                        </div>
                        )
                    })}
                    <div className='bg-red-500/20 text-center p-6 flex text-red-400 sm:skew-x-3'>
                        <Flame className='text-red-500 sm:-skew-x-3'/>
                        <p>DROP IN ANYTIME - NO APPOINTMENT NEEDED!</p>
                        <Flame className='text-red-500 sm:-skew-x-3'/>
                    </div>
                </div>

                <div className='bg-gradient-to-r from-neutral-700 to bg-neutral-800 w-full flex flex-col items-center justify-center p-10 sm:skew-x-2 gap-2'>
                    <Pin className='size-10 text-red-500 sm:-skew-x-2'/>
                    <h1 className='text-white text-semibold sm:-skew-x-2'>Visit Our Location</h1>
                    <p className='text-neutral-500 sm:-skew-x-2'>Bole, Addis Ababa, Ethiopia</p>
                    <span className='text-red-500 transition-all duration-300 ease-in-out p-2 mt-4 hover:bg-red-500 hover:text-white sm:skew-x-3 cursor-pointer'><p className='sm:-skew-x-6'>Get Directions</p></span>
                </div>
            </div>

            {/**Right Side */}
            <div className='flex flex-col w-full'>
                <form className='bg-neutral-800 border border-red-500/20 flex flex-col p-10'>
                    <h1 className='text-white text-3xl font-semibold'>Send Us a Message</h1>
                    <div className='grid md:grid-cols-2 gap-4 mt-5'>
                        {blank.map((blank,index)=>{
                            return(
                                <div key={index} className={`flex flex-col gap-4 sm:skew-x-3 ${index == 2? "md:col-span-2":""}`}>
                                    <span className='text-white sm:-skew-x-3 font-semibold'>{blank.label}</span>
                                    <label  className={blank.sty} >
                                      <input type="text" name={blank.label} className="w-full h-full outline-none sm:-skew-x-6" placeholder={blank.holder} />
                                    </label>
                                </div>
                            )
                        })}

                    </div>
                    <span className='text-white font-semibold mt-5'>Message</span>
                    <label className='skew-x-3 border mt-5 has-focus:border-y-red-600 border-red-500/20 border-x-0 has-focus:border-x-1  has-focus:border-x-red-500/20
                    bg-gradient-to-r from-neutral-900 to-neutral-800 p-2'>
                        <textarea name="" id="" className='sm:-skew-x-3 w-full outline-none text-neutral-400 resize-none' rows={8}
                        placeholder='Tell us about your fitness goals, questions, or how we can help you'></textarea>
                    </label>

                    <button className='text-white p-4 w-full flex items-center justify-center bg-red-600 mt-5 sm:skew-x-3'>
                        <p className='sm:-skew-x-3 flex gap-2'>Send Message <Send className='size-6 '/></p>
                    </button>
                </form>
                
                <div className='flex flex-col text-center mt-8 gap-5'>
                    <h2 className='text-white text-xl font-semibold'>Ready to Start Training?</h2>
                    <p className='text-neutral-500'>Skip the forms and just show up. Real lifters don't need appointments.</p>
                        <span className='skew-x-6 bg-amber-600 text-xl font-semibold uppercase py-4 px-8 self-center cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'><p className='sm:-skew-x-6'>Walk In today</p></span>
                </div>

            </div>
        </div>
    </section>
  )
}
