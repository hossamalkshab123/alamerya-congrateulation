import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Activity, 
  FileImage, 
  Users, 
  Share2, 
  TrendingUp 
} from 'lucide-react';
import { cards, categories } from '../../data/mockData';

const stats = [
  {
    id: 1,
    name: 'إجمالي البطاقات',
    stat: cards.length,
    icon: <FileImage size={20} className="text-primary-500" />,
    change: '+12%',
    changeType: 'increase',
  },
  {
    id: 2,
    name: 'الفئات',
    stat: categories.length,
    icon: <Activity size={20} className="text-secondary-400" />,
    change: '+4%',
    changeType: 'increase',
  },
  {
    id: 3,
    name: 'المشاركات',
    stat: '285',
    icon: <Share2 size={20} className="text-green-500" />,
    change: '+18%',
    changeType: 'increase',
  },
  {
    id: 4,
    name: 'المستخدمين',
    stat: '24',
    icon: <Users size={20} className="text-blue-500" />,
    change: '+7%',
    changeType: 'increase',
  },
];

const Dashboard: React.FC = () => {
  const popularCards = cards.filter(card => card.isPopular).slice(0, 4);
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-neutral-800 mb-6">لوحة التحكم</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-neutral-500">{item.name}</p>
                <p className="mt-1 text-2xl font-bold text-neutral-900">{item.stat}</p>
              </div>
              <div className="p-2 bg-neutral-50 rounded-lg">
                {item.icon}
              </div>
            </div>
            <div className="mt-4 flex items-center">
              <TrendingUp size={16} className="text-green-500 ml-1" />
              <p className="text-sm text-green-500">{item.change}</p>
              <p className="text-sm text-neutral-500 mr-1">من الشهر الماضي</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
          <h2 className="text-xl font-medium text-neutral-800">النشاط الحديث</h2>
          <Link to="/admin/activity" className="text-sm text-primary-500 hover:text-primary-600">
            عرض الكل
          </Link>
        </div>
        <div className="divide-y divide-neutral-200">
          <div className="px-6 py-4">
            <p className="text-sm text-neutral-900">قام <span className="font-medium">أحمد محمد</span> بإضافة بطاقة تهنئة جديدة</p>
            <p className="text-xs text-neutral-500 mt-1">منذ 30 دقيقة</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm text-neutral-900">تمت مشاركة <span className="font-medium">بطاقة عيد الفطر</span> 15 مرة</p>
            <p className="text-xs text-neutral-500 mt-1">منذ ساعة واحدة</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm text-neutral-900">قامت <span className="font-medium">فاطمة علي</span> بتحديث فئة <span className="font-medium">عيد الأضحى</span></p>
            <p className="text-xs text-neutral-500 mt-1">منذ 3 ساعات</p>
          </div>
          <div className="px-6 py-4">
            <p className="text-sm text-neutral-900">تم إضافة <span className="font-medium">بطاقة تخرج</span> جديدة للموقع</p>
            <p className="text-xs text-neutral-500 mt-1">منذ 5 ساعات</p>
          </div>
        </div>
      </div>
      
      {/* Popular Cards */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4 border-b border-neutral-200 flex justify-between items-center">
          <h2 className="text-xl font-medium text-neutral-800">البطاقات الأكثر مشاركة</h2>
          <Link to="/admin/cards" className="text-sm text-primary-500 hover:text-primary-600">
            عرض الكل
          </Link>
        </div>
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
                المشاركات
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-neutral-200">
            {popularCards.map((card) => {
              const category = categories.find(c => c.id === card.category);
              
              return (
                <tr key={card.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-md object-cover" src={card.imageUrl} alt="" />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-neutral-900">{card.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-primary-100 text-primary-800">
                      {category?.name || 'غير مصنف'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                    {Math.floor(Math.random() * 100) + 20}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;