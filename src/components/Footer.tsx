import { Instagram, Linkedin, Twitter, Facebook } from "lucide-react";

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
            <Twitter className="w-5 h-5" strokeWidth={1.5} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="p-2 text-gray-light/50 hover:text-[#E74C60] hover:bg-wine/10 rounded-full transition-all duration-300">
            <Facebook className="w-5 h-5" strokeWidth={1.5} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="p-2 text-gray-light/50 hover:text-[#E74C60] hover:bg-wine/10 rounded-full transition-all duration-300">
            <Linkedin className="w-5 h-5" strokeWidth={1.5} />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-light/30">
        <p>&copy; {new Date().getFullYear()} Os Vingadores. Todos os direitos reservados.</p>
        <p className="tracking-widest uppercase">ODS 16 &mdash; Paz e Justiça</p>
      </div>
    </footer>
  );
}
