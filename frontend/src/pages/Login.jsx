import React, { useState } from 'react'

const Login = () => {

  const [currState, setCurrState] = useState(('Login'))

  const onSubmitHandler = async(e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='text-3xl font-semibold'>{currState}</p>
        <hr className='border-none h-[1.5px] w-8  bg-gray-800'/>
      </div>
      {currState === 'Login' ? '' : <input type="text" className='w-full px-3 py-2 border border-gray-600' placeholder='Name' required/>}
      <input type="email" className='w-full px-3 py-2 border border-gray-600' placeholder='Email' required/>
      <input type="password" className='w-full px-3 py-2 border border-gray-600' placeholder='password' required/>

      <div className='w-full  flex justify-between text-sm mt-[-8px]'>
        {currState === 'Login' ? <p className='cursor-pointer active:text-blue-500'>Forgot Password ?</p> : ''}
        {
          currState === 'Login' ? 
                                <p onClick={() => setCurrState('Signup')}  className='cursor-pointer active:text-blue-500'>Create Account</p> 
                                : 
                                <p onClick={() => setCurrState('Login')} className='cursor-pointer active:text-blue-500'>Login here</p>
        }
      </div>
      <button  className='bg-black text-white font-light px-8 py-2 rounded-lg cursor-pointer'>{currState === 'Login' ? 'SignIn' : 'Sign Up'}</button>
    </form>

  )
}

export default Login