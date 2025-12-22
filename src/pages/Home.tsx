import { useContext } from 'react';
import { LanguageContext } from '../App';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import FrenchSection from '../components/FrenchSection';
import Footer from '../components/Footer';

export default function Home() {
  const { lang, setLang } = useContext(LanguageContext);

  return (
    <div className="min-h-screen bg-white">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Features lang={lang} />
      <Screenshots lang={lang} />
      <FrenchSection lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}
