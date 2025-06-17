import React, { useState } from "react";
import { PersonalDetailsSection } from "./sections/PersonalDetailsSection";
import { FamilyDetailsSection } from "./sections/FamilyDetailsSection";
import { AstrologicalDetailsSection } from "./sections/AstrologicalDetailsSection";

export interface FormData {
  name: string;
  gender: string;
  dateOfBirth: string;
  timeOfBirth: string;
  placeOfBirth: string;
  residence: string;
  education: string;
  jobDetails: string;
  income: string;
  caste: string;
  heightCm: string;
  weight: string;
  color: string;
  fatherName: string;
  fatherJob: string;
  siblings: string;
  phoneNumber: string;
  address: string;
  assetDetails: string;
  motherName: string;
  motherJob: string;
  whatsappNumber: string;
  lagnam: string;
  rasiNakshatram: string;
  tamilDate: string;
  house1: string;
  house2: string;
  house3: string;
  house4: string;
  house5: string;
  house6: string;
  house7: string;
  house8: string;
  house9: string;
  house10: string;
  house11: string;
  house12: string;
  house13: string;
  house14: string;
  house15: string;
  house16: string;
  house17: string;
  house18: string;
  house19: string;
  house20: string;
  house21: string;
  house22: string;
  house23: string;
  house24: string;
}

