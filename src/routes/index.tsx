import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import TermsAndPrivacy from "../pages/Terms&conditions";
import PrivacyPolicy from "../pages/PricacyPolicy";
import LicenseAgreement from "../pages/licence";
const Router = () => {
  return (
    <BrowserRouter basename="/marriage-biodata-generator">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms-and-conditions" element={<TermsAndPrivacy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/license-agreement" element={<LicenseAgreement />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
