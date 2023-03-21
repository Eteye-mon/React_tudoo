import React from 'react'
import { BsFillTrash3Fill } from 'react-icons/bs';

const DisplayItem = ({ taskName, onclick, show,edit, bgColor}) => {
  return (
    <div className='rounded-xl p-3 bg-warning mb-3'  style={{display:show}}>
        <div className='d-flex justify-content-between align-items-center'>
            <div className=' d-flex '>
                <div className='h-25 w-25 rounded-pill bg-white p-2'></div>
                <div className='h-25 w-25 rounded-pill bg-white p-2 ms-n5'></div>
            </div>
           
        <div className='px-2 ' role="button" onClick={() => { onclick ()}}><BsFillTrash3Fill /></div>
        </div>
      <h2 className='fs-4 text-break fw-bold' title="Edit this Task" contentEditable onClick={() =>{edit()}}>{taskName}</h2>
    </div>
  )
}

export default DisplayItem