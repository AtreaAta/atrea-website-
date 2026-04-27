import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'tr' | 'en' | 'de';

interface Translations {
  [key: string]: {
    [K in Language]: string;
  };
}

export const translations: Translations = {
  // Header
  nav_cruises: { tr: 'Geziler', en: 'Cruises', de: 'Kreuzfahrten' },
  nav_destinations: { tr: 'Rotalar', en: 'Destinations', de: 'Ziele' },
  nav_ships: { tr: 'Gemilerimiz', en: 'Our Ships', de: 'Unsere Schiffe' },
  nav_deals: { tr: 'Fırsatlar', en: 'Deals', de: 'Angebote' },
  login: { tr: 'Giriş Yap', en: 'Login', de: 'Anmelden' },
  // Cards
  nights: { tr: 'Gece', en: 'Nights', de: 'Nächte' },
  leaving_from: { tr: 'Kalkış', en: 'Leaving from', de: 'Abfahrt von' },
  arrival_port: { tr: 'Varış', en: 'Arrival Port', de: 'Ankunftshafen' },
  starting_from: { tr: 'Başlangıç', en: 'Starting from', de: 'Ab' },
  upcoming_sailings: { tr: 'Yaklaşan Seferler', en: 'Upcoming Sailings', de: 'Kommende Termine' },
  available_date: { tr: 'Müsait Tarih', en: 'Available Date', de: 'Verfügbares Datum' },
  view_journey: { tr: 'Yolculuğu İncele', en: 'View Journey', de: 'Reise ansehen' },
  recently_booked: { tr: 'son zamanlarda rezervasyon yaptı', en: 'recently booked', de: 'kürzlich gebucht' },
  // Detail
  select_date: { tr: 'Tarih seçin', en: 'Select your date', de: 'Datum wählen' },
  ports: { tr: 'Limanlar', en: 'Ports', de: 'Häfen' },
  always_included: { tr: 'Her zaman dahil', en: 'Always included', de: 'Immer inklusive' },
  discover_ship: { tr: 'Gemiyi keşfedin', en: 'Discover the ship', de: 'Schiff entdecken' },
  full_gallery: { tr: 'Tüm galeriyi gör', en: 'Explore full gallery', de: 'Galerie ansehen' },
  total_from: { tr: 'Toplam', en: 'Total from', de: 'Gesamt ab' },
  per_person: { tr: 'kişi başı', en: 'per person', de: 'pro Person' },
  book_meeting: { tr: 'Görüşme ayarlayın', en: 'Book a meeting', de: 'Termin buchen' },
  buy_online: { tr: 'Online satın al', en: 'Buy it online', de: 'Online kaufen' },
  // Modal
  select_time: { tr: 'Saat seçin', en: 'Select a time', de: 'Uhrzeit auswählen' },
  virtual_meeting: { tr: 'Sanal Görüşme Ayarlayın', en: 'Book a Virtual Meeting', de: 'Virtuellen Termin buchen' },
  meeting_desc: { tr: 'Gemi uzmanlarımızla kişiselleştirilmiş bir danışmanlık randevusu alın.', en: 'Schedule a personalized consultation with our cruise experts.', de: 'Vereinbaren Sie eine persönliche Beratung mit unseren Experten.' },
  choose_date: { tr: 'Tarih Seçin', en: 'Choose Date', de: 'Datum wählen' },
  preferred_time: { tr: 'Tercih Edilen Saat', en: 'Preferred Time', de: 'Bevorzugte Zeit' },
  confirm_meeting: { tr: 'Görüşmeyi Onayla', en: 'Confirm Meeting', de: 'Termin bestätigen' },
  no_obligation: { tr: 'Taahhüt gerektirmeyen danışmanlık', en: 'No obligation consultation', de: 'Unverbindliche Beratung' },
  day: { tr: 'Gün', en: 'Day', de: 'Tag' },
  at_sea: { tr: 'Denizde', en: 'At sea', de: 'Auf See' },
  arrival: { tr: 'Varış', en: 'Arrival', de: 'Ankunft' },
  departure: { tr: 'Kalkış', en: 'Departure', de: 'Abfahrt' },
  // Selection Page
  choose_departure_title: { tr: 'SEYAHATİNİZ NEREDEN BAŞLASIN?', en: 'Where Should Your Journey Begin?', de: 'Wo soll Ihre Reise beginnen?' },
  choose_departure_subtitle: { tr: 'Size en uygun başlangıç noktasını seçerek rotalarımızı keşfedin.', en: 'Explore our routes by choosing the starting point that suits you best.', de: 'Entdecken Sie unsere Routen, indem Sie den für Sie passenden Abfahrtsort wählen.' },
  select_kusadasi: { tr: 'Kuşadası Çıkışlı', en: 'Departing from Kusadasi', de: 'Ab Kusadasi' },
  select_istanbul: { tr: 'İstanbul Çıkışlı', en: 'Departing from Istanbul', de: 'Ab Istanbul' },
  back_to_selection: { tr: 'Başlangıç Noktasını Değiştir', en: 'Change Starting Point', de: 'Abfahrtsort ändern' },
  // Inclusions
  incl_service: { tr: 'Standart harika servis', en: 'Great service comes as standard', de: 'Hervorragender Service' },
  incl_board: { tr: 'Açık büfe ve ana restoranda tam pansiyon', en: 'Full board available in buffet and main restaurant', de: 'Vollpension in Buffet und Hauptrestaurant' },
  incl_gym: { tr: 'Spor salonu, havuzlar ve dinlenme', en: 'Gym, pools and relaxation', de: 'Fitness, Pools und Entspannung' },
  incl_theatre: { tr: 'Batı ucu tarzı tiyatro gösterileri', en: 'West End-style theatre shows', de: 'Theateraufführungen im West-End-Stil' },
  incl_kids: { tr: 'Çocuk Kulüpleri ve aktiviteler', en: 'Children Clubs and activities', de: 'Kinderclubs und Aktivitäten' }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('tr');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
