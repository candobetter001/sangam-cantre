import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import FocusAreas from "./pages/FocusAreas";
import Events from "./pages/Events";
import Publications from "./pages/Publications";
import Media from "./pages/Media";
import WorkWithUs from "./pages/WorkWithUs";
import Contact from "./pages/Contact";
import Awards from "./pages/Awards";
import Podcast from "./pages/Podcast";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/Scroll";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/events" element={<Events />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/media" element={<Media />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
