import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useScrollToTop } from "./hooks/useScrollToTop";
import PremiumLoader from "./components/PremiumLoader";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import MachineryHub from "./pages/MachineryHub";
import MachineryCategory from "./pages/MachineryCategory";
import ProductDetail from "./pages/ProductDetail";
import BrandsPage from "./pages/BrandsPage";
import GlobalPage from "./pages/GlobalPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useScrollToTop();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/machinery" element={<MachineryHub />} />
        <Route path="/machinery/:categorySlug" element={<MachineryCategory />} />
        <Route path="/machinery/:categorySlug/:productId" element={<ProductDetail />} />
        <Route path="/brands" element={<BrandsPage />} />
        <Route path="/global" element={<GlobalPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    // Check if already loaded in this session
    const loaded = sessionStorage.getItem('sai-loaded');
    if (loaded) {
      setIsLoading(false);
      setHasLoaded(true);
    }
  }, []);

  const handleLoaderComplete = () => {
    setIsLoading(false);
    setHasLoaded(true);
    sessionStorage.setItem('sai-loaded', 'true');
  };

  return (
    <>
      {isLoading && !hasLoaded && (
        <PremiumLoader onComplete={handleLoaderComplete} />
      )}
      <div style={{ opacity: isLoading && !hasLoaded ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        <AnimatedRoutes />
      </div>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
