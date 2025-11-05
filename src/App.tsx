import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import HousingPlans from "./pages/HousingPlans";
import Gallery from "./pages/Gallery";
import Location from "./pages/Location";
import Locations from "./pages/Locations";
import ECatalog from "./pages/ECatalog";
import SalesOffice from "./pages/SalesOffice";
import Corporate from "./pages/Corporate";
import HouseDetail from "./pages/HouseDetail";
import Contact from "./pages/Contact";
import KVKK from "./pages/KVKK";
import CerezPolitikasi from "./pages/CerezPolitikasi";
import NotFound from "./pages/NotFound";
import "./App.css";

export default function App() {
  const [language, setLanguage] = useState<"tr" | "en">("tr");

  const handleLanguageChange = (lang: "tr" | "en") => {
    setLanguage(lang);
  };

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
