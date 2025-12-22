import { useContext } from 'react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';
import { Headphones, Mail } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Support() {
  const { lang, setLang } = useContext(LanguageContext);

  const content = {
    en: {
      title: 'Support - WakeUp Alarm',
      needHelp: 'Need help?',
      description: 'Having an issue with the WakeUp Alarm app or have a question? We\'re here to help!',
      contactUs: 'Contact us',
      contactDescription: 'Send us an email and we\'ll get back to you as soon as possible:',
      responseTime: 'We typically respond within 1 to 2 business days.',
      backHome: '← Back to home'
    },
    fr: {
      title: 'Support - WakeUp Alarme',
      needHelp: 'Besoin d\'aide ?',
      description: 'Tu rencontres un problème avec l\'application WakeUp Alarme ou tu as une question ? On est là pour t\'aider !',
      contactUs: 'Contacte-nous',
      contactDescription: 'Envoie-nous un email et on te répondra aussi vite que possible :',
      responseTime: 'Nous répondons généralement sous 1 à 2 jours ouvrés.',
      backHome: '← Retour à l\'accueil'
    }
  };

  const text = content[lang];

  return (
    <div className="min-h-screen bg-onboarding-background">
      <Header lang={lang} setLang={setLang} />

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-2xl md:text-4xl font-bold text-onboarding-title mb-8">{text.title}</h1>

        <div className="bg-onboarding-card rounded-2xl shadow-md p-6 space-y-8 text-center">
          <section className="flex flex-col items-center">
            <Headphones size={52} className="text-onboarding-button-bg mb-4" />
            <h2 className="text-2xl font-bold text-onboarding-title mb-4">{text.needHelp}</h2>
            <p className="text-onboarding-subtitle text-lg">
              {text.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-onboarding-title mb-4">{text.contactUs}</h2>
            <p className="text-onboarding-subtitle mb-4">
              {text.contactDescription}
            </p>
            <div className="bg-onboarding-background rounded-xl p-5 inline-flex items-center gap-3 mb-4">
              <Mail size={24} className="text-onboarding-title" />
              <a
                href="mailto:support@wakeupalarm.app"
                className="text-onboarding-title font-semibold text-lg"
              >
                support@wakeupalarm.app
              </a>
            </div>
            <p className="text-onboarding-subtitle">
              {text.responseTime}
            </p>
          </section>

          <section className="pt-4">
            <Link
              to="/"
              className="text-onboarding-button-bg hover:text-onboarding-subtitle font-semibold"
            >
              {text.backHome}
            </Link>
          </section>
        </div>
      </div>
      <Footer lang={lang} />
    </div>
  );
}
