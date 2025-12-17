import { useState } from "react";
import { PersonalDetailsSection } from "./sections/PersonalDetailsSection";
import { FamilyDetailsSection } from "./sections/FamilyDetailsSection";
import { AstrologicalDetailsSection } from "./sections/AstrologicalDetailsSection";
import { AstrologicalDataDisplay } from "./AstrologicalData";
import { TypewriterEffect } from "../components/ui/typewriter-effect";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { useLanguage } from "../context/LanguageContext";

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
  const { t, language } = useLanguage();
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
  const validateRequiredFields = (formData: FormData) => {
    const requiredFields = [
      // Personal Details
      { field: "name", label: t("name") },
      { field: "gender", label: t("gender") },
      { field: "dateOfBirth", label: t("dateOfBirth") },
      { field: "timeOfBirth", label: t("timeOfBirth") },
      { field: "placeOfBirth", label: t("placeOfBirth") },
      { field: "residence", label: t("residence") },
      { field: "education", label: t("education") },
      { field: "jobDetails", label: t("jobDetails") },
      { field: "income", label: t("income") },
      { field: "caste", label: t("caste") },
      { field: "heightCm", label: t("height") },
      { field: "weight", label: t("weight") },
      { field: "color", label: t("color") },

      // Family Details
      { field: "fatherName", label: t("fatherName") },
      { field: "fatherJob", label: t("fatherJob") },
      { field: "motherName", label: t("motherName") },
      { field: "motherJob", label: t("motherJob") },
      { field: "siblings", label: t("siblings") },
      { field: "phoneNumber", label: t("phoneNumber") },
      { field: "whatsappNumber", label: t("whatsappNumber") },
      { field: "address", label: t("address") },
      { field: "assetDetails", label: t("assetDetails") },

      // Astrological Details
      { field: "lagnam", label: t("lagnam") },
      {
        field: "rasiNakshatram",
        label: t("rasiNakshatram"),
      },
      { field: "dosham", label: t("dosham") },
    ];

    const missingFields: string[] = [];

    for (const { field, label } of requiredFields) {
      const value = formData[field as keyof FormData];
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
  const showValidationError = (missingFields: string[]) => {
    const errorMessage = `${t("validationError")}:\n\n${missingFields
      .slice(0, 10)
      .join("\n")}${missingFields.length > 10
        ? `\n\n... ${t("andMore")} ${missingFields.length - 10}`
        : ""
      }`;

    alert(errorMessage);
  };

  const generatePDFInternal = (content: string, fontFamily: string, fontUrl: string, filename: string) => {
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
        document.head.removeChild(fontLink);
      });
    }, 1000);
  };

  // Shared styles
  const getSharedStyles = (fontFamily: string) => `
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
  const generateCharts = (formData: FormData, centerText1: string, centerText2: string) => `
  <div class="charts-container">
    <div class="rasi-container">
      <div class="rasi-chart">
        <div class="center">${centerText1}</div>
        ${Array.from(
    { length: 12 },
    (_, i) =>
      `<div class="cell house-${i + 1}">${formData[`house${i + 1}` as keyof FormData] || ""
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
      `<div class="cell house-${i + 1}">${formData[`house${i + 13}` as keyof FormData] || ""
      }</div>`
  ).join("")}
      </div>
    </div>
  </div>
`;

  // Generate field list
  const generateFieldsHTML = (fields: any[], formData: FormData) =>
    fields
      .map(
        (field) =>
          `<div class="detail"><span class="label">${field.label
          }</span> : ${field.getValue(formData)}</div>`
      )
      .join("");

  const handleGeneratePDF = () => {
    // Validate required fields first
    const validation = validateRequiredFields(formData);

    if (!validation.isValid) {
      showValidationError(validation.missingFields);
      return;
    }

    // Define Configuration based on Language
    let fontName = "'Noto Sans Tamil', sans-serif";
    let fontUrl = "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap";
    let fields = [];
    let familyFields = [];
    let chartCenterRasi = t("rasiChakram");
    let chartCenterSubam = t("subam");
    let topSymbol = "உ";

    // Common Get Value Logic
    const getValue = (key: keyof FormData) => (data: FormData) => data[key];
    const getHeightValue = (data: FormData) => `${data.heightCm} CM / ${(parseFloat(data.heightCm) * 0.0328084).toFixed(2)} ft`;

    if (language === 'en') {
      fontName = "'Noto Sans', sans-serif";
      fontUrl = "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap";
      topSymbol = "Om"; // Or keep blank

      fields = [
        { label: `1. ${t('name')}`, getValue: getValue('name') },
        { label: `2. ${t('gender')}`, getValue: getValue('gender') },
        { label: `3. ${t('dateOfBirth')}`, getValue: getValue('dateOfBirth') },
        { label: `4. ${t('timeOfBirth')}`, getValue: getValue('timeOfBirth') },
        { label: `5. ${t('placeOfBirth')}`, getValue: getValue('placeOfBirth') },
        { label: `6. ${t('education')}`, getValue: getValue('education') },
        { label: `7. ${t('jobDetails')}`, getValue: getValue('jobDetails') },
        { label: `8. ${t('rasiNakshatram')}`, getValue: getValue('rasiNakshatram') },
        // English version had "Moon Sign" (house1) different from Tamil logic? keeping logic consistent now.
        // Existing logic was specific. Let's use standard keys.
        { label: `9. ${t('lagnam')}`, getValue: getValue('lagnam') },
        { label: `10. ${t('dosham')}`, getValue: getValue('dosham') },
        { label: `11. ${t('residence')}`, getValue: getValue('residence') },
        { label: `12. ${t('income')}`, getValue: getValue('income') },
        { label: `13. ${t('caste')}`, getValue: getValue('caste') },
        { label: `14. ${t('height')}`, getValue: getHeightValue },
        { label: `15. ${t('weight')}`, getValue: getValue('weight') },
        { label: `16. ${t('color')}`, getValue: getValue('color') },
      ];
      familyFields = [
        { label: `17. ${t('fatherName')}`, getValue: getValue('fatherName') },
        { label: `18. ${t('fatherJob')}`, getValue: getValue('fatherJob') },
        { label: `19. ${t('motherName')}`, getValue: getValue('motherName') },
        { label: `20. ${t('motherJob')}`, getValue: getValue('motherJob') },
        { label: `21. ${t('siblings')}`, getValue: getValue('siblings') },
        { label: `22. ${t('address')}`, getValue: getValue('address') },
        { label: `23. ${t('phoneNumber')}`, getValue: getValue('phoneNumber') },
        { label: `24. ${t('assetDetails')}`, getValue: getValue('assetDetails') },
      ];
    } else if (language === 'hi') {
      fontName = "'Noto Sans Devanagari', sans-serif";
      fontUrl = "https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;700&display=swap";
      topSymbol = "श्री गणेशाय नमः";

      fields = [
        { label: `1. ${t('name')}`, getValue: getValue('name') },
        { label: `2. ${t('gender')}`, getValue: getValue('gender') },
        { label: `3. ${t('dateOfBirth')}`, getValue: getValue('dateOfBirth') },
        { label: `4. ${t('timeOfBirth')}`, getValue: getValue('timeOfBirth') },
        { label: `5. ${t('placeOfBirth')}`, getValue: getValue('placeOfBirth') },
        { label: `6. ${t('education')}`, getValue: getValue('education') },
        { label: `7. ${t('jobDetails')}`, getValue: getValue('jobDetails') },
        { label: `8. ${t('rasiNakshatram')}`, getValue: getValue('rasiNakshatram') },
        { label: `9. ${t('lagnam')}`, getValue: getValue('lagnam') },
        { label: `10. ${t('dosham')}`, getValue: getValue('dosham') },
        { label: `11. ${t('residence')}`, getValue: getValue('residence') },
        { label: `12. ${t('income')}`, getValue: getValue('income') },
        { label: `13. ${t('caste')}`, getValue: getValue('caste') },
        { label: `14. ${t('height')}`, getValue: getHeightValue },
        { label: `15. ${t('weight')}`, getValue: getValue('weight') },
        { label: `16. ${t('color')}`, getValue: getValue('color') },
      ];
      familyFields = [
        { label: `17. ${t('fatherName')}`, getValue: getValue('fatherName') },
        { label: `18. ${t('fatherJob')}`, getValue: getValue('fatherJob') },
        { label: `19. ${t('motherName')}`, getValue: getValue('motherName') },
        { label: `20. ${t('motherJob')}`, getValue: getValue('motherJob') },
        { label: `21. ${t('siblings')}`, getValue: getValue('siblings') },
        { label: `22. ${t('address')}`, getValue: getValue('address') },
        { label: `23. ${t('phoneNumber')}`, getValue: getValue('phoneNumber') },
        { label: `24. ${t('assetDetails')}`, getValue: getValue('assetDetails') },
      ];
    } else {
      // Tamil
      fontName = "'Noto Sans Tamil', sans-serif";
      fontUrl = "https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;700&display=swap";
      topSymbol = "உ";

      fields = [
        { label: `1. ${t('name')}`, getValue: getValue('name') },
        { label: `2. ${t('gender')}`, getValue: getValue('gender') },
        { label: `3. ${t('dateOfBirth')}`, getValue: getValue('dateOfBirth') },
        { label: `4. ${t('timeOfBirth')}`, getValue: getValue('timeOfBirth') },
        { label: `5. ${t('placeOfBirth')}`, getValue: getValue('placeOfBirth') },
        { label: `6. ${t('education')}`, getValue: getValue('education') },
        { label: `7. ${t('jobDetails')}`, getValue: getValue('jobDetails') },
        { label: `8. ${t('rasiNakshatram')}`, getValue: getValue('rasiNakshatram') },
        { label: `9. ${t('lagnam')}`, getValue: getValue('lagnam') },
        { label: `10. ${t('dosham')}`, getValue: getValue('dosham') },
        { label: `11. ${t('residence')}`, getValue: getValue('residence') },
        { label: `12. ${t('income')}`, getValue: getValue('income') },
        { label: `13. ${t('caste')}`, getValue: getValue('caste') },
        { label: `14. ${t('height')}`, getValue: getHeightValue },
        { label: `15. ${t('weight')}`, getValue: getValue('weight') },
        { label: `16. ${t('color')}`, getValue: getValue('color') },
      ];
      familyFields = [
        { label: `17. ${t('fatherName')}`, getValue: getValue('fatherName') },
        { label: `18. ${t('fatherJob')}`, getValue: getValue('fatherJob') },
        { label: `19. ${t('motherName')}`, getValue: getValue('motherName') },
        { label: `20. ${t('motherJob')}`, getValue: getValue('motherJob') },
        { label: `21. ${t('siblings')}`, getValue: getValue('siblings') },
        { label: `22. ${t('address')}`, getValue: getValue('address') },
        { label: `23. ${t('phoneNumber')}`, getValue: getValue('phoneNumber') },
        { label: `24. ${t('assetDetails')}`, getValue: getValue('assetDetails') },
      ];
    }


    const content = `
    ${getSharedStyles(fontName)}
    <div class="main-container">
      <div class="top-border-text">${topSymbol}</div>
      <div class="header">
        <img src="logo.png" alt="Logo" class="header-logo" onerror="this.style.display='none'">
        <div class="header-title">${t('appTitle')}</div>
        <div class="header-website">https://rpdil23.github.io/marriage-biodata-generator</div>
      </div>
      
      <div class="title">${t('jaathagaKurippu')}</div>
      <div class="section">${generateFieldsHTML(fields, formData)}</div>
      
      <div class="title">${t('kudumbaVivaram')}</div>
      <div class="section">${generateFieldsHTML(familyFields, formData)}</div>
      
      <div class="title">${t('rasiChakram')}</div>
      <div class="section">
        ${generateCharts(formData, chartCenterRasi, chartCenterSubam)}
        <div class="other-details">${formData.otherDetails}</div>
      </div>
    </div>
  `;

    generatePDFInternal(
      content,
      fontName,
      fontUrl,
      `${formData.name || "biodata"}_${language}.pdf`
    );
  };

  const words = [
    { text: "Marriage" },
    { text: "Biodata" },
    { text: "Generator" },
    { text: t("generatePDF"), className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-full mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {t("appTitle")}
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
                  onClick={handleGeneratePDF}
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
                    {t("generatePDF")} ({t(language === 'en' ? 'generateEnglishPDF' : language === 'ta' ? 'generateTamilPDF' : 'generateHindiPDF')})
                  </span>
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
