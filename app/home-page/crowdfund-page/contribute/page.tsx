"use client"
import React, { useEffect, useState } from 'react'
import { MdArrowLeft, MdArrowBack } from 'react-icons/md'
import NavigationBar from '../../components/NavigationBar'
import { useRouter } from 'next/navigation'
import { TransactionButton, useReadContract } from "thirdweb/react";
import { prepareContractCall, toWei } from "thirdweb";
import { CONTRACT, client, chain } from "../../../utils/constant";
import { ConnectButton, useActiveAccount, lightTheme } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet({
    auth: {
      options: ["google", "apple", "facebook"],
    },
  }),
];
const Page = () => {
  const [portion, setPortion] = useState(1);
  const [price, setPrice] = useState(400);
  const constantId = 1;

  useEffect(() => {
    const approveToken = () => {

      prepareContractCall({
        contract: CONTRACT,
        method: "approveToken",
      })

      console.log("Token Approved!");
    }

    approveToken();
  }, [])
  // const tp = ;
  // const [transportation, setTransportation] = useState(price * 0.1);
  const router = useRouter();

  const delegateComplete = () => {
    window.alert("success!");
  }
const delegateNotComplete = (err : any) => {
    window.alert(`no success! ${err.message}`);
  }
  const {
    data: isActive,
    isLoading: loadingPrice,
    refetch: pricefetch,
  } = useReadContract({
    contract: CONTRACT,
    method: "isActive",
  });
  return (
    <div>
      <div className="flex *:font-semibold gap-3 items-center p-5">
        <MdArrowBack onClick={() => router.back()} />
        <span>Contribute</span>
      </div>

      {/* <div className="w-fit h-fit fixed top-2 right-2">
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
      </div> */}
      <div className="px-5">
        <h1 className="font-bold">Description</h1>
        <p className="text-sm mt-3">
          A little short description of whatever the fuck you think this shit is
          all about.
        </p>
      </div>
      <div className="px-5 mt-2">
        <h1 className="font-bold">Portions</h1>
        <div className="grid gap-7 mt-3">
          <div className="flex gap-3 mt-3">
            <button
              onClick={() => {
                setPortion(portion + 1);
                setPrice(portion * price);
              }}
              className="w-full border-2 rounded-xl p-2"
            >
              {portion}
            </button>
            <button className="w-full border-2 rounded-xl p-2">N{price}</button>
          </div>
          <input type="range" name="" className="h-1" />
          <div>
            <h1 className="font-bold">Your Contribution</h1>
            <div className="flex *:font-bold *:text-sm justify-between mt-4">
              <p>{portion} Portion</p>
              <p>N{price}</p>
            </div>
            <div className="flex *:font-bold *:text-sm justify-between mt-2">
              <p>Transportation fee</p>
              <p>N150</p>
            </div>
            <div className="flex *:font-bold justify-between mt-8">
              <p>Total cost</p>
              <p>N{price}</p>
            </div>
          </div>

          {loadingPrice ? (
            <h2>...</h2>
          ) : (
            <h2>{isActive === true ? 'True' : 'False'}</h2>
          )}
          <TransactionButton
            transaction={() => {
              return  prepareContractCall({
        contract: CONTRACT,
        method: "approveToken",
  })}}
            onError={(err) => window.alert(err)}
            onTransactionSent={() => window.alert("Token Approve successfully sent")}
            onTransactionConfirmed={() => window.alert('Token Approved')}
            style={{ backgroundColor: "#01A8F6", color: "#ffffff" }}
            className="bg-primary text-white p-3 rounded-full"
          >
            Approve Token
          </TransactionButton>  
          
          {/* <TransactionButton
            transaction={() => {
              return prepareContractCall({
                contract: CONTRACT,
                method: "delegateToken",
                params: [BigInt(constantId), BigInt(constantId)],

                // params: [
                //   BigInt(toWei(constantId.toString())),
                //   BigInt(toWei(constantId.toString())),
                // ],
              });
            }}
            onError={(err) => delegateNotComplete(err)}
            onTransactionSent={() => window.alert("Delegate sent")}
            onTransactionConfirmed={() => delegateComplete()}
            style={{ backgroundColor: "#01A8F6", color: "#ffffff" }}
            className="bg-primary text-white p-3 rounded-full"
          >
            Continue
          </TransactionButton> */}
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}

export default Page
