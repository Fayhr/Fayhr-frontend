import React from 'react'
import { AiOutlineBank } from 'react-icons/ai'
import { MdOutlineDownload } from 'react-icons/md'
import { BiTransferAlt } from 'react-icons/bi'

const WalletCard = () => {
  return (
    <div className='grid gap-5 p-5'>
        <p>Hi Blacdav,</p>
        <div className='rounded-xl overflow-hidden'>
            <div className='text-white bg-primary h-20 p-5'>
                <p>Available Balance</p>
                <p className='text-2xl'>N150,000</p>
            </div>
            <div className='flex bg-white justify-between h-20 p-5 *:flex *:flex-col *:items-center'>
                <p className='text-primary text-5xl'><AiOutlineBank className='bg-red-200 rounded-lg' /><span className='text-black text-xs'>Deposit</span></p>
                <p className='text-primary text-5xl'><MdOutlineDownload className='bg-red-200 rounded-lg' /><span className='text-black text-xs'>Withdraw</span></p>
                <p className='text-primary text-5xl'><BiTransferAlt className='bg-red-200 rounded-lg' /><span className='text-black text-xs'>Transfer</span></p>
            </div>
        </div>
        <div className='flex justify-between items-center h-16 font-bold p-5 bg-white rounded-xl'>
            <p className='text-primary bg-red-200 py-1 px-2 rounded-full'>Refunds</p>
            <p className='text-xl'>N150,000</p>
            <button className='border py-1 px-4 border-black rounded-full'>Claim</button>
        </div>
    </div>
  )
}

export default WalletCard
