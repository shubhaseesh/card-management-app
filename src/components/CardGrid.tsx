import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Card as CardType } from '../types/card';
import { Card } from './Card';
import './CardGrid.css';

interface CardGridProps {
  cards: CardType[];
  onDeleteCard: (id: string) => Promise<void>;
}

export const CardGrid: React.FC<CardGridProps> = ({ cards, onDeleteCard }) => {
  const [deletingCards, setDeletingCards] = useState<Set<string>>(new Set());

  const handleDeleteCard = async (id: string) => {
    setDeletingCards(prev => new Set([...prev, id]));
    
    try {
      await onDeleteCard(id);
    } catch (error) {
      console.error('Failed to delete card:', error);
      // Remove from deleting state if deletion failed
      setDeletingCards(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  if (cards.length === 0) {
    return (
      <motion.div 
        className="empty-state"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="empty-icon">📋</div>
        <h3>No cards yet</h3>
        <p>Click the "Add Card" button to create your first card.</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="card-grid"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatePresence mode="popLayout">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={itemVariants}
            layout
            layoutId={card.id}
          >
            <Card
              card={card}
              onDelete={handleDeleteCard}
              isDeleting={deletingCards.has(card.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};
