import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SlidePage01 from "./pages/slides/SlidePage01";
import SlidePage02 from "./pages/slides/SlidePage02";
import SlidePage03 from "./pages/slides/SlidePage03";
import SlidePage04 from "./pages/slides/SlidePage04";
import SlidePage05 from "./pages/slides/SlidePage05";
import SlidePage06 from "./pages/slides/SlidePage06";
import SlidePage07 from "./pages/slides/SlidePage07";
import SlidePage08 from "./pages/slides/SlidePage08";
import SlidePage09 from "./pages/slides/SlidePage09";
import SlidePage10 from "./pages/slides/SlidePage10";
import SlidePage11 from "./pages/slides/SlidePage11";
import SlidePage12 from "./pages/slides/SlidePage12";
import SlidePage13 from "./pages/slides/SlidePage13";
import SlidePage14 from "./pages/slides/SlidePage14";
import SlidePage15 from "./pages/slides/SlidePage15";
import SlidePage16 from "./pages/slides/SlidePage16";
import SlidePage17 from "./pages/slides/SlidePage17";
import SlidePage18 from "./pages/slides/SlidePage18";
import SlidePage19 from "./pages/slides/SlidePage19";
import SlidePage20 from "./pages/slides/SlidePage20";
import SlidePage21 from "./pages/slides/SlidePage21";
import SlidePage22 from "./pages/slides/SlidePage22";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/slide/1" element={<SlidePage01 />} />
          <Route path="/slide/2" element={<SlidePage02 />} />
          <Route path="/slide/3" element={<SlidePage03 />} />
          <Route path="/slide/4" element={<SlidePage04 />} />
          <Route path="/slide/5" element={<SlidePage05 />} />
          <Route path="/slide/6" element={<SlidePage06 />} />
          <Route path="/slide/7" element={<SlidePage07 />} />
          <Route path="/slide/8" element={<SlidePage08 />} />
          <Route path="/slide/9" element={<SlidePage09 />} />
          <Route path="/slide/10" element={<SlidePage10 />} />
          <Route path="/slide/11" element={<SlidePage11 />} />
          <Route path="/slide/12" element={<SlidePage12 />} />
          <Route path="/slide/13" element={<SlidePage13 />} />
          <Route path="/slide/14" element={<SlidePage14 />} />
          <Route path="/slide/15" element={<SlidePage15 />} />
          <Route path="/slide/16" element={<SlidePage16 />} />
          <Route path="/slide/17" element={<SlidePage17 />} />
          <Route path="/slide/18" element={<SlidePage18 />} />
          <Route path="/slide/19" element={<SlidePage19 />} />
          <Route path="/slide/20" element={<SlidePage20 />} />
          <Route path="/slide/21" element={<SlidePage21 />} />
          <Route path="/slide/22" element={<SlidePage22 />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
