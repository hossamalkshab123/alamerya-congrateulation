export interface Card {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  isPopular?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface User {
  id: string;
  name: string;
  role: 'admin' | 'user';
  email: string;
  avatar?: string;
}

export interface CardCustomization {
  recipientName: string;
  senderName: string;
  message: string;
  cardId: string;
}