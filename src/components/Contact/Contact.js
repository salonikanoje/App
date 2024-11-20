import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      // Send the form data to the backend
      const response = await axios.post("http://localhost:5000/api/submit", formData);
      console.log("Server Response:", response);

      // Check for successful response
      if (response.status === 200 && response.data?.success) {
        setShowModal(true);
        setError(false);
      } else {
        console.error("Unexpected Response Format:", response);
        setError(true);
      }
    } catch (err) {
      console.error("Submission Error:", err);
      setError(true);
    }

    // Clear form fields
    setFormData({ name: "", email: "", message: "" });
  };

  const handleClose = () => setShowModal(false);

  return (
    <Container fluid className="contact-section" id="contact">
      <Container className="contact-form-container p-4">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <h2 className="section-heading text-center mb-4">Get in Touch</h2>

            {/* Show error message if submission fails */}
            {error && (
              <div className="alert alert-danger text-center">
                Oops! Something went wrong. Please try again.
              </div>
            )}

            <Form onSubmit={handleSubmit} className="shadow-lg p-4 rounded">
              <Form.Group controlId="formName" className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="What's your Name?"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="mb-3">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="What's your Email?"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage" className="mb-3">
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Put in your thoughts..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <div className="text-center">
                <Button type="submit" className="contact-btn">
                  Send
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>

      {/* Modal for successful submission */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thank you! Your message has been sent successfully.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;
