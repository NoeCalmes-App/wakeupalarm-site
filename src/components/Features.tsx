import { Calendar, Zap, Palette, Shield, Target, Edit3 } from 'lucide-react';

interface FeaturesProps {
  lang: 'en' | 'fr';
}

export default function Features({ lang }: FeaturesProps) {
  const content = {
    en: {
      title: 'Features',
      features: [
        {
          icon: Calendar,
          title: 'Daily Affirmations',
          description: 'Start your day with powerful affirmations delivered fresh every morning'
        },
        {
          icon: Zap,
          title: 'Motivational Boost',
          description: 'Get instant motivation whenever you need it most'
        },
        {
          icon: Palette,
          title: 'Full Customization',
          description: 'Personalize your affirmations to match your goals and aspirations'
        },
        {
          icon: Shield,
          title: 'Negativity Filter',
          description: 'Block toxic content and maintain a positive mindset'
        },
        {
          icon: Target,
          title: 'Tailored Content',
          description: 'Receive affirmations that resonate with your personal journey'
        },
        {
          icon: Edit3,
          title: 'Create Your Own',
          description: 'Write and save your own custom affirmations'
        }
      ]
    },
    fr: {
      title: 'Fonctionnalités',
      features: [
        {
          icon: Calendar,
          title: 'Affirmations Quotidiennes',
          description: 'Commence ta journée avec des affirmations puissantes livrées chaque matin'
        },
        {
          icon: Zap,
          title: 'Boost Motivationnel',
          description: 'Obtiens une motivation instantanée quand tu en as le plus besoin'
        },
        {
          icon: Palette,
          title: 'Personnalisation Complète',
          description: 'Personnalise tes affirmations pour correspondre à tes objectifs'
        },
        {
          icon: Shield,
          title: 'Filtre de Négativité',
          description: 'Bloque le contenu toxique et maintiens un état d\'esprit positif'
        },
        {
          icon: Target,
          title: 'Contenu Adapté',
          description: 'Reçois des affirmations qui résonnent avec ton parcours personnel'
        },
        {
          icon: Edit3,
          title: 'Crée les Tiennes',
          description: 'Écris et sauvegarde tes propres affirmations personnalisées'
        }
      ]
    }
  };

  const text = content[lang];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
          {text.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {text.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#d8e6f0] to-[#b8d4e6] p-8 rounded-2xl shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4">
                  <Icon size={28} className="text-[#8fb8d4]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-sm">
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
