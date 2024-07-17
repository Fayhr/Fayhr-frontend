"use client"
import React from 'react'
import { PiCurrencyCircleDollar } from 'react-icons/pi'
import { BsPersonCircle } from 'react-icons/bs'
import { IoWalletOutline } from 'react-icons/io5'
import { GoHomeFill } from 'react-icons/go'
import Link from 'next/link'

const NavigationBar = () => {
  return (
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
    </div>
  );
}

export default NavigationBar
