"use client";


import Image from 'next/image';
import React, { FormEvent } from 'react'

import { sendEmail } from '@/actions/sendEmail';

export default function ContactPage() {
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

        <div className="mt-3 py-4 px-[50px] md:px-[100px] bg-[#f7b6aa] w-fit rounded-r-3xl">
          <h1 className="text-3xl text-[#D4491D] font-heading tracking-[10px]">
            CONTACT ME
          </h1> 
        </div>

        <div className="flex flex-col items-center justify-center font-heading text-[#2B3349] w-[min(100%, 100px)]">
          

          <form 
            className='flex w-full flex-col mt-10 gap-2 font-link'
            action={sendEmail}
          >
            <label htmlFor="name">Full name</label>
            <input required maxLength={100} id='name' name='name' type='text' className='w-full md:w-[50%] p-4 h-9  border border-black/30'/>

            <label htmlFor="phone">Phone Number</label>
            <input required maxLength={100} id='phone' name='phone' type='text' className='w-full md:w-[50%] p-4 h-9  border border-black/30'/>

            <label htmlFor="email">Email</label>
            <input required maxLength={100} id='email' name='email' type='email'  className='w-full md:w-[75%] p-4 h-9 border border-black/30'/>

            <label htmlFor="message">Message</label>
            <textarea required maxLength={2000} id='message' name='message' className='h-52  border border-black/30 p-4'/>

            <button type='submit' className='mt-3 rounded-sm bg-[#D4491D] text-white w-fit p-4'>Send message</button>
          </form>
        </div>
      </section>

      <section className='mt-[90px] md:mt-[150px]'>
        <div className="py-6 px-[50px] md:px-[100px] bg-[#f7b6aa] w-fit rounded-r-3xl mb-[70px]">
          <h1 className="text-3xl text-[#D4491D] font-heading tracking-[10px]">
            LOCATION
          </h1> 
        </div>

        <div className='flex flex-col md:flex-row gap-3 justify-between'>
          <div className='md:w-[47%]'>
            <p className='font-heading text-[#2B3349] text-[1.25rem]'>
              Reddy Psychotherapy can provide in-person therapy at Limerick Mental Health Association (3 Sexton Street, Limerick, V94 Y521) on Tuesday and Wednesday.
              <br/><br/>
              Remote therapy can be facilitated through online video sessions or through telephone audio sessions. 
              <br/><br/>
              Get in touch if you would like to discuss the best setting for your needs. </p>
          </div>
          <div className='md:w-[47%]'>
            <div><iframe width="100%" height="600" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=3%20Sexton%20Street,%20Limerick,%20V94%20Y521+(Reddy%20Pyschotherapy)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps systems</a></iframe></div>
          </div>
        </div>
      </section>
    </main>
  )
}
