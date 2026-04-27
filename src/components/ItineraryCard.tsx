import { ChevronRight, Ship, Anchor } from 'lucide-react';
import type { Itinerary } from '../types';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export interface ItineraryCardProps {
  itinerary: Itinerary;
  onViewJourney: (itinerary: Itinerary) => void;
}

export function ItineraryCard({ itinerary, onViewJourney }: ItineraryCardProps) {
  const { t, language } = useLanguage();

  const destination = itinerary.translations?.[language]?.destination || itinerary.destination;
  const description = itinerary.translations?.[language]?.description || itinerary.description;
  const leavingFrom = itinerary.translations?.[language]?.leavingFrom || itinerary.leavingFrom;
  const arrivalPort = itinerary.translations?.[language]?.disembarkationPort || itinerary.disembarkationPort;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4 }}
      className="bg-white group overflow-hidden flex flex-col lg:flex-row mb-12 shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 rounded-xl"
    >
      {/* Picture Section */}
      <div className="lg:w-[40%] relative overflow-hidden">
        <motion.img 
          src={itinerary.imageUrl} 
          alt={itinerary.shipName} 
          className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-6 left-6 bg-[#000E55]/90 backdrop-blur-md px-4 py-1.5 text-white font-bold text-xs uppercase tracking-[0.2em] rounded-full">
          {destination}
        </div>
        <div className="absolute bottom-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md p-2 rounded-lg border border-white/20">
          <img 
            src={itinerary.mapUrl} 
            alt="Route Map" 
            className="w-16 h-16 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-light text-[#000E55] tracking-tight leading-tight max-w-[280px] sm:max-w-none">
                <span className="font-bold">{destination}</span> {itinerary.durationNights} {t('nights')}
              </h2>
              <div className="flex items-center gap-2 text-gray-500 mt-2">
                <Ship className="w-4 h-4 text-[#FF690E]" />
                <span className="font-semibold text-sm uppercase tracking-wider">{itinerary.shipName}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest block mb-1">{t('starting_from')}</span>
              <div className="text-3xl font-bold text-[#000E55]">
                <span className="text-sm font-medium mr-1">$</span>
                {itinerary.priceFrom}
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl">
            {description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col border-l-2 border-gray-100 pl-4">
              <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-1">{t('leaving_from')}</span>
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-[#000E55]" />
                <span className="font-semibold text-[#000E55]">{leavingFrom}</span>
              </div>
            </div>
            <div className="flex flex-col border-l-2 border-gray-100 pl-4">
              <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mb-1">{t('arrival_port')}</span>
              <div className="flex items-center gap-2">
                <Anchor className="w-4 h-4 text-gray-400" />
                <span className="font-semibold text-gray-600">{arrivalPort}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest block mb-4">
              {itinerary.dates.length > 1 ? t('upcoming_sailings') : t('available_date')}
            </span>
            <div className="flex flex-wrap gap-2">
              {itinerary.dates.map((date, idx) => (
                <motion.span 
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-50 border border-gray-100 px-4 py-2 rounded-lg font-bold text-xs text-[#000E55] cursor-default hover:bg-white hover:shadow-sm transition-all"
                >
                  {date}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-end pt-8 border-t border-gray-50">
          <button 
            onClick={() => onViewJourney(itinerary)}
            className="bg-[#000E55] text-white px-8 py-3 rounded-lg flex items-center gap-2 font-bold uppercase text-xs tracking-widest hover:bg-[#FF690E] transition-all transform active:scale-95 shadow-lg shadow-blue-900/10"
          >
            {t('view_journey')}
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
