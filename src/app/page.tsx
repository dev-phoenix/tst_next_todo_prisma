"use client";

import React, { useState } from 'react'

const Home = () => {
  const [inputValue, setInputValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
    console.log(inputValue)
  }


  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center'>
      <div className='font-bold text-xl'>
          Hell world
      </div>
      <form action="">
        <div className='flex flex-col gap-1'>
          <label htmlFor="">Task name</label>
          <input 
          type="text" 
          placeholder='Enter a task' 
          className='border border-white rounded-sm p-2'
          value={inputValue}
          onChange={onChange}/>
        </div>
        <button type='submit' className='mt-4 rounded-md border p-2 w-full bg-indigo-300 border-indigo-800 font-color-black'>Add</button>
      </form>
    </div>
  )
}

export default Home