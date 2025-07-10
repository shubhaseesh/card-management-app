import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Layers } from 'lucide-react';
import './Header.css';

interface HeaderProps {
  onAddCard: () => void;
  cardCount: number;
}

export const Header: React.FC<HeaderProps> = ({ onAddCard, cardCount }) => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="header-content">
        <div className="header-left">
          <div className="logo">
            <Layers size={32} />
            <h1>Card Manager</h1>
          </div>
          <div className="card-count">
            <span>{cardCount} {cardCount === 1 ? 'card' : 'cards'}</span>
          </div>
        </div>
        
        <motion.button
          className="add-button"
          onClick={onAddCard}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Plus size={20} />
          Add Card
        </motion.button>
      </div>
    </motion.header>
  );
};
