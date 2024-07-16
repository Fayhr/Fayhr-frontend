"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { FcGoogle } from "react-icons/fc";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import {
  TransactionButton,
  useReadContract,
  AutoConnect,
} from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { client, chain, CONTRACT } from "../utils/constant";
import { useRouter } from "next/navigation";
import { getUserEmail } from "thirdweb/wallets/in-app";


const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "apple", "facebook"],
    },
  }),
];
function HomePage() {
    const [accountConnected, setAccountConnected] = useState("");
    const [email, setEmail] = useState("");
     const router = useRouter();
     const account: any = useActiveAccount?.();

      useEffect(() => {
        setAccountConnected(account && account?.address);

        async function getEmail() {
          const email: any = await getUserEmail({ client });
          setEmail(email && email.toString());
        }
        getEmail();
        if (account && account.address) {
       
          router.push("/homeDashboard");
        }
      }, [account, router]);





  return (
    <>
      <Image
        src={"/image/logo.png"}
        alt="fayhr"
        width={400}
        height={300}
        quality={80}
        className="m-0 w-[5rem] h-[5rem] mb2"
      />
      <h1 className="text-[2rem] font-[800] text-center mb-3">
        Cheaper, Safer <br /> On Foodwish
      </h1>

      <div>
        <Link href="/sign-up" className="bg-primary text-white font-[500] px-6 py-2 rounded-3xl mt-12" > Sign up </Link>
        <Link href="/log-in" className="bg-primary text-white font-[500] px-6 py-2 rounded-3xl mt-12" >  Login </Link>
      </div>
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
    </>
  );
}

export default HomePage;
