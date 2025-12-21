import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions d'Utilisation</h1>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptation des Conditions</h2>
            <p>
              En utilisant l'application Punchlines, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser l'application.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Utilisation de l'Application</h2>
            <p className="mb-3">Vous acceptez de :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Utiliser l'application uniquement à des fins légales</li>
              <li>Ne pas tenter de nuire au fonctionnement de l'application</li>
              <li>Ne pas copier ou distribuer le contenu sans autorisation</li>
              <li>Respecter les droits de propriété intellectuelle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contenu Utilisateur</h2>
            <p>
              Vous conservez tous les droits sur le contenu que vous créez dans l'application. Cependant, en créant du contenu, vous nous accordez une licence mondiale, non exclusive et gratuite pour utiliser, modifier et afficher ce contenu dans le cadre de nos services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comptes</h2>
            <p>
              Vous êtes responsable de maintenir la confidentialité de vos identifiants de connexion. Vous êtes entièrement responsable de toutes les activités qui se produisent sous votre compte.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Achats In-App</h2>
            <p>
              Les achats effectués via l'application sont traités par les plateformes Apple App Store ou Google Play Store. Tous les achats sont soumis aux conditions de ces plateformes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation de Responsabilité</h2>
            <p className="mb-3">
              Punchlines est fourni "tel quel" sans garantie d'aucune sorte. Nous ne garantissons pas que :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>L'application sera toujours disponible ou sans interruption</li>
              <li>Les erreurs seront corrigées</li>
              <li>L'application répondra à vos besoins spécifiques</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications des Conditions</h2>
            <p>
              Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications entreront en vigueur dès leur publication dans l'application. Votre utilisation continue de l'application constitue votre acceptation des conditions modifiées.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Résiliation</h2>
            <p>
              Nous nous réservons le droit de suspendre ou de résilier votre accès à l'application à tout moment, sans préavis, en cas de violation de ces conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Droit Applicable</h2>
            <p>
              Ces conditions sont régies par les lois en vigueur. Tout litige sera soumis à la juridiction compétente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              Pour toute question concernant ces conditions, veuillez nous contacter à :{' '}
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
