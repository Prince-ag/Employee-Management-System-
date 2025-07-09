import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { Getlocalstorage, Setlocalstorage } from './utils/LocalStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user,setUser] = useState(null)

  const handlelogin = (email,password) =>{
    if(email == 'admin@me.com' && password == '123'){
      setUser('Admin')
    }
    else if(email == 'user@me.com'  && password =='123'){
      setUser('Employee')
    }
    else{
      alert("Invalid credentials")
    }
  }

  const data = useContext(AuthContext)
  console.log(data)
  return (
    <>
    {!user? <Login handlelogin = {handlelogin}/> : ''}
    {user=='Admin' ? <AdminDashboard/>:<EmployeeDashboard/>}
    {/* <EmployeeDashboard/> */}
    {/* <AdminDashboard/> */}

    </>
  )
}

export default App
