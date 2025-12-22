import { Link } from 'react-router-dom';
import logoFr from '../assets/logo.svg';
import logoEn from '../assets/logo.en.svg';

interface FooterProps {
  lang: 'en' | 'fr';
}

export default function Footer({ lang }: FooterProps) {
  const content = {
    en: {
      privacy: 'Privacy',
      terms: 'Terms',
      support: 'Support',
      copyright: '© 2023 WakeUp Alarme. All rights reserved.'
    },
    fr: {
      privacy: 'Confidentialité',
      terms: 'Conditions',
      support: 'Support',
      copyright: '© 2023 WakeUp Alarme. Tous droits réservés.'
    }
  };

  const text = content[lang];
  const logo = lang === 'en' ? logoEn : logoFr;

  return (
    <footer className="bg-onboarding-background text-onboarding-title py-12 px-6 border-t border-onboarding-border shadow-soft-lg">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="WakeUp Alarme Logo" className="h-8" />
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy" className="text-onboarding-subtitle hover:text-onboarding-title transition-colors">
              {text.privacy}
            </Link>
            <Link to="/terms" className="text-onboarding-subtitle hover:text-onboarding-title transition-colors">
              {text.terms}
            </Link>
            <Link to="/support" className="text-onboarding-subtitle hover:text-onboarding-title transition-colors">
              {text.support}
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm text-onboarding-subtitle">
          {text.copyright}
        </div>
      </div>
    </footer>
  );
}
