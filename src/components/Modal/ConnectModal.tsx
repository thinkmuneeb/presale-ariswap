import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
import Button from "../Button";

const ModalStyle = styled(Modal)`
  color: ${({ theme }) => theme.text.primary} !important;
  .modal-backdrop.show {
    opacity: 0.7;
  }

  .modal-title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .modal-dialog {
    max-width: 570px !important;
  }

  .modal-content {
    max-width: 570px !important;
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.background} !important;
  }
  .close {
    color: ${({ theme }) => theme.text.primary} !important;
  }

  .second-btn {
    margin-top: 20px;
  }
`;

const ConnectModal = ({ show, onHide }: any) => {
  return (
    <ModalStyle
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop={true}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Wallet:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="first-btn">
          <Button
            onClick={() => {
              alert("Please install Metamask wallet");
              onHide();
            }}
            text="Connect to Metamask"
          />
        </div>

        <div className="second-btn">
          <Button
            onClick={() => {
              alert("Please install Binance Smartchain Wallet");
              onHide();
            }}
            text="Connect to Binance Smart Chain"
          />
        </div>
      </Modal.Body>
    </ModalStyle>
  );
};

export default ConnectModal;
