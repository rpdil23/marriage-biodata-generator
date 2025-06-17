import React from "react";
import { FormData } from "../BiodataGenerator";

interface Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export const FamilyDetailsSection: React.FC<Props> = ({
  formData,
  onInputChange,
}) => {
  return (
    <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
        குடும்ப விவரங்கள் (Family Details)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தந்தை பெயர் (Father's Name)
          </label>
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) => onInputChange("fatherName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தந்தை பணி விவரம் (Father's Job Details)
          </label>
          <input
            type="text"
            value={formData.fatherJob}
            onChange={(e) => onInputChange("fatherJob", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தாய் பெயர் (Mother's Name)
          </label>
          <input
            type="text"
            value={formData.motherName}
            onChange={(e) => onInputChange("motherName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தாய் பணி விவரம் (Mother's Job Details)
          </label>
          <input
            type="text"
            value={formData.motherJob}
            onChange={(e) => onInputChange("motherJob", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            உடன் பிறந்தவர்கள் (Siblings)
          </label>
          <input
            type="text"
            value={formData.siblings}
            onChange={(e) => onInputChange("siblings", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            தொலைபேசி எண் (Phone Number)
          </label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => onInputChange("phoneNumber", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            வாட்ஸ்ஆப் எண் (WhatsApp Number)
          </label>
          <input
            type="text"
            value={formData.whatsappNumber}
            onChange={(e) => onInputChange("whatsappNumber", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            முகவரி (Address)
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => onInputChange("address", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            சொத்து விவரம் (Asset Details)
          </label>
          <textarea
            value={formData.assetDetails}
            onChange={(e) => onInputChange("assetDetails", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
          />
        </div>
      </div>
    </div>
  );
};
