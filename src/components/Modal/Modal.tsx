import React from "react";
import "./modal.css";
interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <p>
          A computer can potentially cheat by detecting repeated patterns while
          analysing your previous picks. However, in our app, we make sure the
          computer doesnt have access to your historic of choices because we use
          an eternal server to emullate the computer choice. So the computer
          cannot cheat! :)
        </p>
        <button className="modal-btn" onClick={() => setIsModalOpen(false)}>
          Keep Playing
        </button>
      </div>
    </div>
  );
};
export default Modal;
