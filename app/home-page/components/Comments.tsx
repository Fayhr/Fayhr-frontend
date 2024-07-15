import React from 'react'

const Comments = () => {
  return (
    <div className='grid gap-2 mt-3 text-xs'>
      <div className='flex items-center gap-2'>
        <img src="#" alt="#" className='bg-primary w-9 h-9 rounded-full' />
        <div>
            <p className='text-xs font-bold'>Micheal</p>
            <p className='text-xs'>9h ago</p>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex provident, facilis libero distinctio inventore consequuntur quidem nemo odit placeat laboriosam.</p>
      <div className='flex items-center gap-2'>
        <p>hearts 26 </p>
        <p className='w-1 h-1 rounded-full bg-black'></p>
        <p>26 comments</p>
      </div>
    </div>
  )
}

export default Comments
