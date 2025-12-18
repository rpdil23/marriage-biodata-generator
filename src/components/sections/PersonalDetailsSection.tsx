import React from "react";
import { FormData } from "../BiodataGenerator";
import { useLanguage } from "../../context/LanguageContext";

interface Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export const PersonalDetailsSection: React.FC<Props> = ({
  formData,
  onInputChange,
}) => {
  const { t } = useLanguage();

  return (
    <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
        {t("personalDetails")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("name")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => onInputChange("name", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("gender")} <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.gender}
            onChange={(e) => onInputChange("gender", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          >
            <option value="">{t("selectLanguage")} (Select)</option>
            {/* Note: Option values are hardcoded in mixed language currently. Ideally these should be constants or translated too if we want the PDF to be translated properly. 
                However PDF generation uses direct values. If we change these values, existing PDF logic breaks or needs update. 
                For now I will keep the VALUES same but maybe update display? 
                Actually the implementation plan said "Replace hardcoded strings". 
                The options "ஆண் (Male)" are specifically bilingual. 
                I will leave the option values as is for now to avoid breaking data flow, but ideally they should be generic. */}
            <option value="Male">Male / ஆண் / पुरुष</option>
            <option value="Female">Female / பெண் / महिला</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("dateOfBirth")} <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => onInputChange("dateOfBirth", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("timeOfBirth")} <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            value={formData.timeOfBirth}
            onChange={(e) => onInputChange("timeOfBirth", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("placeOfBirth")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.placeOfBirth}
            onChange={(e) => onInputChange("placeOfBirth", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("residence")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.residence}
            onChange={(e) => onInputChange("residence", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("education")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.education}
            onChange={(e) => onInputChange("education", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("jobDetails")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.jobDetails}
            onChange={(e) => onInputChange("jobDetails", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("income")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.income}
            onChange={(e) => onInputChange("income", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("caste")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.caste}
            onChange={(e) => onInputChange("caste", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("height")} <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-2 items-center">
            <input
              type="number"
              placeholder="CM"
              value={formData.heightCm}
              onChange={(e) => onInputChange("heightCm", e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
              required
            />
            <span className="text-sm text-gray-600">
              {formData.heightCm
                ? (Number(formData.heightCm) * 0.0328084).toFixed(2)
                : "0.00"}{" "}
              ft
            </span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("weight")} <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            value={formData.weight}
            onChange={(e) => onInputChange("weight", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {t("color")} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.color}
            onChange={(e) => onInputChange("color", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          />
        </div>
      </div>
    </div>
  );
};
