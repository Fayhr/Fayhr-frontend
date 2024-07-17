"use client"
import React from 'react'
<<<<<<< HEAD
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { BsPersonCircle } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { GoHomeFill } from 'react-icons/go'
import Link from 'next/link'
=======
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoHomeFill, GoHome } from 'react-icons/go'
import { PiCurrencyCircleDollar, PiCurrencyCircleDollarFill } from 'react-icons/pi'
import { IoWallet, IoWalletOutline } from 'react-icons/io5'
import { BsPerson, BsPersonFill } from 'react-icons/bs'
>>>>>>> a3d2ccbf4e6159a5d66db65dd4c02496f201b44c

const NavigationBar = () => {
  const pathname = usePathname();
  const home = pathname === '/home-page'
  const crowdfund = pathname === '/home-page/crowdfund-page'
  const wallet = pathname === '/home-page/wallet'
  const profile = pathname === '/home-page/profile'
  
  return (
<<<<<<< HEAD
    <div className="bg-white text-primary flex justify-between py-5 px-10 text-4xl fixed bottom-0 w-screen *:text-center object-center">
      <p className="flex flex-col items-center justify-around gap-3">
        <GoHomeFill />
        <span className="text-xs text-black">Home</span>
      </p>
      <Link
        href="/home-page/crowdfund-page"
        className="flex flex-col items-center justify-around gap-3"
      >
        <PiCurrencyCircleDollar />
        <span className="text-xs text-black">Crowdfund</span>
      </Link>
      <p className="flex flex-col items-center justify-around gap-3">
        <IoWalletOutline />
        <span className="text-xs text-black">Wallet</span>
      </p>
      <p className="flex flex-col items-center justify-around gap-3">
        <BsPersonCircle />
        <span className="text-xs text-black">Profile</span>
      </p>
=======
    <div className='bg-white text-primary flex justify-between py-5 px-10 text-4xl fixed bottom-0 w-screen *:text-center object-center'>
      <Link href='/home-page/' className='flex flex-col items-center justify-around gap-3'>{home ? <GoHomeFill /> : <GoHome />}<span className='text-xs text-black'>Home</span></Link>
      <Link href='/home-page/crowdfund-page' className='flex flex-col items-center justify-around gap-3'>{crowdfund ? <PiCurrencyCircleDollarFill /> : <PiCurrencyCircleDollar />}<span className='text-xs text-black'>Crowdfund</span></Link>
      <Link href='/home-page/wallet' className='flex flex-col items-center justify-around gap-3'>{wallet ? <IoWallet /> : < IoWalletOutline />}<span className='text-xs text-black'>Wallet</span></Link>
      <Link href='/home-page/profile' className='flex flex-col items-center justify-around gap-3'>{profile ? <BsPersonFill /> : <BsPerson />}<span className='text-xs text-black'>Profile</span></Link>
>>>>>>> a3d2ccbf4e6159a5d66db65dd4c02496f201b44c
    </div>
  );
}

export default NavigationBar