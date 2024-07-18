import React, { useState } from 'react'
import Comments from './Comments'
import { BsBellFill } from 'react-icons/bs'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { BsHeart } from 'react-icons/bs'
import { BsSend } from 'react-icons/bs'

interface CommentMsg {
  comment: string;
}

const Poll: React.FC = () => {
  const [comment, setComment] = useState<boolean>(false);
  const [commentMsg, setCommentMsg] = useState<CommentMsg>({comment: ''});
  const pathname = usePathname();
  const showPoll = pathname === '/home-page/crowdfund-page'

  const handleComment = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentMsg({ comment: e.target.value });
  };

  return (
    <div className='h-full w-full px-5 pt-36 text-sm'>
      <div className={`${showPoll ? 'grid' : 'hidden'} gap-2 mb-4`}>
        <Link href='/home-page/notifications'><BsBellFill className='text-primary text-4xl mb-2' /></Link>
        <p>We have lots of interesting crowdfunding projects, contribute to a project that best meets your need, thank you!</p>
      </div>
      <div className={`${showPoll ? 'hidden' : 'grid'} gap-2 text-sm`}>
        <Link href='/home-page/notifications'><BsBellFill className='text-primary text-4xl mb-2' /></Link>
        <div>
          <p>Should we open a crowdfund for a bag of rice?</p>
          <p>current price is 78k</p>
        </div>
        <div className='grid gap-1'>
          <p className='flex bg-white w-full h-10 rounded-t-lg items-center overflow-hidden'><span className='bg-primary w-3/4 h-10'></span></p>
          <p className='flex bg-white w-full h-10 rounded-b-lg items-center overflow-hidden'><span className='bg-primary w-1/2 h-10'></span></p>
        </div>
        <div className='flex items-center gap-2 *:flex *:items-center *:gap-1'>
          <p><BsHeart className='font-bold' />26</p>
          <p className='w-1 h-1 rounded-full bg-black'></p>
          <p>26<span onClick={() => setComment(!comment)}>comment</span></p>
        </div>
        {
          comment && <div className='w-full'>
                        <form onSubmit={(e) => {e.preventDefault(); console.log(commentMsg)}} className='flex items-center gap-2 w-full'>
                          <input type="text" name="comment" id="comment" value={commentMsg.comment} onChange={handleComment} placeholder='write a comment...' className='w-full rounded-full p-1 px-3 outline-1 outline-primary border-2 border-primary' />
                          <button type="submit" className='text-2xl'><BsSend /></button>
                        </form>
                      </div>
        }
        <Comments />
      </div>
    </div>
  )
}

export default Poll
