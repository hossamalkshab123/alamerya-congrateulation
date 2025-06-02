import React from 'react';
import { BookOpen } from 'lucide-react';
import AdminSidebar from '../../components/admin/AdminSidebar';
import Button from '../../components/ui/Button';

const AdminSettingsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-100">
      <AdminSidebar />
      <div className="md:mr-64 p-6">
        <h1 className="text-2xl font-bold text-neutral-800 mb-6">إعدادات الموقع</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-xl font-medium text-neutral-800">إعدادات عامة</h2>
          </div>
          
          <div className="p-6 space-y-6">
            {/* Website Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-neutral-800">معلومات الموقع</h3>
              
              <div>
                <label htmlFor="websiteName" className="block text-sm font-medium text-neutral-700 mb-1">
                  اسم الموقع
                </label>
                <input
                  type="text"
                  id="websiteName"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="المدرسة العامرية القرآنية - بطاقات التهنئة"
                />
              </div>
              
              <div>
                <label htmlFor="websiteDescription" className="block text-sm font-medium text-neutral-700 mb-1">
                  وصف الموقع
                </label>
                <textarea
                  id="websiteDescription"
                  rows={3}
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="بطاقات تهنئة إلكترونية من المدرسة العامرية القرآنية لمختلف المناسبات"
                ></textarea>
              </div>
              
              <div>
                <label htmlFor="websiteLogo" className="block text-sm font-medium text-neutral-700 mb-1">
                  شعار الموقع
                </label>
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 bg-neutral-200 rounded-lg flex items-center justify-center text-neutral-400">
                    <BookOpen className="h-8 w-8" />
                  </div>
                  <Button variant="outline" size="sm">تغيير الشعار</Button>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="pt-6 border-t border-neutral-200 space-y-4">
              <h3 className="text-lg font-medium text-neutral-800">معلومات الاتصال</h3>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="info@alameria-school.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                  رقم الهاتف
                </label>
                <input
                  type="text"
                  id="phone"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="+968 1234 5678"
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                  العنوان
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="سلطنة عمان - مسقط - ولاية بوشر - الخوير"
                />
              </div>
            </div>
            
            {/* Social Media */}
            <div className="pt-6 border-t border-neutral-200 space-y-4">
              <h3 className="text-lg font-medium text-neutral-800">وسائل التواصل الاجتماعي</h3>
              
              <div>
                <label htmlFor="facebook" className="block text-sm font-medium text-neutral-700 mb-1">
                  فيسبوك
                </label>
                <input
                  type="text"
                  id="facebook"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="https://facebook.com/alameria"
                />
              </div>
              
              <div>
                <label htmlFor="instagram" className="block text-sm font-medium text-neutral-700 mb-1">
                  انستغرام
                </label>
                <input
                  type="text"
                  id="instagram"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="https://instagram.com/alameria"
                />
              </div>
              
              <div>
                <label htmlFor="twitter" className="block text-sm font-medium text-neutral-700 mb-1">
                  تويتر
                </label>
                <input
                  type="text"
                  id="twitter"
                  className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                  defaultValue="https://twitter.com/alameria"
                />
              </div>
            </div>
            
            <div className="pt-4">
              <Button variant="primary" type="button">
                حفظ الإعدادات
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSettingsPage;