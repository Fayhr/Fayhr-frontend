"use client";
import { ConnectButton, lightTheme, useActiveAccount } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";
import { client, chain, CONTRACT } from "../utils/constant";
const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "apple", "facebook"],
    },
  }),
];
function Test() {
//    const router = useRouter();
//    const { query } = router;
  const account: any = useActiveAccount?.();
   if (!account) {
     return <p>Loading...</p>;
   }

   return (
     <div>
       <h1>Welcome to the Dashboard</h1>
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
     </div>
   );
}

export default Test;
