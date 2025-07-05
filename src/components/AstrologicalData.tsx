import {
  starSigns,
  nakshatrams,
  copyToClipboard,
} from "../data/AstrologicalData";

// Component to display astrological data
export const AstrologicalDataDisplay = () => {
  return (
    <div className="sticky top-8">
      <div className="backdrop-blur-md bg-white/90 rounded-3xl shadow-2xl border border-white/20 p-6">
        {/* Nakshatrams Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center border-b border-purple-200 pb-2">
            நட்சத்திரங்கள் (Nakshatrams)
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {nakshatrams.map((nakshatra, index) => (
              <div
                key={index}
                className="p-2 border border-gray-200 rounded-lg hover:bg-purple-50 flex justify-between items-center transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">{nakshatra.tamil}</p>
                  <p className="text-xs text-gray-600">{nakshatra.english}</p>
                </div>
                <button
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() =>
                    copyToClipboard(`${nakshatra.tamil} (${nakshatra.english})`)
                  }
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Star Signs Section */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3 text-center border-b border-blue-200 pb-2">
            ராசி (Star Signs)
          </h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {starSigns.map((sign, index) => (
              <div
                key={index}
                className="p-2 border border-gray-200 rounded-lg hover:bg-blue-50 flex justify-between items-center transition-colors"
              >
                <div>
                  <p className="text-sm font-medium">
                    {sign.tamil} <span className="text-lg">{sign.symbol}</span>
                  </p>
                  <p className="text-xs text-gray-600">{sign.english}</p>
                </div>
                <button
                  className="bg-blue-500 text-white text-xs px-2 py-1 rounded hover:bg-blue-600"
                  onClick={() =>
                    copyToClipboard(
                      `${sign.tamil} (${sign.english}) ${sign.symbol}`
                    )
                  }
                >
                  Copy
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
