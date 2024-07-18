import React, { useState } from 'react'
import { BsHeart } from 'react-icons/bs'
import { BsSend } from 'react-icons/bs';
import Image from 'next/image';
import profile from '../../../public/image/Logo_Mark.webp'

interface ReplyMsg {
  reply: string;
}

const Comments: React.FC = () => {
  const [reply, setReply] = useState<boolean>(false);
  const [replyMsg, setReplyMsg] = useState<ReplyMsg>({reply: ''});

  const handleReply = (e: React.ChangeEvent<HTMLInputElement>) => {
    // e.preventDefault();
  
    setReplyMsg({reply: e.target.value})
  }

  return (
    <div className='grid gap-2 mt-3 text-sm pb-3'>
      <div className='flex items-center gap-2'>
        <Image src={profile} alt="user profile" className='bg-primary w-9 h-9 rounded-full' />
        <div>
            <p className='text-xs font-bold'>Micheal</p>
            <p className='text-xs'>9h ago</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident, facilis libero distinctio inventore consequuntur quidem nemo odit placeat laboriosam.</p>
      <div className='flex items-center gap-2 *:flex *:items-center *:gap-1'>
        <p><BsHeart className='font-bold' />26</p>
        <p className='w-1 h-1 rounded-full bg-black'></p>
        <p>26 <span onClick={() => setReply(!reply)}>reply</span></p>
      </div>
      {
        reply && <div>
                    <form className='flex gap-2 w-full items-center'>
                      <input type="text" name="reply" id="reply" value={replyMsg.reply} onChange={handleReply} placeholder='write a reply...' className='w-full rounded-full p-1 px-3 outline-1 outline-primary border-2 border-primary' />
                      <button type="submit" className='text-2xl'><BsSend /></button>
                    </form>
                  </div>
      }
    </div>
  )
}

export default Comments
