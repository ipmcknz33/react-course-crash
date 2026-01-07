import "./Modal.css";

function Modal({ title, cancelModal, confirmModal }) {
  return (
    <>
      <div className="Modal">
        <p className="Modal__title">{title}</p>
        <div className="Modal__buttons">
          <button onClick={() => cancelModal()} className="btn btn__cancel">
            Cancel
          </button>
          <button onCClick={() => confirmModal()} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
