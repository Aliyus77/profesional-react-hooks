import { useState } from 'react'
import Header from './components/Header'
import Characters from './components/Characters'
import './App.css'



function App() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => {
    document.documentElement.classList.toggle('dark')
    setDarkMode(!darkMode)
  }
  

  return (    
    <div className='flex flex-col items-center  dark:bg-gray-900 dark:text-gray-200 '>      
      <Header />
      <button
        className='bg-gray-700 dark:bg-gray-200 text-gray-100 dark:text-black w-40 border border-black rounded-lg mb-4'
        type='button'
        onClick={handleClick}
      >
        {darkMode ? 'to Light Mode' : 'to Dark Mode' }
      </button>               
      <Characters />     
    </div>
  )
}

export default App
