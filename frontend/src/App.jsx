import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {Home, Collections, About, Contact, Product, Cart, Login, PlaceOrder, Orders} from "./pages/index.js"
import { Navbar } from './components/index.js'
import Footer from './components/Footer.jsx'
import SearchBar from './components/SearchBar.jsx'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element = {<Collections />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/product/:productId' element = {<Product />} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/login' element = {<Login />} />
        <Route path='/place-order' element = {<PlaceOrder/>} />
        <Route path='/order' element = {<Orders />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App