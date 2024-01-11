import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import { Form } from 'react-router-dom';

function Edit() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <button className='btn' onClick={handleShow}><i class="fa-solid fa-pen-to-square"></i></button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form>
        <input type="text" className='form-control mt-3' placeholder='Enter Your Name'/>
      <input type="text" className='form-control mt-3' placeholder='Enter Your Age'/>
      <input type="text" className='form-control mt-3' placeholder='Enter Your Course'/>

    </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit