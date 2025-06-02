import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-primary-500 py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            اتصل بنا
          </h1>
          <p className="text-white opacity-90 text-lg max-w-3xl mx-auto">
            نسعد بتواصلكم واستفساراتكم، ونعدكم بالرد في أقرب وقت ممكن
          </p>
        </div>
        
        {/* Contact Content */}
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-neutral-50 p-8 rounded-lg shadow-md"
              >
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">أرسل لنا رسالة</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        الاسم
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      الرسالة
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <Button variant="primary" type="submit" fullWidth>
                      إرسال الرسالة
                    </Button>
                  </div>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-neutral-800 mb-6">معلومات الاتصال</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-medium text-neutral-800">العنوان</h3>
                      <p className="mt-1 text-neutral-600">
                        سلطنة عمان - مسقط - ولاية بوشر - الخوير
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Phone className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-medium text-neutral-800">الهاتف</h3>
                      <p className="mt-1 text-neutral-600">+968 1234 5678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="mr-4">
                      <h3 className="text-lg font-medium text-neutral-800">البريد الإلكتروني</h3>
                      <p className="mt-1 text-neutral-600">info@alameria-school.com</p>
                    </div>
                  </div>
                </div>
                
                {/* Map Placeholder */}
                <div className="mt-8 h-64 bg-neutral-200 rounded-lg overflow-hidden">
                  <div className="h-full flex items-center justify-center bg-neutral-300 text-neutral-600">
                    <p>خريطة الموقع</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;