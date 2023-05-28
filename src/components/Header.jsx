import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Header = () => {
  const color = useContext(ThemeContext)

  return (
    <div className='flex flex-col items-center dark:border-gray-600 p-4'>
      <h1 style={{color}} className='text-center font-bold text-lg mb-1'>React Hooks</h1>      
    </div>
  )
}

export default Header
