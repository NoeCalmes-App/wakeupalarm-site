import { Smartphone } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'fr';
}

export default function Hero({ lang }: HeroProps) {
  const content = {
    en: {
      title: 'Join the spiritual gangstas',
      subtitle: 'Daily affirmations that elevate your mindset',
      description: 'Transform your thoughts, transform your life. Get powerful daily affirmations designed to boost confidence, motivation, and inner strength.',
      appStore: 'Download on the App Store',
      googlePlay: 'Get it on Google Play'
    },
    fr: {
      title: 'Rejoins les gangstas spirituels',
      subtitle: 'Des affirmations quotidiennes qui élèvent ton mindset',
      description: 'Transforme tes pensées, transforme ta vie. Reçois des affirmations quotidiennes puissantes conçues pour booster ta confiance, ta motivation et ta force intérieure.',
      appStore: 'Télécharger sur l\'App Store',
      googlePlay: 'Disponible sur Google Play'
    }
  };

  const text = content[lang];

  return (
    <section className="bg-gradient-to-br from-[#d8e6f0] via-[#b8d4e6] to-[#8fb8d4] py-16 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white/10 backdrop-blur rounded-3xl p-8 md:p-12">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-white rounded-2xl mx-auto flex items-center justify-center shadow-xl">
                <span className="text-6xl md:text-8xl font-bold text-[#8fb8d4]">P</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4" style={{ fontFamily: '"Permanent Marker", cursive' }}>
              {text.title}
            </h1>
            <p className="text-xl md:text-2xl text-white mb-6 font-semibold">
              {text.subtitle}
            </p>
            <p className="text-base md:text-lg text-white/90 mb-10">
              {text.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg"
              >
                <Smartphone size={24} />
                {text.appStore}
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#8fb8d4] rounded-xl font-semibold hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
              >
                <Smartphone size={24} />
                {text.googlePlay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
