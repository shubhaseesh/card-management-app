import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import './ErrorMessage.css';

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry }) => {
  return (
    <motion.div
      className="error-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="error-icon">
        <AlertTriangle size={48} />
      </div>
      <h3>Something went wrong</h3>
      <p>{message}</p>
      {onRetry && (
        <motion.button
          className="retry-button"
          onClick={onRetry}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <RefreshCw size={16} />
          Try Again
        </motion.button>
      )}
    </motion.div>
  );
};
