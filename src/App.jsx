import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import AetheraHero from "./pages/Heropage";
import ProjectPage from "./pages/ProjectPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";
import ServicePage from "./pages/ServicePage";
import TestimonialPage from "./pages/TestimonialPage";

// Component to reset scroll position on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <ScrollToTop />
      
      {/* ✅ GLOBAL HEADER */}
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />

      {/* ✅ ROUTES */}
      <Routes>
        <Route path="/" element={<AetheraHero />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/testimonials" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/services" element={<ServicePage />} />

        
      </Routes>
    </>
  );
}

export default App;