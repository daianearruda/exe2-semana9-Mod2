import { Modal, Button } from 'react-bootstrap';

export function ModalComponent({ show, handleClose }) {
  return (
    
    <Modal
      show={show}
      onHide={handleClose}
      centered>
      <Modal.Header>
        <Modal.Title>Idade não permitida</Modal.Title>
        <Button
          variant="close"
          onClick={handleClose}
        />
      </Modal.Header>
      <Modal.Body>
        Relaxe, o tempo passa rápido!
      </Modal.Body>
    </Modal>
  );
}
