export interface Card {
  id: string;
  title: string;
  description: string;
  category: string;
  createdAt: string;
  color: string;
}

export interface CreateCardRequest {
  title: string;
  description: string;
  category: string;
  color: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

export type CardCategory = 'Welcome' | 'Work' | 'Education' | 'Personal' | 'Creative' | 'Other';

export const CARD_COLORS = [
  '#3B82F6', // Blue
  '#10B981', // Green
  '#F59E0B', // Amber
  '#EF4444', // Red
  '#8B5CF6', // Violet
  '#06B6D4', // Cyan
  '#F97316', // Orange
  '#84CC16', // Lime
] as const;

export const CARD_CATEGORIES: CardCategory[] = [
  'Welcome',
  'Work', 
  'Education',
  'Personal',
  'Creative',
  'Other'
];
