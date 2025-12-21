import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#8fb8d4] rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">P</span>
            </div>
            <span className="text-2xl font-bold">Punchlines</span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link to="/privacy" className="hover:text-[#8fb8d4] transition-colors">
              Confidentialité
            </Link>
            <Link to="/terms" className="hover:text-[#8fb8d4] transition-colors">
              Conditions
            </Link>
            <Link to="/support" className="hover:text-[#8fb8d4] transition-colors">
              Support
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          © 2023 Punchlines. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
