import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, CheckCircle2, ChevronLeft, ChevronRight, Phone, Laptop, CreditCard, Ship, Anchor, Clock, Waves } from 'lucide-react';
import { Itinerary } from '../types';
import { useState } from 'react';
import { useLanguage } from '../LanguageContext';

interface JourneyDetailProps {
  itinerary: Itinerary;
  onClose: () => void;
}

export function JourneyDetail({ itinerary, onClose }: JourneyDetailProps) {
  const { t, language } = useLanguage();
  const [selectedDate, setSelectedDate] = useState(itinerary.dates[0]);
  const [showMeetingModal, setShowMeetingModal] = useState(false);
  const [meetingDate, setMeetingDate] = useState('');
  const [meetingTime, setMeetingTime] = useState('');

  const destination = itinerary.translations?.[language]?.destination || itinerary.destination;

  const inclusions = [
    { title: t('incl_service'), icon: <CheckCircle2 className="w-5 h-5 text-blue-500" /> },
    { title: t('incl_board'), icon: <Ship className="w-5 h-5 text-blue-500" /> },
    { title: t('incl_gym'), icon: <Anchor className="w-5 h-5 text-blue-500" /> },
    { title: t('incl_theatre'), icon: <Laptop className="w-5 h-5 text-blue-500" /> },
    { title: t('incl_kids'), icon: <Phone className="w-5 h-5 text-blue-500" /> }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-[60] bg-white overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="bg-[#000E55] text-white px-6 py-4 flex items-center justify-between shadow-lg h-20">
        <div className="flex items-center gap-6">
          <button 
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="h-10 w-px bg-white/20 hidden md:block" />

          <div className="flex items-center gap-3">
             <div className="bg-[#FF690E] p-1.5 rounded-sm">
                <Waves className="w-5 h-5 text-[#000E55]" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-[0.2em] leading-none mb-1">ATREA</h1>
                <p className="text-[10px] text-white/50 uppercase tracking-[0.3em] font-bold">Premium Cruises</p>
              </div>
          </div>
        </div>

        <div className="hidden md:flex flex-col items-center">
            <h2 className="text-sm font-bold tracking-tight uppercase text-white/90">{itinerary.shipName}</h2>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="w-1 h-1 rounded-full bg-[#FF690E]" />
              <p className="text-[10px] text-white/60 uppercase tracking-widest font-bold">{destination} • {itinerary.durationNights} {t('nights')}</p>
              <span className="w-1 h-1 rounded-full bg-[#FF690E]" />
            </div>
        </div>

        <button 
          onClick={onClose}
          className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto bg-gray-50 pb-32">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left: Select Date */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#000E55] mb-8">{t('select_date')}</h2>
              <div className="grid grid-cols-3 gap-3">
                {itinerary.dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 rounded-lg border-2 transition-all text-center flex flex-col items-center justify-center min-h-[100px] ${
                      selectedDate === date 
                        ? 'border-[#000E55] bg-[#000E55] text-white shadow-md' 
                        : 'border-gray-100 hover:border-gray-200 text-gray-600 bg-gray-50'
                    }`}
                  >
                    <Calendar className={`w-4 h-4 mb-2 ${selectedDate === date ? 'text-white/70' : 'text-gray-400'}`} />
                    <span className="text-xs font-bold leading-tight">{date}</span>
                  </button>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-400 font-medium leading-relaxed">
                Dates refer to the cruise only. Some trips may be longer due to flight times.
              </p>
            </div>

            {/* Middle: Ports */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-[#000E55]">{t('ports')}</h2>
                <div className="flex gap-2">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ChevronLeft className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-4 custom-scrollbar">
                {itinerary.ports.map((port, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="flex flex-col items-center py-1">
                      <div className="w-12 h-12 rounded-lg bg-gray-50 border border-gray-100 flex flex-col items-center justify-center group-hover:bg-[#FF690E]/5 group-hover:border-[#FF690E]/20 transition-colors">
                        <span className="text-[10px] font-bold text-gray-400 uppercase leading-none mb-1">{t('day')}</span>
                        <span className="text-lg font-bold text-[#FF690E] leading-none">{port.day}</span>
                      </div>
                      {idx !== itinerary.ports.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gray-100 my-2"></div>
                      )}
                    </div>
                    <div className="flex-1 bg-gray-50 p-4 rounded-xl border border-gray-100 group-hover:border-gray-200 transition-all">
                      <h3 className="font-bold text-[#000E55] mb-2">{port.name}</h3>
                      {port.arrival || port.departure ? (
                        <div className="flex flex-wrap gap-4 text-xs">
                          {port.arrival && (
                            <div className="flex items-center gap-1.5 text-gray-500">
                              <Clock className="w-3.5 h-3.5" />
                              {t('arrival')}: <span className="text-gray-900 font-bold">{port.arrival}</span>
                            </div>
                          )}
                          {port.departure && (
                            <div className="flex items-center gap-1.5 text-gray-500">
                              <Anchor className="w-3.5 h-3.5" />
                              {t('departure')}: <span className="text-gray-900 font-bold">{port.departure}</span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500 italic">{t('at_sea')}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Inclusions */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-[#000E55] mb-8">{t('always_included')}</h2>
              <div className="space-y-6">
                {inclusions.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="mt-1 bg-blue-50 p-2 rounded-lg">
                      {item.icon}
                    </div>
                    <span className="text-sm font-medium text-gray-700 leading-snug">{item.title}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 p-6 bg-gradient-to-br from-[#000E55] to-blue-900 rounded-xl text-white">
                <p className="text-xs uppercase tracking-widest font-bold opacity-70 mb-2 underline decoration-[#FF690E] underline-offset-4 decoration-2">{t('discover_ship')}</p>
                <h4 className="text-lg font-bold mb-4">{itinerary.shipName}</h4>
                <div className="flex -space-x-2 mb-6">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-400 overflow-hidden shadow-md">
                      <img src={`https://picsum.photos/seed/${i+itinerary.id}/100`} alt="Service" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <button className="w-full text-xs font-bold uppercase tracking-widest text-[#FF690E] hover:text-white transition-colors text-left flex items-center justify-between">
                  {t('full_gallery')}
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 inset-x-0 bg-white border-t border-gray-100 p-6 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] z-[70]">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-baseline gap-2">
            <span className="text-gray-400 text-sm font-bold uppercase">{t('total_from')}</span>
            <span className="text-4xl font-black text-[#000E55] tracking-tight">
              <span className="text-lg align-top mt-1 inline-block font-bold">$</span>
              {itinerary.priceFrom}
            </span>
            <span className="text-gray-400 text-xs font-medium">{t('per_person')}</span>
          </div>
          
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => setShowMeetingModal(true)}
              className="flex-1 md:flex-none px-8 py-4 border-2 border-[#000E55] text-[#000E55] rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#000E55] hover:text-white transition-all flex items-center justify-center gap-2 group"
            >
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              {t('book_meeting')}
            </button>
            <button 
              onClick={() => alert("Booking initiated! Redirecting to secure checkout...")}
              className="flex-1 md:flex-none px-8 py-4 bg-[#FF690E] text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#e55a00] transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-500/20 transform active:scale-95"
            >
              <CreditCard className="w-4 h-4" />
              {t('buy_online')}
            </button>
          </div>
        </div>
      </div>

      {/* Meeting Modal */}
      <AnimatePresence>
        {showMeetingModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#000E55]/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
            >
              <div className="bg-[#FF690E] p-8 text-white relative">
                <button 
                  onClick={() => setShowMeetingModal(false)}
                  className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="bg-white/20 p-4 rounded-2xl w-fit mb-4">
                  <Calendar className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{t('virtual_meeting')}</h3>
                <p className="text-white/80 text-sm">{t('meeting_desc')}</p>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t('choose_date')}</label>
                  <input 
                    type="date" 
                    value={meetingDate}
                    onChange={(e) => setMeetingDate(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#FF690E] outline-none transition-all font-bold text-gray-700"
                  />
                </div>
                
                <div>
                  <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">{t('preferred_time')}</label>
                  <select 
                    value={meetingTime}
                    onChange={(e) => setMeetingTime(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-[#FF690E] outline-none transition-all font-bold text-gray-700"
                  >
                    <option value="">{t('select_time') || 'Select a time'}</option>
                    <option value="09:00">09:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button 
                    disabled={!meetingDate || !meetingTime}
                    onClick={() => {
                      alert(`Meeting scheduled for ${meetingDate} at ${meetingTime}`);
                      setShowMeetingModal(false);
                    }}
                    className="w-full py-4 bg-[#000E55] text-white rounded-xl font-bold uppercase text-xs tracking-widest hover:bg-[#FF690E] transition-all disabled:opacity-50 disabled:hover:bg-[#000E55] shadow-lg shadow-blue-900/10"
                  >
                    {t('confirm_meeting')}
                  </button>
                  <p className="text-center mt-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    {t('no_obligation')}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </motion.div>
  );
}
