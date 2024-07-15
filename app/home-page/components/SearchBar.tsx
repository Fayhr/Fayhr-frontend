import React from 'react'
import { BsPlus } from 'react-icons/bs'

const Search = () => {
  return (
    <div className='grid gap-2 p-5 bg-white fixed top-0'>
      <p className='flex justify-center'>LOGO <br /> FAYHR</p>
      <div className='grid grid-cols-12 gap-5 items-center place-items-center'>
        <div className='col-span-2 bg-primary rounded-full h-9 w-9'>d</div>
        <input type="search" name="search" className='border-2 border-primary outline-none p-1 col-span-8 rounded-full' />
        <BsPlus className='col-span-2 text-3xl bg-primary text-white rounded-md' />
      </div>
    </div>
  )
}

export default Search
