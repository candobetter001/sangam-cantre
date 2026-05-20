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
import AnnualReport from "./pages/AnnualReport";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ";
import PressKit from "./pages/PressKit";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import CodeOfConduct from "./pages/CodeOfConduct";
import Accessibility from "./pages/Accessibility";
import Diversity from "./pages/Diversity";
import OpenData from "./pages/OpenData";
import Sitemap from "./pages/Sitemap";
import Volunteer from "./pages/Volunteer";
import SpeakerRequest from "./pages/SpeakerRequest";
import Collaborate from "./pages/Collaborate";
import Bookmarks from "./pages/Bookmarks";
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
            <Route path="/team" element={<Team />} />
            <Route path="/focus-areas" element={<FocusAreas />} />
            <Route path="/events" element={<Events />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/media" element={<Media />} />
            <Route path="/work-with-us" element={<WorkWithUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/annual-report" element={<AnnualReport />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/press-kit" element={<PressKit />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/speaker-request" element={<SpeakerRequest />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/diversity" element={<Diversity />} />
            <Route path="/open-data" element={<OpenData />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
