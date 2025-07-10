import type { Card, CreateCardRequest } from '../types/card';
import { v4 as uuidv4 } from 'uuid';

const API_BASE_URL = 'http://localhost:3001';

class CardService {
  async getAllCards(): Promise<Card[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/cards`);
      if (!response.ok) {
        throw new Error('Failed to fetch cards');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching cards:', error);
      throw error;
    }
  }

  async getCardById(id: string): Promise<Card> {
    try {
      const response = await fetch(`${API_BASE_URL}/cards/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch card');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching card:', error);
      throw error;
    }
  }

  async createCard(cardData: CreateCardRequest): Promise<Card> {
    try {
      const newCard: Card = {
        id: uuidv4(),
        ...cardData,
        createdAt: new Date().toISOString(),
      };

      const response = await fetch(`${API_BASE_URL}/cards`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCard),
      });

      if (!response.ok) {
        throw new Error('Failed to create card');
      }

      return await response.json();
    } catch (error) {
      console.error('Error creating card:', error);
      throw error;
    }
  }

  async updateCard(id: string, cardData: Partial<Card>): Promise<Card> {
    try {
      const response = await fetch(`${API_BASE_URL}/cards/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cardData),
      });

      if (!response.ok) {
        throw new Error('Failed to update card');
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating card:', error);
      throw error;
    }
  }

  async deleteCard(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/cards/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete card');
      }
    } catch (error) {
      console.error('Error deleting card:', error);
      throw error;
    }
  }
}

export const cardService = new CardService();
