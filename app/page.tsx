'use client'
import React, { useState } from 'react';

const DentistLinkPage = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  // Tooth SVG component for the background pattern
  const BackgroundTooth = ({ className }: { className: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.05">
      <path d="M12 2C8 2 7 4 7 7c0 3 1 4 1 7 0 3-2 4-2 6s1 2 4 2 2-1 2-3c0-2 0-2 0-2s0 0 0 2c0 2 0 3 3 3s4 0 4-2-2-3-2-6c0-3 1-4 1-7 0-3-1-5-5-5z" />
    </svg>
  );

  const handleWhatsAppClick = () => {
    const phoneNumber = "584247193903";
    const message = "Hola, Dra. Yanira👋 Quisiera hacerle una consulta sobre sus servicios odontológicos.";
    
    // Codifica el mensaje para que sea válido en una URL
    const encodedMessage = encodeURIComponent(message);
    
    // Crea el enlace final
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Abre en una pestaña nueva
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 py-12 font-sans text-slate-700 overflow-hidden relative">
      
      {/* --- Floating Background Pattern --- */}
      <div className="absolute inset-0 pointer-events-none">
        <BackgroundTooth className="absolute top-10 left-10 w-20 h-20 rotate-12" />
        <BackgroundTooth className="absolute top-40 right-[-20px] w-32 h-32 -rotate-12" />
        <BackgroundTooth className="absolute bottom-20 left-[-10px] w-24 h-24 rotate-45" />
        <BackgroundTooth className="absolute bottom-40 right-10 w-20 h-20 -rotate-12" />
        <BackgroundTooth className="absolute top-1/2 left-1/2 w-16 h-16 opacity-[0.03]" />
      </div>

      {/* Decorative Blurs */}
      <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-[5%] left-[-10%] w-72 h-72 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-80"></div>

      {/* Profile Section */}
      <div className="relative z-10 flex flex-col items-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2b4fa1] to-cyan-300 rounded-full blur-sm opacity-40 animate-spin-slow"></div>
          <div className="relative w-28 h-28 rounded-full border-4 border-white shadow-xl overflow-hidden bg-slate-100">
            <img src="/profile.jpeg" alt="Yanira Zerpa" className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-1 right-2 w-6 h-6 bg-green-400 border-4 border-white rounded-full"></div>
        </div>
        <h1 className="mt-4 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1e3a8a] to-[#2b4fa1]">
          Dra. Yanira Zerpa
        </h1>
        <div className="px-3 py-1 bg-blue-50 rounded-full mt-1 text-[10px] uppercase tracking-widest text-[#2b4fa1] font-bold">
          Odontólogo ULA
        </div>
      </div>

      <div className="relative z-10 max-w-[300px] text-center mb-8">
        <p className="text-slate-500 text-sm leading-relaxed italic">
          ¡Hola! 👋 ¿Listo/Lista para lucir tu mejor sonrisa? Elige una opción abajo y hablemos.
        </p>
      </div>

      {/* Links Container */}
      <div className="relative z-10 w-full max-w-sm space-y-4">
        
        {/* WhatsApp Button */}
        <a onClick={handleWhatsAppClick} className="group flex items-center justify-between w-full p-1 pr-5 bg-gradient-to-r from-[#2b4fa1] to-[#4a72d4] text-white rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-3 rounded-xl backdrop-blur-md">
              <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.413z"/></svg>
            </div>
            <span className="font-bold tracking-tight">Agendar vía WhatsApp</span>
          </div>
          <span className="bg-white/20 rounded-full p-1"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" /></svg></span>
        </a>

        {/* Location Accordion */}
        <div className="w-full">
          <button 
            onClick={() => toggleSection('location')}
            className="flex items-center justify-between w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-blue-50 rounded-[2rem] text-slate-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4 font-bold text-sm tracking-tight"><span className="text-xl">📍</span> Ver Ubicación</div>
            <svg className={`w-5 h-5 text-[#2b4fa1] transition-transform duration-300 ${openSection === 'location' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>
          
          {openSection === 'location' && (
            <div className="mt-2 p-6 bg-white border-2 border-blue-50 rounded-[2rem] text-center shadow-inner animate-fadeIn">
              <h3 className="text-[#2b4fa1] font-bold text-lg mb-4">Mérida, Venezuela</h3>
              <div className="space-y-4 text-sm text-slate-500 leading-relaxed">
                <p>Av. 3 entre calles 20 y 21,<br/>Edificio Empresarial Gran Mundo, Piso 4, local 4-2</p>
                {/* <p>Clínica El Rosario,<br/>Sector Belén, Planta Baja.</p>
                <p>Consultorio Particular,<br/>C.C. Las Tapias, Nivel 2.</p> */}
              </div>
            </div>
          )}
        </div>

        {/* Services Accordion */}
        <div className="w-full">
          <button 
            onClick={() => toggleSection('services')}
            className="flex items-center justify-between w-full px-6 py-4 bg-white/70 backdrop-blur-sm border-2 border-indigo-50 rounded-[2rem] text-slate-600 transition-all duration-300"
          >
            <div className="flex items-center gap-4 font-bold text-sm tracking-tight"><span className="text-xl">✨</span> Nuestros Servicios</div>
            <svg className={`w-5 h-5 text-[#2b4fa1] transition-transform duration-300 ${openSection === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
          </button>

          {openSection === 'services' && (
            <div className="mt-2 p-6 bg-white border-2 border-indigo-50 rounded-[2rem] shadow-inner animate-fadeIn">
              <ul className="space-y-3 text-sm text-slate-500 text-center font-medium">
                <li className="pb-2 border-b border-slate-50">Revisión general</li>
                <li className="pb-2 border-b border-slate-50">Limpieza dental</li>
                <li className="pb-2 border-b border-slate-50">Endodoncia</li>
                <li className="pb-2 border-b border-slate-50">Extracciones</li>
                <li className="pb-2 border-b border-slate-50">Prótesis dental</li>
                <li className="pb-2 border-b border-slate-50">Restauraciones</li>
                <li className="pb-2 border-b border-slate-50">Odontopediatría</li>
                <li className="pb-2 border-b border-slate-50">Radiografías periapicales</li>
              </ul>
            </div>
          )}
        </div>

      </div>

      {/* Social Row */}
      <div className="flex gap-6 mt-12 relative z-10">
         <a href="https://www.instagram.com/od.yanirazerpa/" className="p-3 bg-blue-50 rounded-2xl text-[#2b4fa1] hover:bg-[#2b4fa1] hover:text-white transition-all shadow-sm"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
         {/* <a href="#" className="p-3 bg-blue-50 rounded-2xl text-[#2b4fa1] hover:bg-[#2b4fa1] hover:text-white transition-all shadow-sm"><svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg></a> */}
      </div>

      <footer className="mt-auto pt-10 text-[10px] text-slate-400 uppercase tracking-widest font-bold opacity-60">
        Yanira Zerpa • Odontología
      </footer>

      <style>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default DentistLinkPage;