import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Router from "./routes";
import Header from "@/layout/Header";
import { Footer } from "@/layout/Footer";
import { useEffect } from "react";
import ReactGA from "react-ga4";

// Initialize the QueryClient
const queryClient = new QueryClient();

// Functional component
const App: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics
    ReactGA.initialize("G-78HLTF0EKS");
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []); // Empty dependency array to run only once

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Header />
        <Router />
        <Footer />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
