export interface Itinerary {
  id: string;
  destination: string;
  durationNights: number;
  shipName: string;
  leavingFrom: string;
  disembarkationPort: string;
  dates: string[];
  imageUrl: string;
  mapUrl: string;
  priceFrom: number;
  description: string;
  translations?: {
    [lang: string]: {
      destination?: string;
      description?: string;
      leavingFrom?: string;
      disembarkationPort?: string;
    };
  };
  ports: {
    day: number;
    name: string;
    arrival?: string;
    departure?: string;
    activity?: string;
  }[];
}

export const MOCK_ITINERARIES: Itinerary[] = [
  {
    id: "DI20260427KUSKUS",
    destination: "Akdeniz",
    durationNights: 7,
    shipName: "MSC Divina",
    leavingFrom: "Kuşadası",
    disembarkationPort: "Kuşadası",
    dates: ["27 Nis '26", "04 May '26", "01 Haz '26", "08 Haz '26", "15 Haz '26", "22 Haz '26", "29 Haz '26", "06 Tem '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+1.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UXUO.jpg",
    priceFrom: 1249,
    description: "Zarif MSC Divina ile Akdeniz'in tadını çıkarın. Kuşadası'nın turkuaz sularından Avrupa'nın ikonik limanlarına uzanan unutulmaz bir yolculuk.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "Experience the ultimate Mediterranean escape aboard the elegant MSC Divina. From the turquoise waters of Kusadasi to the historic charm of iconic European ports.",
        leavingFrom: "Kusadasi",
        disembarkationPort: "Kusadasi"
      },
      de: {
        destination: "Mittelmeer",
        description: "Erleben Sie die ultimative Mittelmeer-Flucht an Bord der eleganten MSC Divina. Von den türkisfarbenen Gewässern von Kusadasi bis zum historischen Charme ikonischer europäischer Häfen.",
        leavingFrom: "Kusadasi",
        disembarkationPort: "Kusadasi"
      }
    },
    ports: [
      { day: 1, name: "Kuşadası", departure: "17:00" },
      { day: 2, name: "Denizde", activity: "Geminin keyfini çıkarın" },
      { day: 3, name: "Mikonos", arrival: "08:00", departure: "18:00" },
      { day: 4, name: "Santorini", arrival: "07:00", departure: "19:00" },
      { day: 5, name: "Denizde", activity: "Spa ve Wellness günü" },
      { day: 6, name: "Napoli (Pompei)", arrival: "11:00", departure: "20:00" },
      { day: 7, name: "Civitavecchia (Roma)", arrival: "07:00", departure: "17:00" },
      { day: 8, name: "Kuşadası", arrival: "09:00" }
    ]
  },
  {
    id: "FA20260508ISTIST",
    destination: "Akdeniz",
    durationNights: 9,
    shipName: "MSC Fantasia",
    leavingFrom: "İstanbul",
    disembarkationPort: "İstanbul",
    dates: ["08 May '26", "26 May '26", "04 Haz '26", "22 Haz '26", "01 Tem '26", "10 Tem '26", "28 Tem '26", "06 Ağu '26", "02 Eyl '26", "11 Eyl '26", "29 Eyl '26", "08 Eki '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+22.avif",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UWM3.jpg",
    priceFrom: 1649,
    description: "İstanbul'dan kalkan bu büyük yolculukla Akdeniz'in en derin sırlarını 9 unutulmaz gece boyunca keşfedin.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "A grand circular voyage from Istanbul, exploring the deepest secrets of the Mediterranean over 9 unforgettable nights.",
        leavingFrom: "Istanbul",
        disembarkationPort: "Istanbul"
      }
    },
    ports: [
      { day: 1, name: "İstanbul", departure: "18:00" },
      { day: 2, name: "Denizde" },
      { day: 3, name: "Pire (Atina)", arrival: "07:00", departure: "17:00" },
      { day: 4, name: "Palermo", arrival: "09:00", departure: "16:00" },
      { day: 5, name: "Barselona", arrival: "10:00", departure: "19:00" },
      { day: 6, name: "Marsilya", arrival: "08:00", departure: "18:00" },
      { day: 7, name: "Cenova", arrival: "07:00", departure: "17:00" },
      { day: 8, name: "Denizde" },
      { day: 9, name: "İstanbul", arrival: "08:00" }
    ]
  },
  {
    id: "DI20260518KUSKUS",
    destination: "Akdeniz",
    durationNights: 7,
    shipName: "MSC Divina",
    leavingFrom: "Kuşadası",
    disembarkationPort: "Kuşadası",
    dates: ["18 May '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/MEditerennean+3.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UXUY.jpg",
    priceFrom: 1199,
    description: "Kuşadası'ndan denize yelken açın. Bu mükemmel tempolu 7 gecelik kaçışta gizli mücevherleri ve kristal berraklığındaki suları keşfedin.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "Set sail from Kusadasi for a weekly sanctuary at sea. Discover hidden gems and crystal-clear waters in this perfectly paced 7-night escape.",
        leavingFrom: "Kusadasi",
        disembarkationPort: "Kusadasi"
      }
    },
    ports: [
      { day: 1, name: "Kuşadası", departure: "18:00" },
      { day: 2, name: "Kandiye", arrival: "08:00", departure: "18:00" },
      { day: 3, name: "Denizde" },
      { day: 4, name: "Tunus", arrival: "07:00", departure: "16:00" },
      { day: 5, name: "Palermo", arrival: "09:00", departure: "17:00" },
      { day: 6, name: "Napoli", arrival: "08:00", departure: "18:00" },
      { day: 7, name: "Civitavecchia", arrival: "07:00", departure: "19:00" },
      { day: 8, name: "Kuşadası", arrival: "09:00" }
    ]
  },
  {
    id: "DI20260713KUSKUS",
    destination: "Akdeniz",
    durationNights: 7,
    shipName: "MSC Divina",
    leavingFrom: "Kuşadası",
    disembarkationPort: "Kuşadası",
    dates: ["13 Tem '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+4.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UXUY.jpg",
    priceFrom: 1399,
    description: "Bir yaz ortası Akdeniz rüyası. Yılın en uzun günlerini Kuşadası'nın tarihi kıyılarından denize açılarak şık bir şekilde yaşayın.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "A mid-summer Mediterranean dream. Experience the longest days of the year in style, sailing from the historic coast of Kusadasi.",
        leavingFrom: "Kusadasi",
        disembarkationPort: "Kusadasi"
      }
    },
    ports: [
      { day: 1, name: "Kuşadası", departure: "17:00" },
      { day: 2, name: "Rodos", arrival: "08:00", departure: "18:00" },
      { day: 3, name: "Kandiye", arrival: "07:00", departure: "17:00" },
      { day: 4, name: "Denizde" },
      { day: 5, name: "Messina", arrival: "08:00", departure: "18:00" },
      { day: 6, name: "Napoli", arrival: "07:00", departure: "19:00" },
      { day: 7, name: "Civitavecchia", arrival: "08:00", departure: "20:00" },
      { day: 8, name: "Kuşadası", arrival: "10:00" }
    ]
  },
  {
    id: "FA20260719ISTIST",
    destination: "Akdeniz",
    durationNights: 9,
    shipName: "MSC Fantasia",
    leavingFrom: "İstanbul",
    disembarkationPort: "İstanbul",
    dates: ["19 Tem '26", "20 Eyl '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+5.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UWM3.jpg",
    priceFrom: 1699,
    description: "İstanbul'dan kalkan bu görkemli 9 gecelik yolculukla sezonun zirvesini yaşayın. Seyahat ve lüksün bir şaheseri.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "Experience the peak of the season with this grand 9-night voyage from Istanbul. A masterpiece of travel and luxury."
      }
    },
    ports: [
      { day: 1, name: "İstanbul", departure: "19:00" },
      { day: 2, name: "Denizde" },
      { day: 3, name: "İzmir", arrival: "08:00", departure: "18:00" },
      { day: 4, name: "Bodrum", arrival: "07:00", departure: "20:00" },
      { day: 5, name: "Kandiye", arrival: "08:00", departure: "19:00" },
      { day: 6, name: "Denizde" },
      { day: 7, name: "Pire", arrival: "07:00", departure: "18:00" },
      { day: 8, name: "Denizde" },
      { day: 9, name: "İstanbul", arrival: "08:00" }
    ]
  },
  {
    id: "DI20260720KUSKUS",
    destination: "Akdeniz",
    durationNights: 7,
    shipName: "MSC Divina",
    leavingFrom: "Kuşadası",
    disembarkationPort: "Kuşadası",
    dates: ["20 Tem '26", "27 Tem '26", "03 Ağu '26", "10 Ağu '26", "17 Ağu '26", "24 Ağu '26", "31 Ağu '26", "07 Eyl '26", "14 Eyl '26", "21 Eyl '26", "28 Eyl '26", "05 Eki '26", "12 Eki '26", "19 Eki '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+1.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UXUY.jpg",
    priceFrom: 1299,
    description: "Kuşadası'ndan kalkan güneşle yıkanmış 7 gecelik kaçışlar dizisi. Her kalkış Akdeniz'in zamansız güzelliğine taze bir bakış sunuyor.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "A series of sun-drenched 7-night retreats from Kusadasi. Each departure offers a fresh perspective on the Mediterranean's timeless beauty."
      }
    },
    ports: [
      { day: 1, name: "Kuşadası", departure: "17:00" },
      { day: 2, name: "Denizde" },
      { day: 3, name: "Napoli", arrival: "11:00", departure: "20:00" },
      { day: 4, name: "Civitavecchia", arrival: "07:00", departure: "17:00" },
      { day: 5, name: "Cenova", arrival: "08:00", departure: "18:00" },
      { day: 6, name: "Cannes", arrival: "07:00", departure: "17:00" },
      { day: 7, name: "Denizde" },
      { day: 8, name: "Kuşadası", arrival: "10:00" }
    ]
  },
  {
    id: "FA20260815ISTIST",
    destination: "Akdeniz",
    durationNights: 9,
    shipName: "MSC Fantasia",
    leavingFrom: "İstanbul",
    disembarkationPort: "İstanbul",
    dates: ["15 Ağu '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+6.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UWM3.jpg",
    priceFrom: 1749,
    description: "İstanbul'dan Ağustos ortasında benzersiz bir kalkış. Yaz görkemli doruğuna ulaşırken dokuz gece saf Akdeniz mutluluğu.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "A unique mid-August departure from Istanbul. Nine nights of pure Mediterranean bliss as the summer reaches its magnificent crescendo."
      }
    },
    ports: [
      { day: 1, name: "İstanbul", departure: "18:00" },
      { day: 2, name: "Denizde" },
      { day: 3, name: "Bodrum", arrival: "08:00", departure: "22:00" },
      { day: 4, name: "Rodos", arrival: "07:00", departure: "20:00" },
      { day: 5, name: "Kandiye", arrival: "09:00", departure: "18:00" },
      { day: 6, name: "Denizde" },
      { day: 7, name: "Pire", arrival: "07:00", departure: "17:00" },
      { day: 8, name: "Denizde" },
      { day: 9, name: "İstanbul", arrival: "09:00" }
    ]
  },
  {
    id: "FA20260821ISTIST",
    destination: "Akdeniz",
    durationNights: 9,
    shipName: "MSC Fantasia",
    leavingFrom: "İstanbul",
    disembarkationPort: "İstanbul",
    dates: ["21 Ağu '26"],
    imageUrl: "https://atreawebsite.s3.eu-north-1.amazonaws.com/Mediterennean+1.webp",
    mapUrl: "https://www.msccruises.com/images/msc/iti/itin/UWM3.jpg",
    priceFrom: 1729,
    description: "İstanbul'dan bu 9 gecelik gidiş-dönüş seyahatle geç yazın büyüsünü yaşayın. Keşif ve rahatlama için tasarlanmış küratörlü bir yolculuk.",
    translations: {
      en: {
        destination: "Mediterranean",
        description: "Savor the late summer magic with this 9-night roundtrip from Istanbul. A curated journey designed for discovery and relaxation."
      }
    },
    ports: [
      { day: 1, name: "İstanbul", departure: "18:00" },
      { day: 2, name: "Denizde" },
      { day: 3, name: "İstanköy", arrival: "08:00", departure: "18:00" },
      { day: 4, name: "Patmos", arrival: "07:00", departure: "17:00" },
      { day: 5, name: "Mikonos", arrival: "16:00", departure: "02:00" },
      { day: 6, name: "Denizde" },
      { day: 7, name: "Pire", arrival: "07:00", departure: "18:00" },
      { day: 8, name: "Denizde" },
      { day: 9, name: "İstanbul", arrival: "08:00" }
    ]
  }
];
