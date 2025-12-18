export interface StarSign {
  tamil: string;
  hindi: string;
  transliteration: string;
  english: string;
  symbol: string;
}

export interface Nakshatra {
  tamil: string;
  hindi: string;
  english: string;
}

export const starSigns: StarSign[] = [
  {
    tamil: "மேஷம்",
    hindi: "मेष",
    transliteration: "Mesham",
    english: "Aries",
    symbol: "♈",
  },
  {
    tamil: "ரிஷபம்",
    hindi: "वृषभ",
    transliteration: "Rishabam",
    english: "Taurus",
    symbol: "♉",
  },
  {
    tamil: "மிதுனம்",
    hindi: "मिथुन",
    transliteration: "Mithunam",
    english: "Gemini",
    symbol: "♊",
  },
  {
    tamil: "கடகம்",
    hindi: "कर्क",
    transliteration: "Kadagam",
    english: "Cancer",
    symbol: "♋",
  },
  {
    tamil: "சிம்மம்",
    hindi: "सिंह",
    transliteration: "Simmam",
    english: "Leo",
    symbol: "♌",
  },
  {
    tamil: "கன்னி",
    hindi: "कन्या",
    transliteration: "Kanni",
    english: "Virgo",
    symbol: "♍",
  },
  {
    tamil: "துலாம்",
    hindi: "तुला",
    transliteration: "Thulaam",
    english: "Libra",
    symbol: "♎",
  },
  {
    tamil: "விருச்சிகம்",
    hindi: "वृश्चिक",
    transliteration: "Viruchigam",
    english: "Scorpio",
    symbol: "♏",
  },
  {
    tamil: "தனுசு",
    hindi: "धनु",
    transliteration: "Dhanusu",
    english: "Sagittarius",
    symbol: "♐",
  },
  {
    tamil: "மகரம்",
    hindi: "मकर",
    transliteration: "Magaram",
    english: "Capricorn",
    symbol: "♑",
  },
  {
    tamil: "கும்பம்",
    hindi: "कुंभ",
    transliteration: "Kumbam",
    english: "Aquarius",
    symbol: "♒",
  },
  {
    tamil: "மீனம்",
    hindi: "मीन",
    transliteration: "Meenam",
    english: "Pisces",
    symbol: "♓",
  },
];

export const nakshatrams: Nakshatra[] = [
  { tamil: "அசுவினி", hindi: "अश्विनी", english: "Ashwini" },
  { tamil: "பரணி", hindi: "भरणी", english: "Bharani" },
  { tamil: "கிருத்திகை", hindi: "कृत्तिका", english: "Krittika" },
  { tamil: "ரோகிணி", hindi: "रोहिणी", english: "Rohini" },
  { tamil: "மிருகசீர்ஷம்", hindi: "मृगशीर्ष", english: "Mrigashirsha" },
  { tamil: "திருவாதிரை", hindi: "आर्द्रा", english: "Ardra" },
  { tamil: "புனர்பூசம்", hindi: "पुनर्वसु", english: "Punarvasu" },
  { tamil: "பூசம்", hindi: "पुष्य", english: "Pushya" },
  { tamil: "ஆயில்யம்", hindi: "आश्लेषा", english: "Ashlesha" },
  { tamil: "மகம்", hindi: "मघा", english: "Magha" },
  { tamil: "பூர்வம்", hindi: "पूर्वा फाल्गुनी", english: "Purva Phalguni" },
  { tamil: "உத்திரம்", hindi: "उत्तरा फाल्गुनी", english: "Uttara Phalguni" },
  { tamil: "ஹஸ்தம்", hindi: "हस्त", english: "Hasta" },
  { tamil: "சித்திரை", hindi: "चित्रा", english: "Chitra" },
  { tamil: "சுவாதி", hindi: "स्वाति", english: "Swati" },
  { tamil: "விசாகம்", hindi: "विशाखा", english: "Vishakha" },
  { tamil: "அனுராதா", hindi: "अनुराधा", english: "Anuradha" },
  { tamil: "கேட்டை", hindi: "ज्येष्ठा", english: "Jyeshtha" },
  { tamil: "மூலம்", hindi: "मूल", english: "Moola" },
  { tamil: "பூராடம்", hindi: "पूर्वाषाढ़ा", english: "Purva Ashadha" },
  { tamil: "உத்திராடம்", hindi: "उत्तराषाढ़ा", english: "Uttara Ashadha" },
  { tamil: "திருவோணம்", hindi: "श्रवण", english: "Shravana" },
  { tamil: "அவிட்டம்", hindi: "धनिष्ठा", english: "Dhanishta" },
  { tamil: "சதயம்", hindi: "शतभिषा", english: "Shatabhisha" },
  { tamil: "பூர்வட்டாதி", hindi: "पूर्वा भाद्रपद", english: "Purva Bhadrapada" },
  { tamil: "உத்திரட்டாதி", hindi: "उत्तरा भाद्रपद", english: "Uttara Bhadrapada" },
  { tamil: "ரேவதி", hindi: "रेवती", english: "Revati" },
];

// Helper function to copy text to clipboard
export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
