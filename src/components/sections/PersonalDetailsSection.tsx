import React from "react";
import { FormData } from "../BiodataGenerator";

interface Props {
  formData: FormData;
  onInputChange: (field: keyof FormData, value: string) => void;
}

export const PersonalDetailsSection: React.FC<Props> = ({
  formData,
  onInputChange,
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-100/50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-blue-200 pb-2">
        தனிப்பட்ட விவரங்கள் (Personal Details)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            பெயர் (Name) <span className="text-red-500">*</span>
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
            பாலினம் (Gender) <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.gender}
            onChange={(e) => onInputChange("gender", e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all backdrop-blur-sm bg-white/80"
            required
          >
            <option value="">தேர்ந்தெடுக்க (Select)</option>
            <option value="ஆண்">ஆண் (Male)</option>
            <option value="பெண்">பெண் (Female)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            பிறந்த தேதி (Date of Birth) <span className="text-red-500">*</span>
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
            பிறந்த நேரம் (Time of Birth) <span className="text-red-500">*</span>
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
            பிறந்த ஊர் (Place of Birth) <span className="text-red-500">*</span>
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
            இருப்பிடம் (Residence) <span className="text-red-500">*</span>
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
            படிப்பு (Education) <span className="text-red-500">*</span>
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
            பணி விவரங்கள் (Job Details) <span className="text-red-500">*</span>
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
            வருமானம் (Income) <span className="text-red-500">*</span>
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
            ஜாதி (Caste) <span className="text-red-500">*</span>
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
            உயரம் (Height) <span className="text-red-500">*</span>
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
            எடை (Weight) <span className="text-red-500">*</span>
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
            நிறம் (Color) <span className="text-red-500">*</span>
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
