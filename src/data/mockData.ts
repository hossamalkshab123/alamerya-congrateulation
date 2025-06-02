import { Card, Category, User } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'عيد الفطر',
    icon: 'moon',
  },
  {
    id: '2',
    name: 'عيد الأضحى',
    icon: 'sheep',
  },
  {
    id: '3',
    name: 'تخرج',
    icon: 'graduation-cap',
  },
  {
    id: '4',
    name: 'مولود جديد',
    icon: 'baby',
  },
  {
    id: '5',
    name: 'زواج',
    icon: 'heart',
  },
  {
    id: '6',
    name: 'نجاح',
    icon: 'trophy',
  },
];

export const cards: Card[] = [
  {
    id: '1',
    title: 'بطاقة عيد الفطر',
    description: 'بطاقة تهنئة بمناسبة عيد الفطر المبارك',
    imageUrl: 'https://images.pexels.com/photos/2258355/pexels-photo-2258355.jpeg',
    category: '1',
    isPopular: true,
  },
  {
    id: '2',
    title: 'بطاقة عيد الأضحى',
    description: 'بطاقة تهنئة بمناسبة عيد الأضحى المبارك',
    imageUrl: 'https://images.pexels.com/photos/9085061/pexels-photo-9085061.jpeg',
    category: '2',
    isPopular: true,
  },
  {
    id: '3',
    title: 'تهنئة بالتخرج',
    description: 'بطاقة تهنئة بمناسبة التخرج',
    imageUrl: 'https://images.pexels.com/photos/7966425/pexels-photo-7966425.jpeg',
    category: '3',
  },
  {
    id: '4',
    title: 'مبارك المولود الجديد',
    description: 'بطاقة تهنئة بمناسبة المولود الجديد',
    imageUrl: 'https://images.pexels.com/photos/235127/pexels-photo-235127.jpeg',
    category: '4',
    isPopular: true,
  },
  {
    id: '5',
    title: 'تهنئة زواج',
    description: 'بطاقة تهنئة بمناسبة الزواج',
    imageUrl: 'https://images.pexels.com/photos/4125991/pexels-photo-4125991.jpeg',
    category: '5',
  },
  {
    id: '6',
    title: 'تهنئة بالنجاح',
    description: 'بطاقة تهنئة بمناسبة النجاح والتفوق',
    imageUrl: 'https://images.pexels.com/photos/3758105/pexels-photo-3758105.jpeg',
    category: '6',
    isPopular: true,
  },
  {
    id: '7',
    title: 'بطاقة عيد الفطر الذهبية',
    description: 'بطاقة تهنئة مميزة بمناسبة عيد الفطر المبارك',
    imageUrl: 'https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg',
    category: '1',
  },
  {
    id: '8',
    title: 'بطاقة تهنئة بالتخرج الذهبية',
    description: 'بطاقة تهنئة مميزة بمناسبة التخرج',
    imageUrl: 'https://images.pexels.com/photos/7966442/pexels-photo-7966442.jpeg',
    category: '3',
    isPopular: true,
  },
];

export const users: User[] = [
  {
    id: '1',
    name: 'أحمد محمد',
    role: 'admin',
    email: 'admin@example.com',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
  },
  {
    id: '2',
    name: 'فاطمة علي',
    role: 'user',
    email: 'user@example.com',
    avatar: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg',
  },
];