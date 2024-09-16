import "./style.css";
import Header from "./components/header/Header";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const data = {};

export default function App() {
  const [show, setShow] = useState(false);
  const handleShowModal = () => setShow(true);
  const handleCloseModal = () => setShow(false);

  return (
  <>
    <Header />
    <Button onClick={handleShowModal}> Click mee</Button>
    <Modal 
      show={show} 
      onHide={handleCloseModal}
      centered={true}
      size="lg"

    >
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>
      <Modal.Body>Body</Modal.Body>
      <Modal.Footer>
        <Button onClick={handleCloseModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  </>
  );
}

