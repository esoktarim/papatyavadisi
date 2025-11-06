import { useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import "./App.css";

// Lazy load non-critical pages for better initial load performance
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const HousingPlans = lazy(() => import("./pages/HousingPlans"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Location = lazy(() => import("./pages/Location"));
const Locations = lazy(() => import("./pages/Locations"));
const ECatalog = lazy(() => import("./pages/ECatalog"));
const SalesOffice = lazy(() => import("./pages/SalesOffice"));
const Corporate = lazy(() => import("./pages/Corporate"));
const HouseDetail = lazy(() => import("./pages/HouseDetail"));
const Contact = lazy(() => import("./pages/Contact"));
const KVKK = lazy(() => import("./pages/KVKK"));
const CerezPolitikasi = lazy(() => import("./pages/CerezPolitikasi"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#C7A664]"></div>
  </div>
);

export default function App() {
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  const handleLanguageChange = (lang: "tr" | "en") => {
    setLanguage(lang);
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route
            path="/"
            element={<Index language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/projeler"
            element={<ProjectsPage language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/konut-planlari"
            element={<HousingPlans language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/galeri"
            element={<Gallery language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/lokasyon"
            element={<Location language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/e-katalog"
            element={<ECatalog language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/satis-ofisi"
            element={<SalesOffice language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/lokasyonlar"
            element={<Locations language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/kurumsal"
            element={<Corporate language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/iletisim"
            element={<Contact language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/ev/:id"
            element={<HouseDetail language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/kvkk"
            element={<KVKK language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="/cerez-politikasi"
            element={<CerezPolitikasi language={language} onLanguageChange={handleLanguageChange} />}
          />
          <Route
            path="*"
            element={<NotFound language={language} onLanguageChange={handleLanguageChange} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
