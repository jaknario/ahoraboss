import React, { useState } from "react";
import { Modal, Button, Form, Alert, Spinner } from "react-bootstrap";
import emailjs from '@emailjs/browser';

export const ContactForm = ({ show, handleClose }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    // 👇 Reemplaza con tus claves de EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // ID del servicio
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // ID de la plantilla
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ nombre: "", email: "", mensaje: "" });
        },
        () => {
          setSuccess(false);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Contacto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {success === true && (
          <Alert variant="success">✅ Mensaje enviado correctamente</Alert>
        )}
        {success === false && (
          <Alert variant="danger">❌ Error al enviar, inténtalo de nuevo</Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Ingresa tu correo"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje..."
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={handleClose} className="me-2">
              Cerrar
            </Button>
            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? (
                <>
                  <Spinner animation="border" size="sm" /> Enviando...
                </>
              ) : (
                "Enviar"
              )}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ContactForm;
