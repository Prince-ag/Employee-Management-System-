import React, { createContext, useEffect, useState } from 'react'
import { Getlocalstorage } from '../utils/LocalStorage'
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const[userdata, setUserdata] = useState(null)
    useEffect (()=>{
        
    const {Employee, Admin} = Getlocalstorage()
    setUserdata({Employee,Admin})
    },[]
    )
  return (
    <div>
        <AuthContext.Provider value = {userdata}>{children}</AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
