import { useState, useRef, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoFr from '../assets/logo.svg';
import logoEn from '../assets/logo.en.svg';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navLinks = {
    en: [
      { label: 'Privacy', path: '/privacy' },
      { label: 'Terms', path: '/terms' },
      { label: 'Support', path: '/support' }
    ],
    fr: [
      { label: 'Confidentialité', path: '/privacy' },
      { label: 'Conditions', path: '/terms' },
      { label: 'Support', path: '/support' }
    ]
  };

  const languages = {
    en: 'English',
    fr: 'Français'
  };

  const links = navLinks[lang];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-onboarding-card sticky top-0 z-50 border-b border-onboarding-border shadow-soft-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/">
          <img src={lang === 'en' ? logoEn : logoFr} alt="WakeUp Alarme Logo" className="h-7" />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-onboarding-background-secondary rounded-lg border border-onboarding-border/50 text-onboarding-title font-medium hover:bg-onboarding-background-secondary transition-colors"
            >
              <span>{languages[lang]}</span>
              <ChevronDown size={16} className={`transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full mt-2 right-0 bg-onboarding-card rounded-lg shadow-soft-lg overflow-hidden min-w-[140px] border border-onboarding-border/50">
                <button
                  onClick={() => {
                    setLang('fr');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-onboarding-background-secondary transition-colors ${
                    lang === 'fr' ? 'bg-onboarding-background-secondary text-onboarding-title font-semibold' : 'text-onboarding-subtitle'
                  }`}
                >
                  Français
                </button>
                <button
                  onClick={() => {
                    setLang('en');
                    setLangDropdownOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-onboarding-background-secondary transition-colors ${
                    lang === 'en' ? 'bg-onboarding-background-secondary text-onboarding-title font-semibold' : 'text-onboarding-subtitle'
                  }`}
                >
                  English
                </button>
              </div>
            )}
          </div>

          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`${
                location.pathname === link.path
                  ? 'text-onboarding-title'
                  : 'text-onboarding-subtitle hover:text-onboarding-title'
              } transition-colors font-medium`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-onboarding-icon"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-onboarding-card border-b border-onboarding-border">
          <div className="px-6 py-4">
            <div className="flex flex-col gap-3">
              <div className="px-4 py-2 bg-onboarding-background-secondary rounded-lg border border-onboarding-border/50">
                <div className="flex items-center gap-2 text-onboarding-subtitle text-sm mb-2">
                  <Globe size={16} />
                  <span className="font-medium">Langue</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLang('fr');
                      setMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg border border-onboarding-border/50 text-sm font-medium transition-colors ${
                      lang === 'fr' ? 'bg-onboarding-button-bg text-onboarding-button-text' : 'bg-onboarding-background text-onboarding-subtitle'
                    }`}
                  >
                    Français
                  </button>
                  <button
                    onClick={() => {
                      setLang('en');
                      setMenuOpen(false);
                    }}
                    className={`flex-1 px-3 py-2 rounded-lg border border-onboarding-border/50 text-sm font-medium transition-colors ${
                      lang === 'en' ? 'bg-onboarding-button-bg text-onboarding-button-text' : 'bg-onboarding-background text-onboarding-subtitle'
                    }`}
                  >
                    English
                  </button>
                </div>
              </div>

              {links.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg ${
                    location.pathname === link.path
                      ? 'text-onboarding-title bg-onboarding-background-secondary'
                      : 'text-onboarding-subtitle'
                  } font-semibold hover:bg-onboarding-background-secondary transition-colors`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
