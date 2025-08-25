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
          <i className="bi bi-envelope" style={{ fontSize: 25}}></i>
        </Nav.Link>
      </Navbar>

        {/* Modal */}
      <ContactForm show={showModal} handleClose={handleClose} />
    </>
  );
}

export default ButtonForm;
