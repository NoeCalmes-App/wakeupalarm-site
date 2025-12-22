import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';
import Home from './pages/Home';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Support from './pages/Support';

export const LanguageContext = createContext<{
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}>({
  lang: 'fr',
  setLang: () => {},
});

function App() {
  const [lang, setLang] = useState<'en' | 'fr'>(() => {
    // Vérifie d'abord si une langue est déjà enregistrée
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'en' || savedLang === 'fr') {
      return savedLang;
    }

    // Sinon, détecte la langue du navigateur
    const browserLang = navigator.language.toLowerCase();

    // Liste des codes de langue pour le français
    const frenchLanguages = ['fr', 'fr-fr', 'fr-be', 'fr-ca', 'fr-ch', 'fr-lu', 'fr-mc'];

    // Si la langue du navigateur commence par 'fr' ou est dans la liste
    if (frenchLanguages.some(lang => browserLang.startsWith(lang))) {
      return 'fr';
    }

    // Par défaut, anglais
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
