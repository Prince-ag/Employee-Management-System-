import React from 'react'
import Header from '../others/Header'
import Tasknumber from '../others/Tasknumber'
import TaskList from '../Tasklist/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
       <Header/>
       <Tasknumber/>
       <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
