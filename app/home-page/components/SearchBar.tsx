import React from 'react'
import { BsPlus } from 'react-icons/bs'
import Image from 'next/image'
import logo from '@/public/image/Logo_Mark.webp'
import icon from '@/public/image/Word_mark.webp'

const Search = () => {
  return (
    <div className='grid gap-2 p-5 bg-white fixed top-0 w-full'>
      <Image src={icon} alt='icon' height={20} width={40} className='flex place-content-center w-full h-10' />
      <div className='grid grid-cols-12 gap-5 items-center place-items-center'>
        <Image src={logo} alt='logo' width={20} height={20} className='col-span-2 bg-primary rounded-full h-9 w-9' />
        <input type="search" name="search" className='border-2 border-primary outline-none p-1 px-3 col-span-8 rounded-full' />
        <BsPlus className='col-span-2 text-3xl bg-primary text-white rounded-md' />
      </div>
    </div>
  )
}

export default Search
