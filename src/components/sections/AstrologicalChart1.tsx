import React from "react";
import { FormData } from "../BiodataGenerator";

interface Props {
  formData: FormData;
}

export const AstrologicalChart1: React.FC<Props> = ({ formData }) => {
  return (
    <div className="relative w-80 h-80 mx-auto bg-white border-2 border-gray-800 rounded-lg shadow-lg">
      <div className="absolute inset-0 border-2 border-gray-800 rounded-lg">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-800 bg-white px-2 py-1">
          சுபம்
        </div>

        {/* House 13 */}
        <div className="absolute top-0 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house13}
        </div>
        {/* House 14 */}
        <div className="absolute top-0 left-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house14}
        </div>
        {/* House 15 */}
        <div className="absolute top-0 right-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house15}
        </div>
        {/* House 16 */}
        <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house16}
        </div>

        {/* House 17 */}
        <div className="absolute top-20 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house17}
        </div>
        {/* House 20 */}
        <div className="absolute top-20 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house20}
        </div>

        {/* House 18 */}
        <div className="absolute bottom-20 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house18}
        </div>
        {/* House 19 */}
        <div className="absolute bottom-20 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house19}
        </div>

        {/* House 21 */}
        <div className="absolute bottom-0 right-20 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house21}
        </div>
        {/* House 22 */}
        <div className="absolute bottom-0 left-20 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house22}
        </div>
        {/* House 23 */}
        <div className="absolute bottom-0 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house23}
        </div>
        {/* House 24 */}
        <div className="absolute bottom-0 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house24}
        </div>

        {/* House Labels (Numbers) Outside Boxes */}
        <div className="absolute top-[-20px] left-0 text-xs font-bold">13</div>
        <div className="absolute top-[-20px] left-20 text-xs font-bold">14</div>
        <div className="absolute top-[-20px] right-20 text-xs font-bold">
          15
        </div>
        <div className="absolute top-[-20px] right-0 text-xs font-bold">16</div>
        <div className="absolute top-20 left-[-20px] text-xs font-bold">17</div>
        <div className="absolute bottom-20 left-[-20px] text-xs font-bold">
          18
        </div>
        <div className="absolute bottom-20 right-[-20px] text-xs font-bold">
          19
        </div>
        <div className="absolute top-20 right-[-20px] text-xs font-bold">
          20
        </div>
        <div className="absolute bottom-[-20px] right-20 text-xs font-bold">
          21
        </div>
        <div className="absolute bottom-[-20px] left-20 text-xs font-bold">
          22
        </div>
        <div className="absolute bottom-[-20px] left-0 text-xs font-bold">
          23
        </div>
        <div className="absolute bottom-[-20px] right-0 text-xs font-bold">
          24
        </div>
      </div>
    </div>
  );
};
