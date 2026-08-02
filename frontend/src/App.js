import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import SiteLayout from "@/components/layout/SiteLayout";
import HomePage from "@/pages/HomePage";
import ServicesHub from "@/pages/ServicesHub";
import ServicePage from "@/pages/ServicePage";
import ProjectsHub from "@/pages/ProjectsHub";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/pages/About";
import Trade from "@/pages/Trade";
import GuidesHub from "@/pages/GuidesHub";
import GuideArticle from "@/pages/GuideArticle";
import JaipurHub from "@/pages/JaipurHub";
import Contact from "@/pages/Contact";
import Reviews from "@/pages/Reviews";
import AdminLogin from "@/pages/AdminLogin";
import AdminLeads from "@/pages/AdminLeads";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesHub />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/projects" element={<ProjectsHub />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/trade" element={<Trade />} />
            <Route path="/guides" element={<GuidesHub />} />
            <Route path="/guides/:slug" element={<GuideArticle />} />
            <Route path="/jaipur" element={<JaipurHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLeads />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
