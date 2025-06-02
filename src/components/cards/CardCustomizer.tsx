import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Share2 } from 'lucide-react';
import Button from '../ui/Button';
import { Card as CardType, CardCustomization } from '../../types';
import { 
  FacebookShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon
} from 'react-share';

interface CardCustomizerProps {
  card: CardType;
}

const CardCustomizer: React.FC<CardCustomizerProps> = ({ card }) => {
  const [customization, setCustomization] = useState<CardCustomization>({
    recipientName: '',
    senderName: '',
    message: '',
    cardId: card.id
  });
  
  const [isPreview, setIsPreview] = useState(false);
  const [showShareButtons, setShowShareButtons] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCustomization(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const togglePreview = () => {
    setIsPreview(!isPreview);
    setShowShareButtons(false);
  };
  
  // Generate a mock URL for sharing purposes
  const shareUrl = `https://alameria-school.com/share/${card.id}`;
  const shareTitle = `بطاقة تهنئة من المدرسة العامرية القرآنية: ${card.title}`;
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="md:flex">
        {/* Card Preview */}
        <div className="md:w-1/2">
          <div className="relative h-full">
            <img 
              src={card.imageUrl} 
              alt={card.title} 
              className="w-full h-full object-cover object-center"
            />
            
            {isPreview && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-60 p-6 text-white">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-md mx-auto text-center"
                >
                  <h3 className="text-2xl font-bold mb-4">
                    {customization.recipientName ? `إلى ${customization.recipientName} المحترم` : 'إلى ...'}
                  </h3>
                  
                  <p className="mb-6 text-lg">
                    {customization.message || 'رسالتك هنا...'}
                  </p>
                  
                  <p className="text-right text-lg font-medium">
                    {customization.senderName ? `من ${customization.senderName}` : 'من ...'}
                  </p>
                </motion.div>
              </div>
            )}
          </div>
        </div>
        
        {/* Customization Form */}
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-neutral-800 mb-4">{card.title}</h2>
          <p className="text-neutral-600 mb-6">{card.description}</p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="recipientName" className="block text-sm font-medium text-neutral-700 mb-1">
                اسم المستلم
              </label>
              <input
                type="text"
                id="recipientName"
                name="recipientName"
                value={customization.recipientName}
                onChange={handleChange}
                className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                رسالة التهنئة
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={customization.message}
                onChange={handleChange}
                className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              ></textarea>
            </div>
            
            <div>
              <label htmlFor="senderName" className="block text-sm font-medium text-neutral-700 mb-1">
                اسم المرسل
              </label>
              <input
                type="text"
                id="senderName"
                name="senderName"
                value={customization.senderName}
                onChange={handleChange}
                className="w-full border-neutral-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                type="button" 
                variant={isPreview ? "outline" : "primary"}
                fullWidth
                onClick={togglePreview}
              >
                {isPreview ? 'العودة للتحرير' : 'معاينة البطاقة'}
              </Button>
              
              {isPreview && (
                <div className="relative inline-block text-left w-full sm:w-auto">
                  <Button 
                    type="button"
                    variant="secondary"
                    fullWidth
                    onClick={() => setShowShareButtons(!showShareButtons)}
                    className="flex items-center justify-center"
                  >
                    <Share2 size={18} className="ml-2" />
                    مشاركة البطاقة
                  </Button>
                  
                  {showShareButtons && (
                    <div className="absolute bottom-full mb-2 right-0 w-full sm:w-auto bg-white p-4 rounded-lg shadow-lg border border-neutral-200 z-50">
                      <div className="flex justify-center gap-4">
                        <FacebookShareButton url={shareUrl} quote={shareTitle}>
                          <FacebookIcon size={40} round />
                        </FacebookShareButton>
                        
                        <TwitterShareButton url={shareUrl} title={shareTitle}>
                          <TwitterIcon size={40} round />
                        </TwitterShareButton>
                        
                        <WhatsappShareButton url={shareUrl} title={shareTitle}>
                          <WhatsappIcon size={40} round />
                        </WhatsappShareButton>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CardCustomizer;