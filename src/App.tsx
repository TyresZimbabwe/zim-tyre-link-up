
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Brands from "./pages/Brands";
import TyreSizeGuide from "./pages/FindSize"; // Renamed component but using same file
import FAQ from "./pages/FAQ";
import Warranty from "./pages/Warranty";
import Locations from "./pages/Locations";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Directory from "./pages/Directory";
import ListYourBusiness from "./pages/ListYourBusiness";
import SupplierProfile from "./pages/SupplierProfile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/tyre-size-guide" element={<TyreSizeGuide />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/warranty" element={<Warranty />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* New Directory Routes */}
          <Route path="/directory" element={<Directory />} />
          <Route path="/list-your-business" element={<ListYourBusiness />} />
          <Route path="/supplier/:slug" element={<SupplierProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
