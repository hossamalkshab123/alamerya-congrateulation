import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';
import Button from '../ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const isAdminPath = location.pathname.startsWith('/admin');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <BookOpen className="h-8 w-8 text-primary-500" />
                <span className="mr-2 text-lg font-bold text-primary-500">المدرسة العامرية القرآنية</span>
              </Link>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4 space-x-reverse">
            <Link to="/" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/' ? 'text-primary-500' : 'text-neutral-600 hover:text-primary-500'}`}>
              الرئيسية
            </Link>
            <Link to="/cards" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/cards' ? 'text-primary-500' : 'text-neutral-600 hover:text-primary-500'}`}>
              البطاقات
            </Link>
            <Link to="/about" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/about' ? 'text-primary-500' : 'text-neutral-600 hover:text-primary-500'}`}>
              عن المدرسة
            </Link>
            <Link to="/contact" className={`px-3 py-2 text-sm font-medium ${location.pathname === '/contact' ? 'text-primary-500' : 'text-neutral-600 hover:text-primary-500'}`}>
              اتصل بنا
            </Link>
            
            {isAdminPath ? (
              <Link to="/">
                <Button variant="outline" size="sm">العودة للموقع</Button>
              </Link>
            ) : (
              <Link to="/admin">
                <Button variant="primary" size="sm">لوحة التحكم</Button>
              </Link>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              type="button"
              className="text-neutral-600 hover:text-primary-500 focus:outline-none"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link 
              to="/" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/' ? 'bg-primary-50 text-primary-500' : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-500'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              الرئيسية
            </Link>
            <Link 
              to="/cards" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/cards' ? 'bg-primary-50 text-primary-500' : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-500'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              البطاقات
            </Link>
            <Link 
              to="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/about' ? 'bg-primary-50 text-primary-500' : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-500'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              عن المدرسة
            </Link>
            <Link 
              to="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === '/contact' ? 'bg-primary-50 text-primary-500' : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-500'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              اتصل بنا
            </Link>
            
            {isAdminPath ? (
              <Link 
                to="/" 
                className="block w-full px-3 py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" fullWidth>العودة للموقع</Button>
              </Link>
            ) : (
              <Link 
                to="/admin" 
                className="block w-full px-3 py-2 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="primary" fullWidth>لوحة التحكم</Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;