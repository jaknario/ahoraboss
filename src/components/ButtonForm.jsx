import React from 'react'
import { useState } from 'react'
import {  Navbar, Nav } from 'react-bootstrap';
import ContactForm from './ContactForm';

export const ButtonForm = () => {
  const [showModal, setshowModal] = useState(false);

  const handleShow = () => setshowModal(true);
  const handleClose = () => setshowModal(false);

  return (
    <>
      <Navbar>
        <Nav.Link onClick={handleShow}>
        <div className="img-icon">
          <i className="card-icon bi bi-envelope" style={{ fontSize: 25, color:"white"}} title='ahoraboss.soporte@gmail.com'></i>
        </div>
        </Nav.Link>
      </Navbar>

        {/* Modal */}
      <ContactForm show={showModal} handleClose={handleClose} />
    </>
  );
}

export default ButtonForm;
