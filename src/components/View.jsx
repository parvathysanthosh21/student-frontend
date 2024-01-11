import React from 'react'
import Edit from './Edit'

function View() {
  return (
   <>
      <div>
        <h1 className='text-center mt-5'>Student Details</h1>
      </div>
      <div className='container mt-5'>
    <table className='table'>
      <thead>
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Age</td>
          <td>Course</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Maya</td>
          <td>23</td>
          <td>BCA</td>

          <td>
           <div className='d-flex'>
              <Edit/>
              <button className='btn '><i class="fa-solid fa-trash"></i></button>
           </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
   </>
  )
}

export default View