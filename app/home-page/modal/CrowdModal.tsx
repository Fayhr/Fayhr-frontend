import React from 'react'
import Link from 'next/link';
import img from '../../../public/image/Logo_Mark.webp'
import Image from 'next/image';

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
  itemDetails: {
    donations: string;
    description: string;
    raised: string;
  } | null;
  // children: React.ReactNode;
}

const CrowdModal: React.FC<ModalProps> = ({ isVisible, onClose, itemDetails }) => {
  if (!isVisible || itemDetails) return null;

  return (
    <div className=''>
      <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
        <div className='bg-white bottom-0 h-4/5 w-full rounded-t-xl px-5'>
          <p onClick={onClose} className='flex p-1 me-2 justify-end text-xl'>X</p>
          <div className='h-full pb-20 overflow-y-scroll no-scroll'>
            <Image src={img} alt="item image" width={20} placeholder='blur' className='w-full h-2/5 rounded-3xl' />
            <p className='font-bold text-xs mt-2'>we need 50 people to vote for this entry before we can create a crowdfund project for it.</p>
            <p className='text-sm font-semibold h-2 rounded-full overflow-hidden bg-yellow-500 my-2'></p>
            <p className='text-sm font-semibold mt-1'>N615,511 raised</p>
            <div className='flex gap-2 mt-5'>
              <button className='outline-none border-2 border-green-700 font-bold w-full rounded-full p-2 hover:bg-green-700 hover:text-white'>Share</button>
              <Link href='/home-page/contribute' className='outline-none border-2 border-green-700 text-center font-bold w-full rounded-full p-2 hover:bg-green-700 hover:text-white'>Contribute</Link>
            </div>
            <div className='grid gap-2 mt-5'>
              <div className='flex bg-slate-100 hover:border-2 hover:border-primary rounded-3xl py-3 px-5 justify-between items-center w-full'>
                <div className='flex gap-3 items-center'>
                  <Image src={img} alt='profile' width={5} height={5} className='w-10 h-10 rounded-full' />
                  <div className='text-xs'>
                    <h1 className='font-bold'>Blacdav</h1>
                    <p>9h ago</p>
                  </div>
                </div>
                <div>N6,000</div>
              </div>
              <div className='flex bg-slate-100 hover:border-2 hover:border-primary rounded-3xl py-3 px-5 justify-between items-center w-full'>
                <div className='flex gap-3 items-center'>
                  <Image src={img} alt='profile' width={5} height={5} className='w-10 h-10 rounded-full' />
                  <div className='text-xs'>
                    <h1 className='font-bold'>Blacdav</h1>
                    <p>9h ago</p>
                  </div>
                </div>
                <div>N6,000</div>
              </div>
              <div className='flex bg-slate-100 hover:border-2 hover:border-primary rounded-3xl py-3 px-5 justify-between items-center w-full'>
                <div className='flex gap-3 items-center'>
                  <Image src={img} alt='profile' width={5} height={5} className='w-10 h-10 rounded-full' />
                  <div className='text-xs'>
                    <h1 className='font-bold'>Blacdav</h1>
                    <p>9h ago</p>
                  </div>
                </div>
                <div>N6,000</div>
              </div>
              <div className='flex bg-slate-100 hover:border-2 hover:border-primary rounded-3xl py-3 px-5 justify-between items-center w-full'>
                <div className='flex gap-3 items-center'>
                  <Image src={img} alt='profile' width={5} height={5} className='w-10 h-10 rounded-full' />
                  <div className='text-xs'>
                    <h1 className='font-bold'>Blacdav</h1>
                    <p>9h ago</p>
                  </div>
                </div>
                <div>N6,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrowdModal
