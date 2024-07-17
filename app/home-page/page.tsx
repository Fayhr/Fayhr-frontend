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
      <div className='w-full h-full overflow-y-scroll bg-slate-100 mb-44'>
        <Poll />
      </div>
      <NavigationBar />
    </main>
  )
}

export default Page
