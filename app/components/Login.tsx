"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import Image from "next/image";
import {
  TransactionButton,
  useReadContract,
  AutoConnect,
} from "thirdweb/react";
import {inAppWallet } from "thirdweb/wallets";
import {client, chain, CONTRACT} from "../utils/constant"
import { MdArrowBackIosNew } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { LuLock } from "react-icons/lu";
import { LuUnlock } from "react-icons/lu";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { getUserEmail } from "thirdweb/wallets/in-app";
import Loader from "./Loader";


const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "apple", "facebook"],
    },
  }),
];

function Login() {
 const [accountConnected, setAccountConnected] = useState("");
 const [isLoading, setIsLoading] = useState(false);
 const [email, setEmail] = useState("");
 const router = useRouter();
 const account: any = useActiveAccount?.();

 useEffect(() => {
   setAccountConnected(account && account?.address);
  if (account) {
      setIsLoading(true);
  }

   if (account && account.address) {
     router.push("/home-page");
   }
 }, [account, router]);




  const handleGoBack = () => {
    router.back();
  };

      if (isLoading) {
        return <Loader />;
      }

  return (
    <form className="w-full h-full  gap-y-[0.45rem] flex flex-col items-center">
      <MdArrowBackIosNew
        onClick={handleGoBack}
        className="absolute top-4  left-4 cursor-pointer"
      />

      <p className="text-[1.0625rem] font-[800] mt-6 mb-12">Log in</p>
      <AutoConnect client={client} timeout={10000} wallets={wallets} />
      <ConnectButton
        client={client}
        chain={chain}
        wallets={wallets}
        theme={lightTheme({
          colors: {
            primaryButtonBg: "#01A8F6",
            primaryButtonText: "#f2f1f3",
          },
        })}
        connectButton={{
          label: "Generate Wallet",
        }}
        connectModal={{
          title: "Fahyr",
          showThirdwebBranding: false,
        }}
      />
    </form>
  );
}

export default Login;
