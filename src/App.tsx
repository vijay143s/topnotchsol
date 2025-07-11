import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";

// Service Pages
import BookkeepingServices from "./pages/services/BookkeepingServices";
import MonthlyBookkeeping from "./pages/services/MonthlyBookkeeping";
import CatchUpBookkeeping from "./pages/services/CatchUpBookkeeping";
import QuickBooksBookkeeping from "./pages/services/QuickBooksBookkeeping";
import QuickBooksCleanup from "./pages/services/QuickBooksCleanup";
import WhiteLabelBookkeeping from "./pages/services/WhiteLabelBookkeeping";
import BookkeepingServicesNearMe from "./pages/services/BookkeepingServicesNearMe";
import BookkeepingUnderYourBrand from "./pages/services/BookkeepingUnderYourBrand";
import OutsourcedBookkeeping from "./pages/services/OutsourcedBookkeeping";
import BookkeepingOutsourcingService from "./pages/services/BookkeepingOutsourcingService";
import VirtualBookkeepingCPAReview from "./pages/services/VirtualBookkeepingCPAReview";
import MedicalDentalBookkeeping from "./pages/services/MedicalDentalBookkeeping";
import EcommerceBookkeeping from "./pages/services/EcommerceBookkeeping";
import LawyersBookkeeping from "./pages/services/LawyersBookkeeping";
import RealEstateBookkeeping from "./pages/services/RealEstateBookkeeping";
import NonprofitsBookkeeping from "./pages/services/NonprofitsBookkeeping";
import FranchiseBookkeeping from "./pages/services/FranchiseBookkeeping";
import ConstructionBookkeeping from "./pages/services/ConstructionBookkeeping";
import RestaurantsBookkeeping from "./pages/services/RestaurantsBookkeeping";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/pricing" element={<Pricing />} />
          
          {/* Core Bookkeeping Services */}
          <Route path="/services/bookkeeping-services" element={<BookkeepingServices />} />
          <Route path="/services/monthly-bookkeeping" element={<MonthlyBookkeeping />} />
          <Route path="/services/catch-up-bookkeeping" element={<CatchUpBookkeeping />} />
          <Route path="/services/quickbooks-bookkeeping" element={<QuickBooksBookkeeping />} />
          <Route path="/services/quickbooks-cleanup" element={<QuickBooksCleanup />} />
          <Route path="/services/white-label-bookkeeping" element={<WhiteLabelBookkeeping />} />
          <Route path="/services/bookkeeping-services-near-me" element={<BookkeepingServicesNearMe />} />
          
          {/* Outsourcing Services */}
          <Route path="/services/bookkeeping-under-your-brand" element={<BookkeepingUnderYourBrand />} />
          <Route path="/services/outsourced-bookkeeping" element={<OutsourcedBookkeeping />} />
          <Route path="/services/bookkeeping-outsourcing-service" element={<BookkeepingOutsourcingService />} />
          <Route path="/services/virtual-bookkeeping-cpa-review" element={<VirtualBookkeepingCPAReview />} />
          
          {/* Specialized by Industry */}
          <Route path="/services/medical-dental-bookkeeping" element={<MedicalDentalBookkeeping />} />
          <Route path="/services/ecommerce-bookkeeping" element={<EcommerceBookkeeping />} />
          <Route path="/services/lawyers-bookkeeping" element={<LawyersBookkeeping />} />
          <Route path="/services/real-estate-bookkeeping" element={<RealEstateBookkeeping />} />
          <Route path="/services/nonprofits-bookkeeping" element={<NonprofitsBookkeeping />} />
          <Route path="/services/franchise-bookkeeping" element={<FranchiseBookkeeping />} />
          <Route path="/services/construction-bookkeeping" element={<ConstructionBookkeeping />} />
          <Route path="/services/restaurants-bookkeeping" element={<RestaurantsBookkeeping />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
