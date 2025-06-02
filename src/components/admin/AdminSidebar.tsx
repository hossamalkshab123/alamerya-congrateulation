import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileImage, 
  Users, 
  Settings,
  LogOut 
} from 'lucide-react';

interface SidebarLinkProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, icon, label, isActive }) => {
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-3 mb-1 rounded-lg ${
        isActive 
          ? 'bg-primary-500 text-white' 
          : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-500'
      }`}
    >
      <span className="ml-3">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <aside className="w-64 bg-white h-screen shadow-md fixed top-0 right-0 z-10">
      <div className="p-4 border-b border-neutral-200">
        <h1 className="text-xl font-bold text-primary-500">لوحة التحكم</h1>
        <p className="text-sm text-neutral-500">المدرسة العامرية القرآنية</p>
      </div>
      
      <nav className="p-4">
        <div className="mb-6">
          <SidebarLink 
            to="/admin" 
            icon={<LayoutDashboard size={20} />} 
            label="الرئيسية"
            isActive={pathname === '/admin'} 
          />
          <SidebarLink 
            to="/admin/cards" 
            icon={<FileImage size={20} />} 
            label="البطاقات"
            isActive={pathname === '/admin/cards'} 
          />
          <SidebarLink 
            to="/admin/users" 
            icon={<Users size={20} />} 
            label="المستخدمين"
            isActive={pathname === '/admin/users'} 
          />
          <SidebarLink 
            to="/admin/settings" 
            icon={<Settings size={20} />} 
            label="الإعدادات"
            isActive={pathname === '/admin/settings'} 
          />
        </div>
        
        <div className="pt-4 mt-4 border-t border-neutral-200">
          <Link
            to="/"
            className="flex items-center px-4 py-3 rounded-lg text-red-500 hover:bg-red-50"
          >
            <LogOut size={20} className="ml-3" />
            <span>تسجيل الخروج</span>
          </Link>
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;