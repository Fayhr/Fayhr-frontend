"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import { TransactionButton, useReadContract } from "thirdweb/react";
import { createWallet, walletConnect } from "thirdweb/wallets";
import {client, chain, CONTRACT} from "../utils/constant"
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { LuUnlock } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { useRouter } from "next/navigation";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  walletConnect(),
  createWallet("com.trustwallet.app"),
  createWallet("io.zerion.wallet"),
  createWallet("me.rainbow"),
];

function Login() {
  const [seePassword, setSeePassword] = useState(false);
  const [accountConnected, setAccountConnected] = useState(null);
  const router = useRouter();
  const account: any = useActiveAccount?.();

useEffect(() => {
  setAccountConnected(account);
  console.log(account);
}, [account])
    const {
      data: token,
      isLoading: loadingCount,
      refetch,
    } = useReadContract({
      contract: CONTRACT,
      method: "nextCrowdfundId",
    });
  const handleGoBack = () => {
    router.back();
  };

  return (
    <form className="w-full h-full  gap-y-[0.45rem] flex flex-col items-center">
      <MdArrowBackIosNew
        onClick={handleGoBack}
        className="absolute top-4  left-4 cursor-pointer"
      />

      <p className="text-[1.0625rem] font-[800] mt-6 mb-12">Log in</p>
      <div className="text-center w-full flex justify-center">
        <ConnectButton
          client={client}
          chain={chain}
          wallets={wallets}
          theme={lightTheme({
            colors: {
              primaryButtonBg: "#f2f1f3",
              primaryButtonText: "#141414",
            },
          })}
          connectModal={{
            size: "wide",
            title: "Fahyr ",
            titleIcon: "",
            welcomeScreen: {
              title:
                "Building the World's First Decentralized Consumer Cooperatives 🌊",
              img: {
                src: "https://i.postimg.cc/FF0q20JY/Mixed-Primary-Logo-PNG.png",
                width: 150,
                height: 150,
              },
            },
            showThirdwebBranding: false,
          }}
        />
      </div>
      {loadingCount ? <h2>...</h2> : <h2>{token}</h2>}
      <div className="w-full relative">
        <MdOutlineMailOutline className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        <input
          type="email"
          placeholder="Email address"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
      </div>

      <div className="w-full relative">
        {seePassword ? (
          <LuUnlock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        ) : (
          <LuLock className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] left-6 text-gray-400" />
        )}

        <input
          type={seePassword ? "text" : "password"}
          placeholder="Password"
          className="w-full h-[3rem] pl-12 bg-gray-100 border-gray-400 border-[0.1rem] rounded-md"
        />
        {seePassword ? (
          <FaRegEyeSlash
            className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] right-4 cursor-pointer text-gray-400"
            onClick={() => setSeePassword(false)}
          />
        ) : (
          <FaRegEye
            className="absolute top-[0.9rem] w-[1.2rem] h-[1.2rem] right-4 cursor-pointer text-gray-400"
            onClick={() => setSeePassword(true)}
          />
        )}
      </div>
      <Link
        href={"/forgot-password"}
        className="text-primary font-[500] text-[1rem] text-right cursor-pointer w-full"
      >
        Forgot password?
      </Link>

      <button
        type="submit"
        className="bg-primary w-full text-white font-[500] px-6 py-2 rounded-3xl mt-6"
      >
        Log in
      </button>

      <div className="w-full flex items-center justify-between mt-12 mb-6 text-gray-400">
        <hr className="w-[30%] border-[0.05rem] border-gray-400" />
        <p>Or log in with</p>
        <hr className="w-[30%] border-[0.05rem] border-gray-400" />
      </div>

      <Link href={""} className="w-[90%]">
        <div className="w-full rounded-[3.2rem] items-center h-[3rem] text-black border-gray-400 px-4 border-[0.1rem] flex justify-start gap-x-4 text-[0.9375rem] font-[500] ">
          <FcGoogle className="w-[1.5rem] h-[1.3rem]" />
          <p>Continue with Google</p>
        </div>
      </Link>
      <Link href={""} className="w-[90%]">
        <div className="w-full rounded-[3.2rem] items-center h-[3rem] text-black border-gray-400 px-4 border-[0.1rem] flex justify-start gap-x-4 text-[0.9375rem] font-[500] ">
          <Image
            src={"/svg/facebook.svg"}
            alt="facebook"
            width={400}
            height={300}
            quality={80}
            className="w-[1.5rem] h-[1.3rem]"
          />

          <p>Continue with Facebook</p>
        </div>
      </Link>

      <Link href={"/sign-up"} className="text-[1.0625rem] font-[800] mt-8">
        Sign up
      </Link>
    </form>
  );
}

export default Login;
