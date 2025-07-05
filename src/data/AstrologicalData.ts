export interface StarSign {
  tamil: string;
  transliteration: string;
  english: string;
  symbol: string;
}

export interface Nakshatra {
  tamil: string;
  english: string;
}

export const starSigns: StarSign[] = [
  {
    tamil: "மேஷம்",
    transliteration: "Mesham",
    english: "Aries",
    symbol: "♈",
  },
  {
    tamil: "ரிஷபம்",
    transliteration: "Rishabam",
    english: "Taurus",
    symbol: "♉",
  },
  {
    tamil: "மிதுனம்",
    transliteration: "Mithunam",
    english: "Gemini",
    symbol: "♊",
  },
  {
    tamil: "கடகம்",
    transliteration: "Kadagam",
    english: "Cancer",
    symbol: "♋",
  },
  {
    tamil: "சிம்மம்",
    transliteration: "Simmam",
    english: "Leo",
    symbol: "♌",
  },
  {
    tamil: "கன்னி",
    transliteration: "Kanni",
    english: "Virgo",
    symbol: "♍",
  },
  {
    tamil: "துலாம்",
    transliteration: "Thulaam",
    english: "Libra",
    symbol: "♎",
  },
  {
    tamil: "விருச்சிகம்",
    transliteration: "Viruchigam",
    english: "Scorpio",
    symbol: "♏",
  },
  {
    tamil: "தனுசு",
    transliteration: "Dhanusu",
    english: "Sagittarius",
    symbol: "♐",
  },
  {
    tamil: "மகரம்",
    transliteration: "Magaram",
    english: "Capricorn",
    symbol: "♑",
  },
  {
    tamil: "கும்பம்",
    transliteration: "Kumbam",
    english: "Aquarius",
    symbol: "♒",
  },
  {
    tamil: "மீனம்",
    transliteration: "Meenam",
    english: "Pisces",
    symbol: "♓",
  },
];

export const nakshatrams: Nakshatra[] = [
  { tamil: "அசுவினி", english: "Ashwini" },
  { tamil: "பரணி", english: "Bharani" },
  { tamil: "கிருத்திகை", english: "Krittika" },
  { tamil: "ரோகிணி", english: "Rohini" },
  { tamil: "மிருகசீர்ஷம்", english: "Mrigashirsha" },
  { tamil: "திருவாதிரை", english: "Ardra" },
  { tamil: "புனர்பூசம்", english: "Punarvasu" },
  { tamil: "பூசம்", english: "Pushya" },
  { tamil: "ஆயில்யம்", english: "Ashlesha" },
  { tamil: "மகம்", english: "Magha" },
  { tamil: "பூர்வம்", english: "Purva Phalguni" },
  { tamil: "உத்திரம்", english: "Uttara Phalguni" },
  { tamil: "ஹஸ்தம்", english: "Hasta" },
  { tamil: "சித்திரை", english: "Chitra" },
  { tamil: "சுவாதி", english: "Swati" },
  { tamil: "விசாகம்", english: "Vishakha" },
  { tamil: "அனுராதா", english: "Anuradha" },
  { tamil: "கேட்டை", english: "Jyeshtha" },
  { tamil: "மூலம்", english: "Moola" },
  { tamil: "பூராடம்", english: "Purva Ashadha" },
  { tamil: "உத்திராடம்", english: "Uttara Ashadha" },
  { tamil: "திருவோணம்", english: "Shravana" },
  { tamil: "அவிட்டம்", english: "Dhanishta" },
  { tamil: "சதயம்", english: "Shatabhisha" },
  { tamil: "பூர்வட்டாதி", english: "Purva Bhadrapada" },
  { tamil: "உத்திரட்டாதி", english: "Uttara Bhadrapada" },
  { tamil: "ரேவதி", english: "Revati" },
];

// Helper function to copy text to clipboard
export const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
