import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-[#d8e6f0] to-[#8fb8d4] py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-[#8fb8d4]">P</span>
            </div>
            <span className="text-2xl font-bold text-white">Punchlines</span>
          </Link>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-[#8fb8d4] hover:text-[#6a9abb] mb-8 font-semibold">
          <ArrowLeft size={20} />
          Retour à l'accueil
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de Confidentialité</h1>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p>
              Bienvenue sur Punchlines. Nous prenons votre vie privée au sérieux. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Collecte de Données</h2>
            <p className="mb-3">Nous collectons les types de données suivants :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Préférences de contenu et choix de personnalisation</li>
              <li>Paramètres d'utilisation de l'application</li>
              <li>Données d'analyse via Mixpanel, Sentry et AppsFlyer</li>
              <li>Informations techniques pour améliorer les performances</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation des Données</h2>
            <p className="mb-3">Vos données sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personnaliser votre expérience avec des affirmations adaptées</li>
              <li>Améliorer nos services et fonctionnalités</li>
              <li>Analyser l'utilisation de l'application</li>
              <li>Assurer la sécurité et la stabilité de l'application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Stockage et Sécurité</h2>
            <p>
              Toutes vos données sont stockées de manière sécurisée sur les serveurs Supabase. Nous utilisons des mesures de sécurité conformes aux normes de l'industrie pour protéger vos informations contre tout accès non autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vos Droits</h2>
            <p className="mb-3">Vous avez le droit de :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Accéder à vos données personnelles</li>
              <li>Rectifier vos informations</li>
              <li>Demander la suppression de vos données</li>
              <li>Retirer votre consentement à tout moment</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Outils d'Analyse</h2>
            <p>
              Nous utilisons Mixpanel, Sentry et AppsFlyer pour suivre les performances de l'application et améliorer l'expérience utilisateur. Ces outils collectent des données anonymisées sur l'utilisation de l'application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
            <p>
              Nous pouvons mettre à jour cette politique de confidentialité de temps en temps. Nous vous informerons de tout changement significatif via l'application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              Pour toute question concernant cette politique de confidentialité, veuillez nous contacter à :{' '}
              <a href="mailto:support@thepunchlines.app" className="text-[#8fb8d4] hover:underline">
                support@thepunchlines.app
              </a>
            </p>
          </section>

          <p className="text-sm text-gray-500 mt-8">
            Dernière mise à jour : Décembre 2023
          </p>
        </div>
      </div>
    </div>
  );
}
