import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ChevronRight, Waves } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

interface SelectionPageProps {
  onSelect: (city: string) => void;
}

export const SelectionPage: React.FC<SelectionPageProps> = ({ onSelect }) => {
  const { t, language } = useLanguage();

  const options = [
    {
      city: 'İstanbul',
      value: 'İstanbul',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=1200&auto=format&fit=crop',
      description: t('select_istanbul')
    },
    {
      city: 'Kuşadası',
      value: 'Kuşadası',
      image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200&auto=format&fit=crop',
      description: t('select_kusadasi')
    }
  ];

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-6 bg-gray-50">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 max-w-2xl"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#000E55] text-white mb-6 shadow-xl shadow-blue-900/20">
          <Waves className="w-8 h-8" />
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-[#000E55] mb-4 tracking-tight uppercase">
          {t('choose_departure_title')}
        </h1>
        <p className="text-gray-500 text-lg">
          {t('choose_departure_subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {options.map((option, idx) => (
          <motion.button
            key={option.city}
            initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onSelect(option.value)}
            className="group relative h-[400px] rounded-3xl overflow-hidden shadow-2xl transition-transform hover:-translate-y-2 active:scale-[0.98]"
          >
            <img 
              src={option.image} 
              alt={option.city}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#000E55] via-[#000E55]/20 to-transparent" />
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-white/70 text-sm font-bold uppercase tracking-widest">{t('leaving_from')}</span>
              </div>
              <h2 className="text-4xl font-black text-white mb-4 tracking-tight">
                {option.city.toLocaleUpperCase(language === 'tr' ? 'tr-TR' : 'en-US')}
              </h2>
              <div className="flex items-center justify-between">
                <span className="bg-orange-500 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-orange-500 transition-colors">
                  {t('view_journey')}
                </span>
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-[#000E55] transition-all">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}
