import image1 from '../assets/image/1.png';
import image3 from '../assets/image/3.png';
import image5 from '../assets/image/5.png';
import image7 from '../assets/image/7.png';
import image1En from '../assets/image/1.en.png';
import image3En from '../assets/image/3.en.png';
import image5En from '../assets/image/5.en.png';
import image7En from '../assets/image/7.en.png';

interface ScreenshotsProps {
  lang: 'en' | 'fr';
}

export default function Screenshots({ lang }: ScreenshotsProps) {
  const content = {
    en: {
      title: 'See it in action'
    },
    fr: {
      title: 'Découvre l\'app'
    }
  };

  const text = content[lang];
  const screenshots = lang === 'en'
    ? [image1En, image3En, image5En, image7En]
    : [image1, image3, image5, image7];

  return (
    <section className="py-20 px-6 bg-onboarding-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-onboarding-title mb-10 md:mb-16">
          {text.title}
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-72 snap-center hover:shadow-xl transition-shadow duration-300 rounded-3xl"
            >
              <img
                src={screenshot}
                alt={`Screenshot ${index + 1}`}
                className="w-full h-auto rounded-3xl border-2 border-onboarding-border border-opacity-70"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
