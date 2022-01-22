import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { modalBackdrop, modal } from "../../motion/variants";
import "./modal.css";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <AnimatePresence>
      {isModalOpen && (
        <motion.div
          className="modal-container"
          variants={modalBackdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="modal-content" variants={modal}>
            <p>
              A computer can potentially cheat by detecting repeated patterns
              while analysing your previous picks. However, in our app, we make
              sure the computer doesnt have access to your historic of choices
              because we use an eternal server to emulate the computer choice.
              So the computer cannot cheat! :)
            </p>
            <motion.button
              className="modal-btn"
              onClick={() => setIsModalOpen(false)}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 1000 }}
            >
              Keep Playing
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default Modal;
