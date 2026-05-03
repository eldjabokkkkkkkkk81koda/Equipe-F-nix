import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-transparent py-16 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-3xl lg:text-4xl font-display text-white tracking-widest mb-3">
            OS VINGADORES<span className="text-[#D32F44]">.</span>
          </h2>
          <p className="text-xs tracking-[0.3em] text-[#E74C60]/60 font-body uppercase">
            Juntos somos mais fortes
          </p>
        </div>

        <div className="flex space-x-8">
          <a href="#" className="p-2 text-gray-light/50 hover:text-[#E74C60] hover:bg-wine/10 rounded-full transition-all duration-300">
            <Instagram className="w-5 h-5" strokeWidth={1.5} />
            <span className="sr-only">Instagram</span>
          </a>
          <a href="#" className="p-2 text-gray-light/50 hover:text-[#E74C60] hover:bg-wine/10 rounded-full transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5"
            >
              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
            </svg>
            <span className="sr-only">TikTok</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-light/30">
        <p>&copy; {new Date().getFullYear()} Os Vingadores. Todos os direitos reservados.</p>
        <p className="tracking-widest uppercase">ODS 18 &mdash; Igualdade Étnico-Racial</p>
      </div>
    </footer>
  );
}
