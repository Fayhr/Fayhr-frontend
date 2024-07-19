"use client"
import React, { useState } from 'react'
import { MdArrowLeft, MdArrowBack } from 'react-icons/md'
import NavigationBar from '../../components/NavigationBar'
import { useRouter } from 'next/navigation'

const Page = () => {
  const [portion, setPortion] = useState(1);
  const [price, setPrice] = useState(400);
  // const tp = ;
  // const [transportation, setTransportation] = useState(price * 0.1);
  const router = useRouter();

  return (
    <div className='bg-white text-black'>
      <div className='flex *:font-semibold gap-3 items-center p-5'>
        <MdArrowBack onClick={() => router.back()} />
        <span>Contribute</span>
      </div>
      <div className='px-5'>
        <h1 className='font-bold'>Description</h1>
        <p className='text-sm mt-3'>A little short description of whatever the fuck you think this shit is all about.</p>
      </div>
      <div className='px-5 mt-2'>
        <h1 className='font-bold'>Portions</h1>
        <div className='grid gap-7 mt-3'>
          <div className='flex gap-3 mt-3'>
            <button onClick={() => {setPortion(portion + 1); setPrice(portion * price); }} className='w-full border-2 rounded-xl p-2'>{portion}</button>
            <button className='w-full border-2 rounded-xl p-2'>N{price}</button>
          </div>
          <input type="range" name="" className='h-1' />
          <div>
            <h1 className='font-bold'>Your Contribution</h1>
            <div className='flex *:font-bold *:text-sm justify-between mt-4'>
              <p>{portion} Portion</p>
              <p>N{price}</p>
            </div>
            <div className='flex *:font-bold *:text-sm justify-between mt-2'>
              <p>Transportation fee</p>
              <p>N150</p>
            </div>
            <div className='flex *:font-bold justify-between mt-8'>
              <p>Total cost</p>
              <p>N{price}</p>
            </div>
          </div>
          <button className='bg-primary text-white p-3 rounded-full'>Continue</button>
        </div>
      </div>
      <NavigationBar />
    </div>
  )
}

export default Page
