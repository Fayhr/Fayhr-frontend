"use client"
import React from 'react'
import SearchBar from './components/SearchBar'
import NavigationBar from './components/NavigationBar'
import Poll from './components/Poll'
import "./style.css"

const Page = () => {
  return (
    <main>
      <SearchBar />
<<<<<<< HEAD
      <div className='w-full px-5 h-full bg-slate-600 overflow-y-scroll mb-44 no-scroll'>
=======
      <div className='w-full h-full overflow-y-scroll bg-slate-100 mb-44'>
>>>>>>> a3d2ccbf4e6159a5d66db65dd4c02496f201b44c
        <Poll />
      </div>
      <NavigationBar />
    </main>
  )
}

export default Page
