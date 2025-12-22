import { Brain, Music, Smartphone, Timer, Palette, Target } from 'lucide-react';

interface FeaturesProps {
  lang: 'en' | 'fr';
}

export default function Features({ lang }: FeaturesProps) {
  const content = {
    en: {
      title: 'Features',
      features: [
        {
          icon: Brain,
          title: 'Interactive Missions',
          description: 'Solve math problems, scan QR codes, shake your phone or take steps to turn off your alarm'
        },
        {
          icon: Music,
          title: 'Spotify Integration',
          description: 'Wake up to your favorite tracks directly from Spotify or choose from our sound library'
        },
        {
          icon: Smartphone,
          title: 'Animated Wallpapers',
          description: 'Customize your alarm screen with dynamic wallpapers (GIF, MP4) for a unique wake-up experience'
        },
        {
          icon: Timer,
          title: 'Difficulty Levels',
          description: 'Choose Easy, Medium or Hard difficulty for each mission type to match your wake-up needs'
        },
        {
          icon: Palette,
          title: 'Full Customization',
          description: 'Personalized emojis, labels, custom sounds, volume control and repeat schedules'
        },
        {
          icon: Target,
          title: 'Mission Combos',
          description: 'Stack up to 3 different missions per alarm to guarantee you wake up for real'
        }
      ]
    },
    fr: {
      title: 'Fonctionnalités',
      features: [
        {
          icon: Brain,
          title: 'Missions Interactives',
          description: 'Résous des calculs, scanne des QR codes, secoue ton téléphone ou fais des pas pour éteindre ton alarme'
        },
        {
          icon: Music,
          title: 'Intégration Spotify',
          description: 'Réveille-toi sur tes morceaux préférés directement depuis Spotify ou choisis dans notre bibliothèque'
        },
        {
          icon: Smartphone,
          title: 'Wallpapers Animés',
          description: 'Personnalise ton écran d\'alarme avec des fonds animés (GIF, MP4) pour un réveil unique'
        },
        {
          icon: Timer,
          title: 'Niveaux de Difficulté',
          description: 'Choisis entre Facile, Moyen ou Difficile pour chaque type de mission selon tes besoins'
        },
        {
          icon: Palette,
          title: 'Personnalisation Totale',
          description: 'Emojis personnalisés, labels, sons custom, contrôle du volume et répétitions configurables'
        },
        {
          icon: Target,
          title: 'Combos de Missions',
          description: 'Combine jusqu\'à 3 missions différentes par alarme pour garantir un réveil en béton'
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className="py-20 px-6 bg-onboarding-background-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-onboarding-title mb-10 md:mb-16">
          {text.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {text.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-onboarding-card p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-onboarding-button-bg rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-onboarding-icon" />
                </div>
                <h3 className="text-xl font-bold text-onboarding-title mb-3">
                  {feature.title}
                </h3>
                <p className="text-onboarding-subtitle text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
