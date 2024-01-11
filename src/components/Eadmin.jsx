import React, { useState } from 'react'
import { uploadDetails } from '../services/allAPIs'

function Eadmin() {
  const [student, setStudent] = useState({
    id: "", name: "", age: "", course: ""
  })
  // console.log(student);
  const handleUpload = async () => {
    const { id, name, age, course } = student
    if (!id || !name || !age || !course) {
      alert('Please fill the form completely')
    } else {
      // make api call
      const response = await uploadDetails(student)
      console.log(response);
    }
  }
  return (
    <>

      <div>
        <h1 className='text-center text-dark m-5'>Student Registration Form</h1>
        <div className='container d-flex justify-content-center align-items-center flex-column'>
          <form className=' w-50'>
            <input type="text" className='form-control' placeholder='Enter ID' onChange={(e) => setStudent({ ...student, id: e.target.value })} />
            <input type="text" className='form-control mt-3' placeholder='Enter Your Name' onChange={(e) => setStudent({ ...student, name: e.target.value })} />
            <input type="text" className='form-control mt-3' placeholder='Enter Your Age' onChange={(e) => setStudent({ ...student, age: e.target.value })} />
            <input type="text" className='form-control mt-3' placeholder='Enter Your Course' onChange={(e) => setStudent({ ...student, course: e.target.value })} />

          </form>

          <button onClick={handleUpload} className='btn btn-primary mt-5 w-25'>Submit</button>

        </div>

      </div>


    </>
  )
}

export default Eadmin