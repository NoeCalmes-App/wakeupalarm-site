import { Smartphone } from 'lucide-react';

export default function FrenchSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#8fb8d4] to-[#6a9abb]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{ fontFamily: '"Permanent Marker", cursive' }}>
          Marre des affirmations guimauve ?
        </h2>
        <p className="text-xl text-white mb-8">
          Punchlines te propose des affirmations qui ont du punch, de la personnalité et qui parlent vraiment à ta réalité. Pas de blabla, que du concret pour booster ton mindset au quotidien.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-all hover:-translate-y-1 shadow-lg"
          >
            <Smartphone size={24} />
            Télécharge maintenant
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-8 py-4 bg-white text-[#8fb8d4] rounded-xl font-semibold hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-lg"
          >
            <Smartphone size={24} />
            C'est gratuit !
          </a>
        </div>
      </div>
    </section>
  );
}
