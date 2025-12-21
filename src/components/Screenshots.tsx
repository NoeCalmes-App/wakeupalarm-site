import { Smartphone } from 'lucide-react';

interface ScreenshotsProps {
  lang: 'en' | 'fr';
}

export default function Screenshots({ lang }: ScreenshotsProps) {
  const content = {
    en: {
      title: 'See it in action',
      screens: [
        'Beautiful interface with daily affirmations',
        'Personalize your experience',
        'Track your progress and growth',
        'Customize categories and themes',
        'Create your own affirmations',
        'Share with friends and community'
      ]
    },
    fr: {
      title: 'Découvre l\'app',
      screens: [
        'Interface magnifique avec affirmations quotidiennes',
        'Personnalise ton expérience',
        'Suis ta progression et ton évolution',
        'Personnalise les catégories et thèmes',
        'Crée tes propres affirmations',
        'Partage avec tes amis et la communauté'
      ]
    }
  };

  const text = content[lang];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          {text.title}
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {text.screens.map((description, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 snap-center"
            >
              <div className="bg-gradient-to-br from-[#d8e6f0] to-[#8fb8d4] rounded-3xl p-8 h-[500px] shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full opacity-30"></div>
                <Smartphone size={120} className="text-white opacity-20 mb-4" />
                <p className="text-white text-center font-semibold text-lg mt-4">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-8">
          {text.screens.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-[#8fb8d4] opacity-30"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