export const BiodataGenerator = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    gender: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
    residence: "",
    education: "",
    jobDetails: "",
    income: "",
    caste: "",
    heightCm: "",
    weight: "",
    color: "",
    fatherName: "",
    fatherJob: "",
    siblings: "",
    phoneNumber: "",
    address: "",
    assetDetails: "",
    motherName: "",
    motherJob: "",
    whatsappNumber: "",
    lagnam: "",
    rasiNakshatram: "",
    tamilDate: "",
    house1: "",
    house2: "",
    house3: "",
    house4: "",
    house5: "",
    house6: "",
    house7: "",
    house8: "",
    house9: "",
    house10: "",
    house11: "",
    house12: "",
    house13: "",
    house14: "",
    house15: "",
    house16: "",
    house17: "",
    house18: "",
    house19: "",
    house20: "",
    house21: "",
    house22: "",
    house23: "",
    house24: "",
  });

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const generateFormattedPDF = () => {
    // Load jsPDF from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = () => {
      const { jsPDF } = (window as any).jspdf;

      // Create PDF with Unicode support
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      // Add a Tamil font - using Noto Sans Tamil from Google Fonts
      // Convert the font to base64 and add it
      fetch(
        "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil&display=swap"
      ).then(() => {
        // Since we can't directly embed Google Fonts in jsPDF,
        // we'll use a workaround with HTML/Canvas approach
        generatePDFWithHTML2Canvas();
      });
    };

    document.head.appendChild(script);
  };

  const generatePDFWithHTML2Canvas = () => {
    const html2canvasScript = document.createElement("script");
    html2canvasScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    html2canvasScript.onload = () => {
      const { jsPDF } = (window as any).jspdf;
      const html2canvas = (window as any).html2canvas;

      const tempDiv = document.createElement("div");
      tempDiv.style.position = "fixed";
      tempDiv.style.top = "-9999px";
      tempDiv.style.width = "190mm";
      tempDiv.style.padding = "10mm";
      tempDiv.style.backgroundColor = "white";
      tempDiv.style.fontFamily = "'Noto Sans Tamil', sans-serif";

      const fontLink = document.createElement("link");
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap";
      fontLink.rel = "stylesheet";
      document.head.appendChild(fontLink);

      setTimeout(() => {
        tempDiv.innerHTML = `
          <style>
            * { font-family: 'Noto Sans Tamil', sans-serif !important; }
            .title { font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 10px; }
            .section { margin-bottom: 10px; }
            .section-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; margin-top: 10px; }
            .detail { font-size: 12px; margin-bottom: 4px; line-height: 1.4; }
            .charts-container { display: flex; justify-content: space-between; width: 100%; margin: 20px 0; }
            .rasi-container { position: relative; width: 250px; height: 250px; transform: scale(0.8); transform-origin: top left; } /* Scaled down to fit */
            .rasi-chart { display: grid; grid-template: repeat(4, 80px) / repeat(4, 80px); gap: 2px; width: 100%; height: 100%; position: relative; } /* Box size increased to 80px */
            .cell { border: 1px solid black; padding: 5px; text-align: center; font-size: 12px; } /* Increased font size for readability */
            .center { grid-column: 2 / 4; grid-row: 2 / 4; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; }
            .house-1 { grid-column: 1; grid-row: 1; }
            .house-2 { grid-column: 2; grid-row: 1; }
            .house-3 { grid-column: 3; grid-row: 1; }
            .house-4 { grid-column: 4; grid-row: 1; }
            .house-5 { grid-column: 1; grid-row: 2; }
            .house-6 { grid-column: 1; grid-row: 3; }
            .house-7 { grid-column: 4; grid-row: 3; }
            .house-8 { grid-column: 4; grid-row: 2; }
            .house-9 { grid-column: 3; grid-row: 4; }
            .house-10 { grid-column: 2; grid-row: 4; }
            .house-11 { grid-column: 1; grid-row: 4; }
            .house-12 { grid-column: 4; grid-row: 4; }
            .subam { text-align: center; margin-top: 10px; font-size: 14px; }
          </style>
          
          <div class="title">ஜாதகக் குறிப்பு</div>
          
          <div class="section">
            <div class="detail">1. பெயர்        : ${formData.name}</div>
            <div class="detail">2. பாலினம்       : ${formData.gender}</div>
            <div class="detail">3. பிறந்த தேதி    : ${
              formData.dateOfBirth
            }</div>
            <div class="detail">4. பிறந்த நேரம்   : ${
              formData.timeOfBirth
            }</div>
            <div class="detail">5. பிறந்த ஊர்    : ${
              formData.placeOfBirth
            }</div>
            <div class="detail">6. கல்வி : ${formData.education}</div>
            <div class="detail">7. வேலை : ${formData.jobDetails}</div>
            <div class="detail">8. நட்சத்திரம் : ${
              formData.rasiNakshatram
            }</div>
              <div class="detail">9. ராசி : ${formData.house1}</div>
              <div class="detail">10. லக்னம் : ${formData.lagnam}</div>
              <div class="detail">11. இருப்பிடம்  : ${formData.residence}</div>
            <div class="detail">12. வருமானம்  : ${formData.income}</div>
            <div class="detail">13. இனம் : ${formData.caste}</div>
            <div class="detail">14. உயரம் : ${formData.heightCm} CM / ${
          formData.heightCm
            ? (parseFloat(formData.heightCm) * 0.0328084).toFixed(2)
            : "0.00"
        } ft</div>
            <div class="detail">15. எடை  : ${formData.weight}</div>
            <div class="detail">16. நிறம்  : ${formData.color}</div>
          </div>
          
          <div class="title">குடும்ப விவரம்</div>
          <div class="section">
            <div class="detail">17. தந்தை : ${formData.fatherName}</div>
            <div class="detail">18. தந்தை : ${formData.fatherJob}</div>
            <div class="detail">19. தாய் : ${formData.motherName}</div>
            <div class="detail">20. தாய் : ${formData.motherJob}</div>
            <div class="detail">21. உடன் பிறந்தவர் : ${formData.siblings}</div>
            <div class="detail">22. முகவரி : ${formData.address}</div>
            <div class="detail">23. தொலைபேசி எண்கள் : ${
              formData.phoneNumber
            }</div>
             <div class="detail">24. சொத்து விவரம்  : ${
               formData.assetDetails
             }</div>
          </div>
          
          <div class="title">ராசி சக்கரம்</div>
          <div class="section">
            <div class="charts-container">
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">ராசி</div>
                  <div class="cell house-1">${formData.house1 || ""}</div>
                  <div class="cell house-2">${formData.house2 || ""}</div>
                  <div class="cell house-3">${formData.house3 || ""}</div>
                  <div class="cell house-4">${formData.house4 || ""}</div>
                  <div class="cell house-5">${formData.house5 || ""}</div>
                  <div class="cell house-6">${formData.house6 || ""}</div>
                  <div class="cell house-7">${formData.house7 || ""}</div>
                  <div class="cell house-8">${formData.house8 || ""}</div>
                  <div class="cell house-9">${formData.house9 || ""}</div>
                  <div class="cell house-10">${formData.house10 || ""}</div>
                  <div class="cell house-11">${formData.house11 || ""}</div>
                  <div class="cell house-12">${formData.house12 || ""}</div>
                </div>
              </div>
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">சுபம்</div>
                  <div class="cell house-1">${formData.house13 || ""}</div>
                  <div class="cell house-2">${formData.house14 || ""}</div>
                  <div class="cell house-3">${formData.house15 || ""}</div>
                  <div class="cell house-4">${formData.house16 || ""}</div>
                  <div class="cell house-5">${formData.house17 || ""}</div>
                  <div class="cell house-6">${formData.house18 || ""}</div>
                  <div class="cell house-7">${formData.house19 || ""}</div>
                  <div class="cell house-8">${formData.house20 || ""}</div>
                  <div class="cell house-9">${formData.house21 || ""}</div>
                  <div class="cell house-10">${formData.house22 || ""}</div>
                  <div class="cell house-11">${formData.house23 || ""}</div>
                  <div class="cell house-12">${formData.house24 || ""}</div>
                </div>
              </div>
            </div>
          </div>
        `;

        document.body.appendChild(tempDiv);

        html2canvas(tempDiv, {
          scale: 2,
          useCORS: true,
          logging: false,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const doc = new jsPDF("p", "mm", "a4");

          const imgWidth = 210;
          const pageHeight = 297;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          const scale = pageHeight / imgHeight;
          const scaledImgHeight = imgHeight * Math.min(scale, 1);
          const scaledImgWidth = imgWidth * Math.min(scale, 1);

          doc.addImage(imgData, "PNG", 0, 0, scaledImgWidth, scaledImgHeight);
          doc.save(`${formData.name || "biodata"}_tamil.pdf`);
          document.body.removeChild(tempDiv);
        });
      }, 1000);
    };

    document.head.appendChild(html2canvasScript);
  };

  // Alternative method using pure English transliteration
  const generateTransliteratedPDF = () => {
    const html2canvasScript = document.createElement("script");
    html2canvasScript.src =
      "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    html2canvasScript.onload = () => {
      const { jsPDF } = (window as any).jspdf;
      const html2canvas = (window as any).html2canvas;

      const tempDiv = document.createElement("div");
      tempDiv.style.position = "fixed";
      tempDiv.style.top = "-9999px";
      tempDiv.style.width = "190mm";
      tempDiv.style.padding = "10mm";
      tempDiv.style.backgroundColor = "white";
      tempDiv.style.fontFamily = "'Noto Sans', sans-serif";

      const fontLink = document.createElement("link");
      fontLink.href =
        "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap";
      fontLink.rel = "stylesheet";
      document.head.appendChild(fontLink);

      setTimeout(() => {
        tempDiv.innerHTML = `
          <style>
            * { font-family: 'Noto Sans', sans-serif !important; }
            .title { font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 10px; }
            .section { margin-bottom: 10px; }
            .section-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; margin-top: 10px; }
            .detail { font-size: 12px; margin-bottom: 4px; line-height: 1.4; }
            .charts-container { display: flex; justify-content: space-between; width: 100%; margin: 20px 0; }
            .rasi-container { position: relative; width: 250px; height: 250px; transform: scale(0.8); transform-origin: top left; }
            .rasi-chart { display: grid; grid-template: repeat(4, 80px) / repeat(4, 80px); gap: 2px; width: 100%; height: 100%; position: relative; }
            .cell { border: 1px solid black; padding: 5px; text-align: center; font-size: 12px; }
            .center { grid-column: 2 / 4; grid-row: 2 / 4; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: bold; }
            .house-1 { grid-column: 1; grid-row: 1; }
            .house-2 { grid-column: 2; grid-row: 1; }
            .house-3 { grid-column: 3; grid-row: 1; }
            .house-4 { grid-column: 4; grid-row: 1; }
            .house-5 { grid-column: 1; grid-row: 2; }
            .house-6 { grid-column: 1; grid-row: 3; }
            .house-7 { grid-column: 4; grid-row: 3; }
            .house-8 { grid-column: 4; grid-row: 2; }
            .house-9 { grid-column: 3; grid-row: 4; }
            .house-10 { grid-column: 2; grid-row: 4; }
            .house-11 { grid-column: 1; grid-row: 4; }
            .house-12 { grid-column: 4; grid-row: 4; }
            .subam { text-align: center; margin-top: 10px; font-size: 14px; }
          </style>
          
          <div class="title">Jaathaga Kurippu (Horoscope Details)</div>
          
          <div class="section">
            <div class="detail">1. Name            : ${formData.name}</div>
            <div class="detail">2. Gender          : ${formData.gender}</div>
            <div class="detail">3. Date of Birth   : ${
              formData.dateOfBirth
            }</div>
            <div class="detail">4. Time of Birth   : ${
              formData.timeOfBirth
            }</div>
            <div class="detail">5. Place of Birth  : ${
              formData.placeOfBirth
            }</div>
            <div class="detail">6. Education       : ${formData.education}</div>
            <div class="detail">7. Job             : ${
              formData.jobDetails
            }</div>
              <div class="detail">8. Star           : ${
                formData.rasiNakshatram
              }</div>
                <div class="detail">9. Moon Sign      : ${formData.house1}</div>
                <div class="detail">10. Ascendant      : ${
                  formData.lagnam
                }</div>
                <div class="detail">11. Residence       : ${
                  formData.residence
                }</div>
            <div class="detail">12. Income          : ${formData.income}</div>
            <div class="detail">13. Caste          : ${formData.caste}</div>
            <div class="detail">14. Height         : ${
              formData.heightCm
            } CM / ${
          formData.heightCm
            ? (parseFloat(formData.heightCm) * 0.0328084).toFixed(2)
            : "0.00"
        } ft</div>
            <div class="detail">15. Weight         : ${formData.weight}</div>
            <div class="detail">16. Color          : ${formData.color}</div>
          </div>
          
          <div class="title">Kudumba Vivaram (Family Details)</div>
          <div class="section">
            <div class="detail">17. Father         : ${
              formData.fatherName
            }</div>
            <div class="detail">18. Father Job     : ${formData.fatherJob}</div>
            <div class="detail">19. Mother         : ${
              formData.motherName
            }</div>
            <div class="detail">20. Mother Job     : ${formData.motherJob}</div>
            <div class="detail">21. Siblings       : ${formData.siblings}</div>
            <div class="detail">22. Address        : ${formData.address}</div>
            <div class="detail">23. Phone Numbers  : ${
              formData.phoneNumber
            }</div>
            <div class="detail">24. Asset Details  : ${
              formData.assetDetails
            }</div>
          </div>
          
          <div class="title">Rasi Chakram (Zodiac Chart)</div>
          <div class="section">
            <div class="charts-container">
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">Rasi</div>
                  <div class="cell house-1">${formData.house1 || ""}</div>
                  <div class="cell house-2">${formData.house2 || ""}</div>
                  <div class="cell house-3">${formData.house3 || ""}</div>
                  <div class="cell house-4">${formData.house4 || ""}</div>
                  <div class="cell house-5">${formData.house5 || ""}</div>
                  <div class="cell house-6">${formData.house6 || ""}</div>
                  <div class="cell house-7">${formData.house7 || ""}</div>
                  <div class="cell house-8">${formData.house8 || ""}</div>
                  <div class="cell house-9">${formData.house9 || ""}</div>
                  <div class="cell house-10">${formData.house10 || ""}</div>
                  <div class="cell house-11">${formData.house11 || ""}</div>
                  <div class="cell house-12">${formData.house12 || ""}</div>
                </div>
              </div>
              <div class="rasi-container">
                <div class="rasi-chart">
                  <div class="center">Subam</div>
                  <div class="cell house-1">${formData.house13 || ""}</div>
                  <div class="cell house-2">${formData.house14 || ""}</div>
                  <div class="cell house-3">${formData.house15 || ""}</div>
                  <div class="cell house-4">${formData.house16 || ""}</div>
                  <div class="cell house-5">${formData.house17 || ""}</div>
                  <div class="cell house-6">${formData.house18 || ""}</div>
                  <div class="cell house-7">${formData.house19 || ""}</div>
                  <div class="cell house-8">${formData.house20 || ""}</div>
                  <div class="cell house-9">${formData.house21 || ""}</div>
                  <div class="cell house-10">${formData.house22 || ""}</div>
                  <div class="cell house-11">${formData.house23 || ""}</div>
                  <div class="cell house-12">${formData.house24 || ""}</div>
                </div>
              </div>
            </div>
          </div>
        `;

        document.body.appendChild(tempDiv);

        html2canvas(tempDiv, {
          scale: 2,
          useCORS: true,
          logging: false,
        }).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const doc = new jsPDF("p", "mm", "a4");

          const imgWidth = 210;
          const pageHeight = 297;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;

          const scale = pageHeight / imgHeight;
          const scaledImgHeight = imgHeight * Math.min(scale, 1);
          const scaledImgWidth = imgWidth * Math.min(scale, 1);

          doc.addImage(imgData, "PNG", 0, 0, scaledImgWidth, scaledImgHeight);
          doc.save(`${formData.name || "biodata"}_transliterated.pdf`);
          document.body.removeChild(tempDiv);
        });
      }, 1000);
    };

    document.head.appendChild(html2canvasScript);
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            தமிழ் பயோடேட்டா ஜெனரேட்டர்
          </h1>
          <p className="text-gray-600">Tamil Biodata Generator</p>
        </div>

        <div className="backdrop-blur-md bg-white/90 rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
          <div className="space-y-8">
            <PersonalDetailsSection
              formData={formData}
              onInputChange={handleInputChange}
            />
            <FamilyDetailsSection
              formData={formData}
              onInputChange={handleInputChange}
            />
            <AstrologicalDetailsSection
              formData={formData}
              onInputChange={handleInputChange}
            />
          </div>

          <div className="text-center mt-8 space-y-4">
            <button
              onClick={generateFormattedPDF}
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white font-semibold rounded-full hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-emerald-500/25 mr-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <svg
                className="w-6 h-6 mr-2 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span className="relative z-10">
                தமிழ் பயோடேட்டா PDF ஜெனரேட் செய்
              </span>
            </button>

            <button
              onClick={generateTransliteratedPDF}
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-blue-500/25"
            >
              <svg
                className="w-6 h-6 mr-2 relative z-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Generate English Transliterated PDF
            </button>
            {/* 
            <p className="text-sm text-gray-600 max-w-2xl mx-auto">
              <strong>Note:</strong> The Tamil PDF uses HTML rendering for
              proper Tamil font support. The transliterated version uses English
              letters with Tamil meanings in parentheses.
              <br />
              <span className="text-xs mt-2 block">
                If Tamil characters don't appear correctly in the first PDF, use
                the transliterated version.
              </span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};
