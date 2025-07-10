import { useState, useEffect, useCallback } from 'react';
import type { Card, CreateCardRequest } from '../types/card';
import { cardService } from '../services/cardService';

interface UseCardsResult {
  cards: Card[];
  loading: boolean;
  error: string | null;
  addCard: (cardData: CreateCardRequest) => Promise<void>;
  deleteCard: (id: string) => Promise<void>;
  updateCard: (id: string, cardData: Partial<Card>) => Promise<void>;
  refreshCards: () => Promise<void>;
}

export const useCards = (): UseCardsResult => {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCards = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedCards = await cardService.getAllCards();
      setCards(fetchedCards);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch cards');
    } finally {
      setLoading(false);
    }
  }, []);

  const addCard = useCallback(async (cardData: CreateCardRequest) => {
    try {
      setError(null);
      const newCard = await cardService.createCard(cardData);
      setCards(prevCards => [...prevCards, newCard]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add card');
      throw err;
    }
  }, []);

  const deleteCard = useCallback(async (id: string) => {
    try {
      setError(null);
      await cardService.deleteCard(id);
      setCards(prevCards => prevCards.filter(card => card.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete card');
      throw err;
    }
  }, []);

  const updateCard = useCallback(async (id: string, cardData: Partial<Card>) => {
    try {
      setError(null);
      const updatedCard = await cardService.updateCard(id, cardData);
      setCards(prevCards => 
        prevCards.map(card => card.id === id ? updatedCard : card)
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update card');
      throw err;
    }
  }, []);

  const refreshCards = useCallback(async () => {
    await fetchCards();
  }, [fetchCards]);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return {
    cards,
    loading,
    error,
    addCard,
    deleteCard,
    updateCard,
    refreshCards,
  };
};
