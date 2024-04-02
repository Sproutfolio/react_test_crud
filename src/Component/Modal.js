import React from "react";


const Modal = ({ handleClose, modal, children }) => {
  const showHideClassName = modal ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
       <button className="btn btn-primary" onClick={() => handleClose()}>Clear</button>
      </div>
    </div>
  );
};

export default Modal;
