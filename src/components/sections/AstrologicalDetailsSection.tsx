import React from "react";
import { FormData } from "../BiodataGenerator";
import { AstrologicalChart } from "./AstrologicalChart";
import { AstrologicalChart1 } from "./AstrologicalChart1";

interface Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export const AstrologicalDetailsSection: React.FC<Props> = ({
  formData,
  onInputChange,
}) => {
  return (
    <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-100/50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-purple-200 pb-2">
        ஜாதக விவரங்கள் (Astrological Details)
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            லக்னம் (Lagnam)
          </label>
          <input
            type="text"
            value={formData.lagnam}
            onChange={(e) => onInputChange("lagnam", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ராசி - நட்சத்திரம் (Rasi - Nakshatram)
          </label>
          <input
            type="text"
            value={formData.rasiNakshatram}
            onChange={(e) => onInputChange("rasiNakshatram", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தமிழ் தேதி (Tamil Date)
          </label>
          <input
            type="text"
            value={formData.tamilDate}
            onChange={(e) => onInputChange("tamilDate", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            ராகு கேது தோசம் (Rahu Ketu Dosham)
          </label>
          <select
            value={formData.dosham}
            onChange={(e) => onInputChange("dosham", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          >
            <option value="">தேர்ந்தெடுக்க (Select)</option>
            <option value="ஆம்">ஆம் (Yes)</option>
            <option value="இல்லை">இல்லை (No)</option>
          </select>
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Other Details (Other Details)
          </label>
          <textarea
            value={formData.otherDetails}
            onChange={(e) => onInputChange("otherDetails", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>
      </div>

      <div className="backdrop-blur-sm bg-white/90 rounded-2xl p-6 shadow-lg border border-white/30">
        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
          ராசி கட்டம் (Rasi Kattam)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((house) => (
            <div key={house}>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                House {house}
              </label>
              <input
                type="text"
                value={formData[`house${house}` as keyof FormData]}
                onChange={(e) =>
                  onInputChange(
                    `house${house}` as keyof FormData,
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
                placeholder={`House ${house}`}
              />
            </div>
          ))}
        </div>

        <AstrologicalChart formData={formData} />

        <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center mt-8">
          சுபம் கட்டம் (Subham Kattam)
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((house) => (
            <div key={house}>
              <label className="block text-xs font-medium text-gray-600 mb-1">
                House {house}
              </label>
              <input
                type="text"
                value={formData[`house${house}` as keyof FormData]}
                onChange={(e) =>
                  onInputChange(
                    `house${house}` as keyof FormData,
                    e.target.value
                  )
                }
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-1 focus:ring-purple-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
                placeholder={`House ${house}`}
              />
            </div>
          ))}
        </div>

        <AstrologicalChart1 formData={formData} />
      </div>
    </div>
  );
};
