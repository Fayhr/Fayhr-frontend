import React from 'react'
import { AiOutlineBank } from 'react-icons/ai'
import { MdOutlineDownload } from 'react-icons/md'
import { BiTransferAlt } from 'react-icons/bi'

const WalletCard = () => {
  return (
    <div className='grid gap-5 p-5'>
        <p className='text-xl font-bold'>Hi Blacdav,</p>
        <div className='rounded-xl overflow-hidden'>
            <div className='text-white bg-primary h-24 p-5'>
                <p className='font-semibold'>Available Balance</p>
                <p className='text-2xl'>N150,000</p>
            </div>
            <div className='flex px-12 bg-white justify-between h-24 p-5 *:flex *:flex-col *:items-center *:gap-1'>
                <p className='text-primary text-3xl'><span className='bg-red-200 p-1 rounded-lg'><AiOutlineBank /></span><span className='text-black text-xs font-semibold'>Deposit</span></p>
                <p className='text-primary text-3xl'><span className='bg-red-200 p-1 rounded-lg'><MdOutlineDownload /></span><span className='text-black text-xs font-semibold'>Withdraw</span></p>
                <p className='text-primary text-3xl'><span className='bg-red-200 p-1 rounded-lg'><BiTransferAlt /></span><span className='text-black text-xs font-semibold'>Transfer</span></p>
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
