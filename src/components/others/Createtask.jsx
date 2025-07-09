import React from 'react'

const Createtask = () => {
  return (
   <div className='w-full p-7'>
            <form className='text-white flex flex-wrap w-full items-start justify-between'>
                <div className='w-1/2 '>
                <div>
                <h3 className='text-white text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className = 'text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder='Make a ui design' />
                </div>
                <div>
                <h3 className='text-white text-sm text-gray-300 mb-0.5'>Date</h3>
                <input className = 'text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="date" />
                </div>
                <div>
                <h3 className='text-white text-sm text-gray-300 mb-0.5'>Assign to</h3>
                <input className = 'text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]'  type="text" placeholder='Employee Name' />
                </div>
                <div>
                <h3>Categroies</h3>
                <input className = 'text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' type="text" placeholder = 'Design, dev, etc....' />
                </div>
                </div>
                <div className='w-1/2'>
                <h3 className='text-white text-sm text-gray-300 mb-0.5'>Description</h3>
                <textarea className = 'text-white text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]' name="" id=""></textarea>
                <button className='text-white bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
                </div>
            </form>
        </div>
  )
}

export default Createtask
