import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Clock } from 'lucide-react';

export default function Support() {
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

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>

        <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Besoin d'Aide ?</h2>
            <p className="text-gray-700">
              Notre équipe est là pour vous aider. Que vous ayez une question technique, une suggestion d'amélioration ou que vous rencontriez un problème, n'hésitez pas à nous contacter.
            </p>
          </section>

          <section className="bg-gradient-to-br from-[#d8e6f0] to-[#b8d4e6] rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contactez-nous</h2>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="text-[#8fb8d4]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:support@thepunchlines.app"
                    className="text-[#6a9abb] hover:underline font-semibold text-lg"
                  >
                    support@thepunchlines.app
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="text-[#8fb8d4]" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Délai de Réponse</h3>
                  <p className="text-gray-700">
                    Nous répondons généralement sous 1 à 2 jours ouvrables
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Questions Fréquentes</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-[#8fb8d4] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Comment personnaliser mes affirmations ?</h3>
                <p className="text-gray-700">
                  Accédez aux paramètres de l'application et sélectionnez vos préférences de contenu. Vous pouvez choisir les catégories qui vous intéressent et créer vos propres affirmations personnalisées.
                </p>
              </div>

              <div className="border-l-4 border-[#8fb8d4] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">L'application est-elle gratuite ?</h3>
                <p className="text-gray-700">
                  Oui, Punchlines est gratuite avec des fonctionnalités de base. Des options premium sont disponibles pour débloquer du contenu supplémentaire.
                </p>
              </div>

              <div className="border-l-4 border-[#8fb8d4] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">Comment supprimer mon compte ?</h3>
                <p className="text-gray-700">
                  Vous pouvez demander la suppression de votre compte en nous contactant à l'adresse email ci-dessus. Nous traiterons votre demande dans les plus brefs délais.
                </p>
              </div>

              <div className="border-l-4 border-[#8fb8d4] pl-4">
                <h3 className="font-bold text-gray-900 mb-2">L'application fonctionne-t-elle hors ligne ?</h3>
                <p className="text-gray-700">
                  Une fois les affirmations téléchargées, vous pouvez les consulter hors ligne. Cependant, certaines fonctionnalités nécessitent une connexion internet.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-6">
            <p className="text-center text-gray-700">
              Vous n'avez pas trouvé la réponse à votre question ?<br />
              <a
                href="mailto:support@thepunchlines.app"
                className="text-[#8fb8d4] hover:underline font-semibold"
              >
                Contactez notre équipe support
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
