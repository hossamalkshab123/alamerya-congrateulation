import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-800 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & About */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold mb-4">المدرسة العامرية القرآنية</h3>
            <p className="text-neutral-300 text-sm">
              نقدم خدمة بطاقات التهنئة الإلكترونية المميزة لجميع المناسبات، متاحة للجميع لمشاركة اللحظات السعيدة.
            </p>
            <div className="flex space-x-4 space-x-reverse pt-2">
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">الرئيسية</Link>
              </li>
              <li>
                <Link to="/cards" className="text-neutral-300 hover:text-white transition-colors">البطاقات</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">عن المدرسة</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">اتصل بنا</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">اتصل بنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin size={18} className="ml-2 text-secondary-400" />
                <span className="text-neutral-300">سلطنة عمان - مسقط</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="ml-2 text-secondary-400" />
                <span className="text-neutral-300">+968 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="ml-2 text-secondary-400" />
                <span className="text-neutral-300">info@alameria-school.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-8 pt-6">
          <p className="text-center text-neutral-400 text-sm">
            © {new Date().getFullYear()} المدرسة العامرية القرآنية. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;