import {
  starSigns,
  nakshatrams,
  copyToClipboard,
} from "../data/AstrologicalData";
import { Image } from "antd";
import { useLanguage } from "../context/LanguageContext";

// Component to display astrological data
export const AstrologicalDataDisplay = () => {
  const { t, language } = useLanguage();

  const getLocalizedNakshatra = (nakshatra: any) => {
    if (language === 'hi') return nakshatra.hindi;
    if (language === 'ta') return nakshatra.tamil;
    return nakshatra.english;
  };

  const getLocalizedSign = (sign: any) => {
    if (language === 'hi') return sign.hindi;
    if (language === 'ta') return sign.tamil;
    return sign.english;
  };

  return (
    <div className="sticky top-8">
      <div className="backdrop-blur-md bg-white/90 rounded-3xl shadow-2xl border border-white/20 p-6">
        {/* Star Matching Section */}
        <div className="mb-6">
          <Image src="marriage-signs.jpg" alt={t("rasiChakram")} />
        </div>

        {/* Nakshatrams Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center border-b border-purple-200 pb-2">
            {t("rasiNakshatram")}
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {nakshatrams.map((nakshatra, index) => (
              <div
                key={index}
                className="p-2 border border-gray-200 rounded-lg hover:bg-purple-50 flex justify-between items-center transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">{getLocalizedNakshatra(nakshatra)}</p>
                  <p className="text-xs text-gray-600">{nakshatra.english}</p>
                </div>
                <button
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 shadow-sm"
                  onClick={() =>
                    copyToClipboard(`${getLocalizedNakshatra(nakshatra)} (${nakshatra.english})`)
                  }
                >
                  {t("generatePDF").includes("Generate") ? "Copy" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Star Signs Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center border-b border-blue-200 pb-2">
            {t("lagnam")} / {t("rasi")}
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
            {starSigns.map((sign, index) => (
              <div
                key={index}
                className="p-2 border border-gray-200 rounded-lg hover:bg-blue-50 flex justify-between items-center transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">
                    {getLocalizedSign(sign)} <span className="text-lg">{sign.symbol}</span>
                  </p>
                  <p className="text-xs text-gray-600">{sign.english}</p>
                </div>
                <button
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600 shadow-sm"
                  onClick={() =>
                    copyToClipboard(
                      `${getLocalizedSign(sign)} (${sign.english}) ${sign.symbol}`
                    )
                  }
                >
                  {t("generatePDF").includes("Generate") ? "Copy" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
