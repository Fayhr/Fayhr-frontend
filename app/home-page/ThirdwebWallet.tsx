'use client'
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import { client, chain } from "../utils/constant";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../components/Loader"

function ThirdwebWallet() {
      const [isLoading, setIsLoading] = useState(false);
      const router = useRouter();
      const pathname = usePathname();
      const account: any = useActiveAccount?.();

      useEffect(() => {
  
        if (pathname.startsWith("/home-page") && !account) {
              setIsLoading(true);
              router.push("/");
            }
      }, [account, router, pathname]);


      if (isLoading) {
        return <Loader />;
      }
          
  return (
    <div className="w-fit h-fit fixed top-[6.5rem] right-2 z-50">
      <ConnectButton
        client={client}
        chain={chain}
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
    </div>
  );
}

export default ThirdwebWallet
