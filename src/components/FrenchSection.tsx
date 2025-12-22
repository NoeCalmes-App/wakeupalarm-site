const AppleIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

export default function FrenchSection() {
  return (
    <section className="py-20 px-6 bg-onboarding-background-secondary">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-onboarding-title mb-7 md:mb-6">
          Marre de te réveiller à moitié ?
        </h2>
        <p className=" text-lg md:text-xl text-onboarding-subtitle mb-8">
          WakeUp Alarm te force à te lever pour de vrai. Scanne un QR code dans ta salle de bain, résous des calculs pour activer ton cerveau, ou secoue ton téléphone jusqu'à ce que tu sois bien réveillé. Pas de pitié, que des résultats.
        </p>
        <div className="flex flex-row gap-2 md:gap-4 w-full md:w-auto justify-center">
          <a
            href="#"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-onboarding-button-bg text-onboarding-button-text rounded-xl text-sm md:text-base font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-lg whitespace-nowrap"
          >
            <AppleIcon />
            <span>Appstore</span>
          </a>
          <a
            href="#"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 md:gap-3 px-4 md:px-6 py-3 md:py-4 bg-onboarding-background text-onboarding-title rounded-xl text-sm md:text-base font-semibold transition-all hover:-translate-y-1 shadow-lg whitespace-nowrap"
          >
            <GooglePlayIcon />
            <span>Google Play</span>
          </a>
        </div>
      </div>
    </section>
  );
}
