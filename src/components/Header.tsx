import { Search, Menu, Waves, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage, Language } from '../LanguageContext';
import { useState } from 'react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  ];

  return (
    <header className="bg-[#000E55] text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="shrink-0 flex items-center gap-2 group">
            <div className="bg-[#FF690E] p-1.5 rounded-sm group-hover:rotate-12 transition-transform duration-300">
              <Waves className="w-6 h-6 text-[#000E55]" />
            </div>
            <span className="text-2xl font-bold tracking-[0.2em] font-sans">ATREA</span>
          </a>
          
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium tracking-wide uppercase">
            <a href="#" className="hover:text-blue-200 transition-colors">{t('nav_cruises')}</a>
            <a href="#" className="hover:text-blue-200 transition-colors uppercase">{t('nav_destinations')}</a>
            <a href="#" className="hover:text-blue-200 transition-colors uppercase">{t('nav_ships')}</a>
            <a href="#" className="hover:text-blue-200 transition-colors uppercase">{t('nav_deals')}</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="flex items-center gap-2 hover:text-blue-200 transition-colors px-3 py-1.5 rounded-lg border border-white/10 bg-white/5"
            >
              <Globe className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">{language}</span>
            </button>
            
            <AnimatePresence>
              {showLangMenu && (
                <>
                  <div className="fixed inset-0" onClick={() => setShowLangMenu(false)} />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden text-gray-900 z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm flex items-center justify-between transition-colors ${
                          language === lang.code ? 'bg-gray-50 text-[#000E55] font-bold' : 'hover:bg-gray-50'
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span>{lang.flag}</span>
                          {lang.label}
                        </span>
                        {language === lang.code && <div className="w-1.5 h-1.5 rounded-full bg-[#FF690E]" />}
                      </button>
                    ))}
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          <button className="hidden sm:flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
