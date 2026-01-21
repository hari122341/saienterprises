import { useState, useEffect, Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useScrollToTop } from "./hooks/useScrollToTop";
import PremiumLoader from "./components/PremiumLoader";
import PageSkeleton from "./components/PageSkeleton";
import Index from "./pages/Index";

// Lazy load pages for better performance
const AboutPage = lazy(() => import("./pages/AboutPage"));
const MachineryHub = lazy(() => import("./pages/MachineryHub"));
const MachineryCategory = lazy(() => import("./pages/MachineryCategory"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const PartnersPage = lazy(() => import("./pages/PartnersPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  // Scroll to top on route change
  useScrollToTop();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageSkeleton />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/machinery" element={<MachineryHub />} />
          <Route path="/machinery/:categorySlug" element={<MachineryCategory />} />
          <Route path="/machinery/:categorySlug/:productId" element={<ProductDetail />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
