import React from "react";
import { FormData } from "../BiodataGenerator";
import { useLanguage } from "../../context/LanguageContext";

interface Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export const FamilyDetailsSection: React.FC<Props> = ({
  formData,
  onInputChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-green-50/80 to-emerald-50/80 backdrop-blur-sm rounded-2xl p-6 border border-green-100/50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-green-200 pb-2">
        {t("familyDetails")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("fatherName")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fatherName}
            onChange={(e) => onInputChange("fatherName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("fatherJob")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fatherJob}
            onChange={(e) => onInputChange("fatherJob", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("motherName")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.motherName}
            onChange={(e) => onInputChange("motherName", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("motherJob")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.motherJob}
            onChange={(e) => onInputChange("motherJob", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("siblings")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.siblings}
            onChange={(e) => onInputChange("siblings", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("phoneNumber")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.phoneNumber}
            onChange={(e) => onInputChange("phoneNumber", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("whatsappNumber")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.whatsappNumber}
            onChange={(e) => onInputChange("whatsappNumber", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("address")} <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.address}
            onChange={(e) => onInputChange("address", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div className="md:col-span-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("assetDetails")} <span className="text-red-500">*</span>
          </label>
          <textarea
            value={formData.assetDetails}
            onChange={(e) => onInputChange("assetDetails", e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>
      </div>
    </div>
  );
};
