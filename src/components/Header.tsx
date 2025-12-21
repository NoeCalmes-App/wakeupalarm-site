import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
}

export default function Header({ lang, setLang }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

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

  const links = navLinks[lang];

  return (
    <header className="bg-gradient-to-r from-[#d8e6f0] to-[#8fb8d4] py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
            <span className="text-2xl font-bold text-[#8fb8d4]">P</span>
          </div>
          <span className="text-2xl font-bold text-white">Punchlines</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-white hover:text-gray-100 transition-colors font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col p-4 gap-3">
            {links.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-[#8fb8d4] font-semibold hover:bg-gray-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
