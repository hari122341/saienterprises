import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/machinery" element={<MachineryHub />} />
          <Route path="/machinery/:categorySlug" element={<MachineryCategory />} />
          <Route path="/machinery/:categorySlug/:productId" element={<ProductDetail />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/global" element={<GlobalPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
