"use client";


import Image from 'next/image';
import React, { FormEvent } from 'react'

export default function ContactPage() {

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  }

  return (
    <main className="relative">
        <section>
        <div className="absolute -rotate-90 top-[100px] -right-[700px]">
          <Image
            src="/assets/Semi_Circle_2.svg"
            alt='semi circle bg image'
            width={800}
            height={800}
          />
        </div>

        <div className="py-6 px-[100px] bg-[#f7b6aa] w-fit rounded-r-3xl">
          <h1 className="text-3xl text-[#D4491D] font-heading tracking-[10px]">
            CONTACT ME
          </h1> 
        </div>

        <div className="flex flex-col items-center justify-center font-heading text-[#2B3349] w-[min(100%, 100px)]">
          

          <form className='flex w-full flex-col mt-10 gap-2 font-link'>
            <label htmlFor="name">Full name</label>
            <input id='name' type='text' className='w-[50%] p-4 h-14  border border-black/30'/>
            <label htmlFor="phone">Phone Number</label>
            <input id='phone' type='text' className='w-[50%] p-4 h-14  border border-black/30'/>
            <label htmlFor="email">Email</label>
            <input id='email' type='email'  className='w-[75%] p-4 h-14 border border-black/30'/>
            <label htmlFor="message">Message</label>
            <textarea id='message' className='h-52  border border-black/30 p-4'/>
            <button onSubmit={onSubmit} type='submit' className='bg-[#D4491D] text-white w-fit p-4'>Send message</button>
          </form>
        </div>
      </section>
      <section className='mt-[150px]'>
        <div className="py-6 px-[100px] bg-[#f7b6aa] w-fit rounded-r-3xl mb-[70px]">
          <h1 className="text-3xl text-[#D4491D] font-heading tracking-[10px]">
            LOCATION
          </h1> 
        </div>

        <div className='flex gap-3 justify-between'>
          <div className='w-[47%]'>
            <p className='font-heading text-[#2B3349] text-2xl'>
              Reddy Psychotherapy can provide in-person therapy at Limerick Mental Health Association (3 Sexton Street, Limerick, V94 Y521) on Tuesday and Wednesday.
              <br/><br/>
              Remote therapy can be facilitated through online video sessions or through telephone audio sessions. 
              <br/><br/>
              Get in touch if you would like to discuss the best setting for your needs. </p>
          </div>
          <div className='w-[47%]'>
            <div><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3%20Sexton%20Street,%20Limerick,%20V94%20Y521+(Reddy%20Pyschotherapy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
          </div>
        </div>
      </section>
    </main>
  )
}