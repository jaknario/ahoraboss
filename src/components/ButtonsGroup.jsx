import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ContactForm from "./ContactForm";

export const ButtonsGroup = ({ buttons }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (btn) => {
    if (btn.isContact) {
      setShowModal(true); // abre modal
    } else if (btn.url) {
      window.open(btn.url, "_blank"); // abre link externo
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center gap-3">
      {buttons.map((btn, idx) => (
        <Button
          key={idx}
          variant={btn.isContact ? "success" : "primary"}
          onClick={() => handleClick(btn)}
        >
          {btn.label}
        </Button>
      ))}

      {/* Modal con el formulario */}
      <ContactForm show={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};

export default ButtonsGroup;
