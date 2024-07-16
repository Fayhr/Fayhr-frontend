import React from 'react'
import Comments from './Comments'
import { BsBellFill } from 'react-icons/bs'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'

const Poll = () => {
  const router = useRouter();
  const pathname = usePathname();
  // const { pathname } = router;
  const showPoll = pathname === '../home-page/crowdfund-page/page.tsx'

  return (
    <div>
      <div className='grid gap-2 px-5 pt-36'>
        <BsBellFill className='text-primary text-4xl mb-2' />
        <div>
          <p>Should we open a crowdfund for a bag of rice?</p>
          <p>current price is 78k</p>
        </div>
        <div className={`${showPoll ? 'hidden' : 'grid'} gap-2`}>
          <p className='flex bg-primary w-3/4 h-10 rounded-lg justify-center items-center'>Yes</p>
          <p className='flex bg-primary w-1/2 h-10 rounded-lg justify-center items-center'>No</p>
        </div>
        <div className={`${showPoll ? 'hidden' : 'flex'} items-center gap-2`}>
          <p>hearts 26 </p>
          <p className='w-1 h-1 rounded-full bg-black'></p>
          <p>26 comments</p>
        </div>
        <Comments />
      </div>
    </div>
  )
}

export default Poll
