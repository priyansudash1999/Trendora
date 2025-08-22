import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from "./pages/Add.jsx"
import List from "./pages/List.jsx"
import Orders from "./pages/Orders.jsx"

const App = () => {
  return (
    <div className='bg-gray-50 min-h-screen'>

      <Navbar />
      <hr className='text-gray-300 border-dotted'/>
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base '>
          <Routes>
            <Route path='/add' element={<Add />}/>
            <Route path='/list' element={<List />}/>
            <Route path='/orders' element={<Orders />}/>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App