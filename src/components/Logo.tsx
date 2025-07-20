import React from 'react';

export default function Logo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <div className={`${className} relative`}>
      {/* Cercle de fond */}
      <div className="w-full h-full bg-amber-50 rounded-full border-2 border-amber-200 flex items-center justify-center relative overflow-hidden">
        
        {/* Éléments floraux décoratifs */}
        <div className="absolute inset-0">
          {/* Fleurs rouges (poppies) */}
          <div className="absolute top-1 left-2 w-2 h-2 bg-red-600 rounded-full"></div>
          <div className="absolute top-2 right-1 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
          <div className="absolute bottom-2 left-1 w-1.5 h-1.5 bg-red-600 rounded-full"></div>
          
          {/* Fleurs jaunes */}
          <div className="absolute top-1 right-3 w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
          <div className="absolute bottom-1 right-2 w-1 h-1 bg-yellow-400 rounded-full"></div>
          
          {/* Fleurs bleues */}
          <div className="absolute top-3 left-1 w-1 h-1 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-3 right-3 w-1 h-1 bg-blue-400 rounded-full"></div>
          
          {/* Feuilles vertes */}
          <div className="absolute top-0 left-4 w-1 h-2 bg-green-600 transform rotate-45"></div>
          <div className="absolute bottom-0 right-4 w-1 h-2 bg-green-700 transform -rotate-45"></div>
        </div>

        {/* Maison centrale */}
        <div className="relative z-10">
          {/* Toit bleu */}
          <div className="w-6 h-2 bg-blue-600 transform rotate-45 origin-bottom-left"></div>
          <div className="w-6 h-2 bg-blue-600 transform -rotate-45 origin-bottom-right ml-3"></div>
          
          {/* Facade de la maison */}
          <div className="w-8 h-4 bg-orange-500 rounded-sm border border-orange-600">
            {/* Fenêtres */}
            <div className="flex justify-between px-1 pt-1">
              <div className="w-1 h-1 bg-white rounded-sm"></div>
              <div className="w-1 h-1 bg-white rounded-sm"></div>
            </div>
            {/* Porte */}
            <div className="w-1 h-1.5 bg-white rounded-sm mx-auto mt-1"></div>
          </div>
          
          {/* Soleil */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
            <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
            <div className="absolute inset-0 w-1.5 h-1.5 border border-yellow-500 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Texte MAISON */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
          <span className="text-xs font-bold text-gray-700 tracking-wider">MAISON</span>
        </div>

        {/* Texte MAE */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1">
          <span className="text-xs font-bold text-gray-700 tracking-wider">MAE</span>
        </div>

        {/* Texte FLORICULTURE */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
          <span className="text-[8px] text-gray-600 tracking-wide">• FLORICULTURE •</span>
        </div>
      </div>
    </div>
  );
} 