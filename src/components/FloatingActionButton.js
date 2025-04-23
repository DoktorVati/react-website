import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaComment } from 'react-icons/fa';

const FloatingActionButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fab-container">
      {isOpen && (
        <motion.div 
          className="fab-options"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <button className="fab-option" onClick={scrollToTop}>
            <FaArrowUp />
          </button>
          <button className="fab-option">
            <FaComment />
          </button>
        </motion.div>
      )}
      
      <motion.button 
        className="fab-main"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
        >
          +
        </motion.div>
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;