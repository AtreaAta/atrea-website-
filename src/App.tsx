import { useState } from 'react';
import { Header } from './components/Header';
import { ItineraryCard } from './components/ItineraryCard';
import { Footer } from './components/Footer';
import { MOCK_ITINERARIES, Itinerary } from './types';
import { JourneyDetail } from './components/JourneyDetail';
import { SelectionPage } from './components/SelectionPage';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from './LanguageContext';

export default function App() {
  const { t } = useLanguage();
  const [startingPoint, setStartingPoint] = useState<string | null>(null);
  const [selectedItinerary, setSelectedItinerary] = useState<Itinerary | null>(null);

  const filteredItineraries = startingPoint 
    ? MOCK_ITINERARIES.filter(it => it.leavingFrom === startingPoint)
    : [];

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans selection:bg-[#FF690E] selection:text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          {!startingPoint ? (
            <SelectionPage key="selection" onSelect={(city) => setStartingPoint(city)} />
          ) : (
            <motion.div 
              key="results"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <button 
                onClick={() => setStartingPoint(null)}
                className="mb-8 flex items-center gap-2 text-[#000E55] font-bold uppercase text-xs tracking-widest hover:text-[#FF690E] transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                {t('back_to_selection')}
              </button>

              <div className="space-y-8">
                {filteredItineraries.length > 0 ? (
                  filteredItineraries.map((itinerary) => (
                    <div key={itinerary.id}>
                      <ItineraryCard 
                        itinerary={itinerary} 
                        onViewJourney={(item) => setSelectedItinerary(item)}
                      />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-20 bg-white rounded-3xl shadow-sm">
                    <p className="text-gray-500">Bu çıkış noktası için uygun tur bulunamadı.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer />

      <AnimatePresence>
        {selectedItinerary && (
          <JourneyDetail 
            itinerary={selectedItinerary} 
            onClose={() => setSelectedItinerary(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
