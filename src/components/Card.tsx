import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, Calendar, Tag } from 'lucide-react';
import type { Card as CardType } from '../types/card';
import './Card.css';

interface CardProps {
  card: CardType;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
}

export const Card: React.FC<CardProps> = ({ card, onDelete, isDeleting = false }) => {
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete(card.id);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ 
        opacity: isDeleting ? 0.5 : 1, 
        scale: isDeleting ? 0.95 : 1,
        y: 0 
      }}
      exit={{ 
        opacity: 0, 
        scale: 0.8, 
        x: -100,
        transition: { duration: 0.3 }
      }}
      whileHover={{ 
        scale: 1.02,
        y: -5,
        transition: { duration: 0.2 }
      }}
      className="card"
      style={{ '--card-color': card.color } as React.CSSProperties}
    >
      <div className="card-header">
        <div className="card-category">
          <Tag size={14} />
          <span>{card.category}</span>
        </div>
        <motion.button
          className="delete-button"
          onClick={handleDelete}
          disabled={isDeleting}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={`Delete ${card.title}`}
        >
          <Trash2 size={16} />
        </motion.button>
      </div>
      
      <div className="card-content">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-description">{card.description}</p>
      </div>
      
      <div className="card-footer">
        <div className="card-date">
          <Calendar size={14} />
          <span>{formatDate(card.createdAt)}</span>
        </div>
      </div>
      
      <div className="card-accent" />
    </motion.div>
  );
};
