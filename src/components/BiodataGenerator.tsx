import { useState } from "react";
import { PersonalDetailsSection } from "./sections/PersonalDetailsSection";
import { FamilyDetailsSection } from "./sections/FamilyDetailsSection";
import { AstrologicalDetailsSection } from "./sections/AstrologicalDetailsSection";
import { AstrologicalDataDisplay } from "./AstrologicalData";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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
  otherDetails: string;
  dosham: string;
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
    otherDetails: "",
    dosham: "",
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

  // Validation function to check all required fields
  const validateRequiredFields = (formData) => {
    const requiredFields = [
      // Personal Details
      { field: "name", label: "பெயர் (Name)" },
      { field: "gender", label: "பாலினம் (Gender)" },
      { field: "dateOfBirth", label: "பிறந்த தேதி (Date of Birth)" },
      { field: "timeOfBirth", label: "பிறந்த நேரம் (Time of Birth)" },
      { field: "placeOfBirth", label: "பிறந்த ஊர் (Place of Birth)" },
      { field: "residence", label: "இருப்பிடம் (Residence)" },
      { field: "education", label: "படிப்பு (Education)" },
      { field: "jobDetails", label: "பணி விவரங்கள் (Job Details)" },
      { field: "income", label: "வருமானம் (Income)" },
      { field: "caste", label: "ஜாதி (Caste)" },
      { field: "heightCm", label: "உயரம் (Height)" },
      { field: "weight", label: "எடை (Weight)" },
      { field: "color", label: "நிறம் (Color)" },

      // Family Details
      { field: "fatherName", label: "தந்தை பெயர் (Father's Name)" },
      { field: "fatherJob", label: "தந்தை பணி விவரம் (Father's Job Details)" },
      { field: "motherName", label: "தாய் பெயர் (Mother's Name)" },
      { field: "motherJob", label: "தாய் பணி விவரம் (Mother's Job Details)" },
      { field: "siblings", label: "உடன் பிறந்தவர்கள் (Siblings)" },
      { field: "phoneNumber", label: "தொலைபேசி எண் (Phone Number)" },
      { field: "whatsappNumber", label: "வாட்ஸ்ஆப் எண் (WhatsApp Number)" },
      { field: "address", label: "முகவரி (Address)" },
      { field: "assetDetails", label: "சொத்து விவரம் (Asset Details)" },

      // Astrological Details
      { field: "lagnam", label: "லக்னம் (Lagnam)" },
      {
        field: "rasiNakshatram",
        label: "ராசி - நட்சத்திரம் (Rasi - Nakshatram)",
      },
      { field: "dosham", label: "ராகு கேது தோசம் (Rahu Ketu Dosham)" },

      // House fields (1-24)
      // ...Array.from({ length: 24 }, (_, i) => ({
      //   field: `house${i + 1}`,
      //   label: `House ${i + 1}`,
      // })),
    ];

    const missingFields = [];

    for (const { field, label } of requiredFields) {
      const value = formData[field];
      if (!value || value.toString().trim() === "") {
        missingFields.push(label);
      }
    }

    return {
      isValid: missingFields.length === 0,
      missingFields,
    };
  };

  // Show validation error message
  const showValidationError = (missingFields) => {
    const errorMessage = `கீழ்க்கண்ட அவசியமான புலங்களை பூர்த்தி செய்யவும் (Please fill the following required fields):\n\n${missingFields
      .slice(0, 10)
      .join("\n")}${
      missingFields.length > 10
        ? `\n\n... and ${missingFields.length - 10} more fields`
        : ""
    }`;

    alert(errorMessage);
  };

  const generateFormattedPDF = () => {
    const validation = validateRequiredFields(formData);
    if (!validation.isValid) {
      showValidationError(validation.missingFields);
      return;
    }
    // Directly call the PDF generation logic
    generatePDFWithHTML2Canvas();
  };

  const generatePDF = (content, fontFamily, fontUrl, filename) => {
    const tempDiv = document.createElement("div");
    tempDiv.style.position = "fixed";
    tempDiv.style.top = "-9999px";
    tempDiv.style.width = "250mm";
    tempDiv.style.minHeight = "297mm";
    tempDiv.style.padding = "10mm";
    tempDiv.style.backgroundColor = "white";
    tempDiv.style.fontFamily = fontFamily;

    const fontLink = document.createElement("link");
    fontLink.href = fontUrl;
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    setTimeout(() => {
      tempDiv.innerHTML = content;
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
        doc.save(filename);
        document.body.removeChild(tempDiv);
      });
    }, 1000);
  };

  // Shared styles
  const getSharedStyles = (fontFamily) => `
  <style>
    * { font-family: ${fontFamily} !important; }
    .main-container { 
      border: 2px solid #333; 
      padding: 15px; 
      margin: 0; 
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      width: 100%;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      position: relative;
    }
    .top-border-text {
     position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-50%);
      background-color: white;
      padding: 0 10px;
      font-size: 14px;
      font-weight: bold;
      color: #333;
      text-decoration: underline;
    }
    .header { 
      text-align: center; 
      border-bottom: 2px solid #333; 
      padding-bottom: 10px; 
      margin-bottom: 15px; 
      margin-top: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .header-logo { 
      width: 40px; 
      height: 40px; 
      margin-bottom: 8px; 
      margin-top: 0;
    }
    .header-title { 
      font-size: 18px; 
      font-weight: bold; 
      color: #333; 
      margin-bottom: 5px; 
    }
    .header-website { 
      font-size: 12px; 
      color: #666; 
      font-style: italic; 
    }
    .title { font-size: 20px; font-weight: bold; text-align: center; margin-bottom: 15px; color: #2c3e50; }
    .section { margin-bottom: 15px; }
    .section-title { font-size: 16px; font-weight: bold; margin-bottom: 5px; margin-top: 10px; }
    .other-details { font-size: 14px; margin-bottom: 5px; margin-top: 10px; }
    .detail { font-size: 14px; margin-bottom: 4px; line-height: 1.4; }
    .detail .label { font-weight: bold; color: #2c3e50; }
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
`;

  // Generate charts HTML
  const generateCharts = (formData, centerText1, centerText2) => `
  <div class="charts-container">
    <div class="rasi-container">
      <div class="rasi-chart">
        <div class="center">${centerText1}</div>
        ${Array.from(
          { length: 12 },
          (_, i) =>
            `<div class="cell house-${i + 1}">${
              formData[`house${i + 1}`] || ""
            }</div>`
        ).join("")}
      </div>
    </div>
    <div class="rasi-container">
      <div class="rasi-chart">
        <div class="center">${centerText2}</div>
        ${Array.from(
          { length: 12 },
          (_, i) =>
            `<div class="cell house-${i + 1}">${
              formData[`house${i + 13}`] || ""
            }</div>`
        ).join("")}
      </div>
    </div>
  </div>
`;

  // Generate field list
  const generateFields = (fields, formData) =>
    fields
      .map(
        (field) =>
          `<div class="detail"><span class="label">${
            field.label
          }</span> : ${field.getValue(formData)}</div>`
      )
      .join("");

  // Tamil PDF generation
  const generatePDFWithHTML2Canvas = () => {
    // Validate required fields first
    const validation = validateRequiredFields(formData);

    if (!validation.isValid) {
      showValidationError(validation.missingFields);
      return;
    }

    const tamilFields = [
      { label: "1. பெயர்", getValue: (data) => data.name },
      { label: "2. பாலினம்", getValue: (data) => data.gender },
      { label: "3. பிறந்த தேதி", getValue: (data) => data.dateOfBirth },
      { label: "4. பிறந்த நேரம்", getValue: (data) => data.timeOfBirth },
      { label: "5. பிறந்த ஊர்", getValue: (data) => data.placeOfBirth },
      { label: "6. கல்வி", getValue: (data) => data.education },
      { label: "7. வேலை", getValue: (data) => data.jobDetails },
      {
        label: "8. ராசி - நட்சத்திரம்",
        getValue: (data) => data.rasiNakshatram,
      },
      { label: "9. லக்னம்", getValue: (data) => data.lagnam },
      { label: "10. ராகு கேது தோசம்", getValue: (data) => data.dosham },
      { label: "11. இருப்பிடம்", getValue: (data) => data.residence },
      { label: "12. வருமானம்", getValue: (data) => data.income },
      { label: "13. இனம்", getValue: (data) => data.caste },
      {
        label: "14. உயரம்",
        getValue: (data) =>
          `${data.heightCm} CM / ${(
            parseFloat(data.heightCm) * 0.0328084
          ).toFixed(2)} ft`,
      },
      { label: "15. எடை", getValue: (data) => data.weight },
      { label: "16. நிறம்", getValue: (data) => data.color },
    ];

    const familyFields = [
      { label: "17. தந்தை", getValue: (data) => data.fatherName },
      { label: "18. தந்தை", getValue: (data) => data.fatherJob },
      { label: "19. தாய்", getValue: (data) => data.motherName },
      { label: "20. தாய்", getValue: (data) => data.motherJob },
      { label: "21. உடன் பிறந்தவர்", getValue: (data) => data.siblings },
      { label: "22. முகவரி", getValue: (data) => data.address },
      { label: "23. தொலைபேசி எண்கள்", getValue: (data) => data.phoneNumber },
      { label: "24. சொத்து விவரம்", getValue: (data) => data.assetDetails },
    ];

    const content = `
    ${getSharedStyles("'Noto Sans Tamil', sans-serif")}
    <div class="main-container">
      <div class="top-border-text">உ</div>
      <div class="header">
        <img src="logo.png" alt="Logo" class="header-logo" onerror="this.style.display='none'">
        <div class="header-title">Marriage BioData Generator</div>
        <div class="header-website">https://rpdil23.github.io/marriage-biodata-generator</div>
      </div>
      
      <div class="title">ஜாதகக் குறிப்பு</div>
      <div class="section">${generateFields(tamilFields, formData)}</div>
      
      <div class="title">குடும்ப விவரம்</div>
      <div class="section">${generateFields(familyFields, formData)}</div>
      
      <div class="title">ராசி சக்கரம்</div>
      <div class="section">
        ${generateCharts(formData, "ராசி", "சுபம்")}
        <div class="other-details">${formData.otherDetails}</div>
      </div>
    </div>
  `;

    generatePDF(
      content,
      "'Noto Sans Tamil', sans-serif",
      "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap",
      `${formData.name || "biodata"}_tamil.pdf`
    );
  };

  // English PDF generation
  const generateTransliteratedPDF = () => {
    // Validate required fields first
    const validation = validateRequiredFields(formData);

    if (!validation.isValid) {
      showValidationError(validation.missingFields);
      return;
    }

    const englishFields = [
      { label: "1. Name", getValue: (data) => data.name },
      { label: "2. Gender", getValue: (data) => data.gender },
      { label: "3. Date of Birth", getValue: (data) => data.dateOfBirth },
      { label: "4. Time of Birth", getValue: (data) => data.timeOfBirth },
      { label: "5. Place of Birth", getValue: (data) => data.placeOfBirth },
      { label: "6. Education", getValue: (data) => data.education },
      { label: "7. Job", getValue: (data) => data.jobDetails },
      { label: "8. Star", getValue: (data) => data.rasiNakshatram },
      { label: "9. Moon Sign", getValue: (data) => data.house1 },
      { label: "10. Ascendant", getValue: (data) => data.lagnam },
      { label: "11. Dosham", getValue: (data) => data.dosham },
      { label: "12. Residence", getValue: (data) => data.residence },
      { label: "13. Income", getValue: (data) => data.income },
      { label: "14. Caste", getValue: (data) => data.caste },
      {
        label: "15. Height",
        getValue: (data) =>
          `${data.heightCm} CM / ${(
            parseFloat(data.heightCm) * 0.0328084
          ).toFixed(2)} ft`,
      },
      { label: "16. Weight", getValue: (data) => data.weight },
      { label: "17. Color", getValue: (data) => data.color },
    ];

    const englishFamilyFields = [
      { label: "18. Father", getValue: (data) => data.fatherName },
      { label: "19. Father Job", getValue: (data) => data.fatherJob },
      { label: "20. Mother", getValue: (data) => data.motherName },
      { label: "21. Mother Job", getValue: (data) => data.motherJob },
      { label: "22. Siblings", getValue: (data) => data.siblings },
      { label: "23. Address", getValue: (data) => data.address },
      { label: "24. Phone Numbers", getValue: (data) => data.phoneNumber },
      { label: "25. Asset Details", getValue: (data) => data.assetDetails },
    ];

    const content = `
    ${getSharedStyles("'Noto Sans', sans-serif")}
    <div class="main-container">
      <div class="top-border-text">உ</div>
      <div class="header">
        <img src="logo.png" alt="Logo" class="header-logo" onerror="this.style.display='none'">
        <div class="header-title">Marriage BioData Generator</div>
        <div class="header-website">https://rpdil23.github.io/marriage-biodata-generator</div>
      </div>
      
      <div class="title">Jaathaga Kurippu (Horoscope Details)</div>
      <div class="section">${generateFields(englishFields, formData)}</div>
      
      <div class="title">Kudumba Vivaram (Family Details)</div>
      <div class="section">${generateFields(
        englishFamilyFields,
        formData
      )}</div>
      
      <div class="title">Rasi Chakram (Zodiac Chart)</div>
      <div class="section">
        ${generateCharts(formData, "Rasi", "Subam")}
        <div class="other-details">${formData.otherDetails}</div>
      </div>
    </div>
  `;

    generatePDF(
      content,
      "'Noto Sans', sans-serif",
      "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap",
      `${formData.name || "biodata"}_transliterated.pdf`
    );
  };

  const words = [
    {
      text: "Marriage",
    },
    {
      text: "Biodata",
    },
    {
      text: "Generator",
    },
    {
      text: "Generate-PDF",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-full mx-auto">
        {/* <button
          onClick={() => {
            throw new Error("This is your first error!");
          }}
        >
          Break the world
        </button> */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            தமிழ் பயோடேட்டா ஜெனரேட்டர்
          </h1>
          <TypewriterEffect words={words} />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Side - Form */}
          <div className="flex-1 lg:w-3/4">
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
              </div>
            </div>
          </div>

          {/* Right Side - Star Signs & Nakshatrams */}
          <div className="lg:w-1/4">
            <AstrologicalDataDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};
