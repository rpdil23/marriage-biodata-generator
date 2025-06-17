import React from "react";
import { FormData } from "../BiodataGenerator";

interface Props {
  formData: FormData;
}

export const AstrologicalChart: React.FC<Props> = ({ formData }) => {
  return (
    <div className="relative w-80 h-80 mx-auto bg-white border-2 border-gray-800 rounded-lg shadow-lg">
      <div className="absolute inset-0 border-2 border-gray-800 rounded-lg">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-gray-800 bg-white px-2 py-1">
          ராசி
        </div>

        {/* House 1 */}
        <div className="absolute top-0 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house1}
        </div>
        {/* House 2 */}
        <div className="absolute top-0 left-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house2}
        </div>
        {/* House 3 */}
        <div className="absolute top-0 right-20 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house3}
        </div>
        {/* House 4 */}
        <div className="absolute top-0 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house4}
        </div>

        {/* House 5 */}
        <div className="absolute top-20 left-0 w-20 h-20 border-r border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house5}
        </div>
        {/* House 8 */}
        <div className="absolute top-20 right-0 w-20 h-20 border-l border-b border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house8}
        </div>

        {/* House 6 */}
        <div className="absolute bottom-20 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house6}
        </div>
        {/* House 7 */}
        <div className="absolute bottom-20 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house7}
        </div>

        {/* House 9 */}
        <div className="absolute bottom-0 right-20 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house9}
        </div>
        {/* House 10 */}
        <div className="absolute bottom-0 left-20 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house10}
        </div>
        {/* House 11 */}
        <div className="absolute bottom-0 left-0 w-20 h-20 border-r border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house11}
        </div>
        {/* House 12 */}
        <div className="absolute bottom-0 right-0 w-20 h-20 border-l border-t border-gray-600 flex items-center justify-center text-xs font-medium p-1 text-center">
          {formData.house12}
        </div>

        {/* House Labels (Numbers) Outside Boxes */}
        <div className="absolute top-[-20px] left-0 text-xs font-bold">1</div>
        <div className="absolute top-[-20px] left-20 text-xs font-bold">2</div>
        <div className="absolute top-[-20px] right-20 text-xs font-bold">3</div>
        <div className="absolute top-[-20px] right-0 text-xs font-bold">4</div>
        <div className="absolute top-20 left-[-20px] text-xs font-bold">5</div>
        <div className="absolute bottom-20 left-[-20px] text-xs font-bold">
          6
        </div>
        <div className="absolute bottom-20 right-[-20px] text-xs font-bold">
          7
        </div>
        <div className="absolute top-20 right-[-20px] text-xs font-bold">8</div>
        <div className="absolute bottom-[-20px] right-20 text-xs font-bold">
          9
        </div>
        <div className="absolute bottom-[-20px] left-20 text-xs font-bold">
          10
        </div>
        <div className="absolute bottom-[-20px] left-0 text-xs font-bold">
          11
        </div>
        <div className="absolute bottom-[-20px] right-0 text-xs font-bold">
          12
        </div>
      </div>
    </div>
  );
};
