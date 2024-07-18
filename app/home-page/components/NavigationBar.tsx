"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoHomeFill, GoHome } from "react-icons/go";
import {
  PiCurrencyCircleDollar,
  PiCurrencyCircleDollarFill,
} from "react-icons/pi";
import { IoWallet, IoWalletOutline } from "react-icons/io5";
import { BsPerson, BsPersonFill } from "react-icons/bs";

const NavigationBar = () => {
  const pathname = usePathname();
  const home = pathname === "/home-page";
  const crowdfund = pathname === "/home-page/crowdfund-page";
  const wallet = pathname === "/home-page/wallet";
  const profile = pathname === "/home-page/profile";

  return (
    <div className="bg-white text-primary flex justify-between py-5 px-10 text-4xl fixed bottom-0 w-screen *:text-center object-center">
      <Link
        href="/home-page/"
        className="flex flex-col items-center justify-around gap-3"
      >
        {home ? <GoHomeFill /> : <GoHome />}
        <span className="text-xs text-black">Home</span>
      </Link>
      <Link
        href="/home-page/crowdfund-page"
        className="flex flex-col items-center justify-around gap-3"
      >
        {crowdfund ? (
          <PiCurrencyCircleDollarFill />
        ) : (
          <PiCurrencyCircleDollar />
        )}
        <span className="text-xs text-black">Crowdfund</span>
      </Link>
      <Link
        href="/home-page/wallet"
        className="flex flex-col items-center justify-around gap-3"
      >
        {wallet ? <IoWallet /> : <IoWalletOutline />}
        <span className="text-xs text-black">Wallet</span>
      </Link>
      <Link
        href="/home-page/profile"
        className="flex flex-col items-center justify-around gap-3"
      >
        {profile ? <BsPersonFill /> : <BsPerson />}
        <span className="text-xs text-black">Profile</span>
      </Link>
    </div>
  );
};

export default NavigationBar;
