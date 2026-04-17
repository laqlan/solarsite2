import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { I18nProvider } from "./i18n/context";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Services from "./pages/services";
import Projects from "./pages/projects";
import About from "./pages/about";
import ResidentialInstallation from "./pages/residential-installation";

export default function App() {
  return (
    <I18nProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential-installation" element={<ResidentialInstallation />} />
        </Routes>
      </Router>
    </I18nProvider>
  );
}
