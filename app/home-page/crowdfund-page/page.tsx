"use client"
import React from 'react'
import SearchBar from '../components/SearchBar'
import NavigationBar from '../components/NavigationBar'
import Poll from '../components/Poll'
import Items from '../components/Items'

const Page = () => {
  return (
    <div>
      <SearchBar />
      <div className='h-full overflow-y-scroll pb-28 bg-slate-100'>
        <Poll />
        <Items />
      </div>
      <NavigationBar />
    </div>
  )
}

export default Page
