import React, { useState } from 'react';
import { Pencil, Trash, Plus, FileImage } from 'lucide-react';
import Button from '../ui/Button';
import { cards, categories } from '../../data/mockData';

const CardManagement: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-neutral-800">إدارة البطاقات</h1>
        <Button variant="primary" className="flex items-center">
          <Plus size={18} className="ml-1" />
          إضافة بطاقة جديدة
        </Button>
      </div>
      
      {/* Cards Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  البطاقة
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  العنوان
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  الفئة
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  مميزة
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  الإجراءات
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              {cards.map((card) => {
                const category = categories.find(c => c.id === card.category);
                
                return (
                  <tr key={card.id} className="hover:bg-neutral-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-md object-cover" src={card.imageUrl} alt="" />
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-neutral-900">{card.title}</div>
                      <div className="text-xs text-neutral-500">{card.description.substring(0, 30)}...</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                        {category?.name || 'غير مصنف'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex rounded-full h-2 w-2 ${card.isPopular ? 'bg-green-500' : 'bg-neutral-300'}`}></span>
                      <span className="mr-2 text-sm text-neutral-500">
                        {card.isPopular ? 'نعم' : 'لا'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
                      <button className="text-primary-600 hover:text-primary-900 ml-3">
                        <Pencil size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CardManagement;