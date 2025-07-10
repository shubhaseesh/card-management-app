import { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from './components/Header';
import { CardGrid } from './components/CardGrid';
import { AddCardModal } from './components/AddCardModal';
import { Loading } from './components/Loading';
import { ErrorMessage } from './components/ErrorMessage';
import { useCards } from './hooks/useCards';
import type { CreateCardRequest } from './types/card';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cards, loading, error, addCard, deleteCard, refreshCards } = useCards();

  const handleAddCard = async (cardData: CreateCardRequest) => {
    await addCard(cardData);
  };

  const handleDeleteCard = async (id: string) => {
    await deleteCard(id);
  };

  return (
    <div className="app">
      <Header 
        onAddCard={() => setIsModalOpen(true)}
        cardCount={cards.length}
      />
      
      <main className="main-content">
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage 
            message={error} 
            onRetry={refreshCards}
          />
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <CardGrid 
              cards={cards}
              onDeleteCard={handleDeleteCard}
            />
          </motion.div>
        )}
      </main>

      <AddCardModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddCard={handleAddCard}
      />
    </div>
  );
}

export default App;
