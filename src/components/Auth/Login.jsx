import React, { useState } from 'react'

const Login = ({handlelogin}) => {
  console.log()
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const SubmitHandler =(e)=>{
        e.preventDefault();
        handlelogin(email,password)
        setEmail("")
        setPassword("")
    }
  return (
    <div className = 'flex items-center justify-center h-screen w-screen'>
      <div className='border-2 rounded-xl border-emerald-600 p-20 '>
        <form 
        onSubmit={(e)=>{
SubmitHandler(e)
        }
        }
        className='flex flex-col items-center justify-center'>
            <input 
            value = {email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            required className=' text-white outline-none bg-transparent mt-5 placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl'  type="email" placeholder='Enter your Email' />
            <input 
            value = {password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
            required className='text-white outline-none bg-transparent mt-5 placeholder:text-gray-400 border-2 border-emerald-600 rounded-full py-3 px-5 text-xl'type="password" placeholder='Enter Password' />
            <button 
            
            className='mt-5 text-white outline-none border-none placeholder:text-white border-2 bg-emerald-600 rounded-full py-3 px-5 text-xl'>Log in</button>
        </form>
      </div>
    </div>
  )
}

export default Login
