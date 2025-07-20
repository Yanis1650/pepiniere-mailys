'use client';

import { useState } from 'react';

// Données de la galerie avec carrousel de photos
const galleryItems = [
  {
    id: 1,
    title: 'Monstera Deliciosa',
    category: 'interieur',
    images: [
      { id: 1, url: '/placeholder-1.jpg', alt: 'Monstera vue d\'ensemble' },
      { id: 2, url: '/placeholder-1-2.jpg', alt: 'Monstera feuilles détaillées' },
      { id: 3, url: '/placeholder-1-3.jpg', alt: 'Monstera dans son pot' },
      { id: 4, url: '/placeholder-1-4.jpg', alt: 'Monstera en situation' }
    ],
    description: 'Une belle sélection de plantes d\'intérieur',
    price: '45€',
    care: 'Arrosage modéré, lumière indirecte'
  },
  {
    id: 2,
    title: 'Poppy Rouge',
    category: 'fleurs',
    images: [
      { id: 1, url: '/placeholder-2.jpg', alt: 'Poppy en fleur' },
      { id: 2, url: '/placeholder-2-2.jpg', alt: 'Poppy bouton floral' },
      { id: 3, url: '/placeholder-2-3.jpg', alt: 'Champ de poppies' },
      { id: 4, url: '/placeholder-2-4.jpg', alt: 'Poppy détail pétales' }
    ],
    description: 'Nos plus belles fleurs de saison',
    price: '12€',
    care: 'Plein soleil, sol bien drainé'
  },
  {
    id: 3,
    title: 'Laurier Rose',
    category: 'exterieur',
    images: [
      { id: 1, url: '/placeholder-3.jpg', alt: 'Laurier rose en fleur' },
      { id: 2, url: '/placeholder-3-2.jpg', alt: 'Laurier rose feuillage' },
      { id: 3, url: '/placeholder-3-3.jpg', alt: 'Laurier rose en pot' },
      { id: 4, url: '/placeholder-3-4.jpg', alt: 'Laurier rose haie' }
    ],
    description: 'Arbustes pour votre jardin',
    price: '28€',
    care: 'Soleil, arrosage régulier'
  },
  {
    id: 4,
    title: 'Echeveria',
    category: 'interieur',
    images: [
      { id: 1, url: '/placeholder-4.jpg', alt: 'Echeveria rosette' },
      { id: 2, url: '/placeholder-4-2.jpg', alt: 'Echeveria fleurs' },
      { id: 3, url: '/placeholder-4-3.jpg', alt: 'Collection Echeveria' },
      { id: 4, url: '/placeholder-4-4.jpg', alt: 'Echeveria en terrarium' }
    ],
    description: 'Collection de succulentes',
    price: '8€',
    care: 'Lumière vive, arrosage minimal'
  },
  {
    id: 5,
    title: 'Rosier Pierre de Ronsard',
    category: 'fleurs',
    images: [
      { id: 1, url: '/placeholder-5.jpg', alt: 'Rose Pierre de Ronsard' },
      { id: 2, url: '/placeholder-5-2.jpg', alt: 'Rosier en fleur' },
      { id: 3, url: '/placeholder-5-3.jpg', alt: 'Rosier grimpant' },
      { id: 4, url: '/placeholder-5-4.jpg', alt: 'Rose détail pétales' }
    ],
    description: 'Nos magnifiques rosiers',
    price: '35€',
    care: 'Soleil, taille régulière'
  },
  {
    id: 6,
    title: 'Basilic',
    category: 'exterieur',
    images: [
      { id: 1, url: '/placeholder-6.jpg', alt: 'Basilic frais' },
      { id: 2, url: '/placeholder-6-2.jpg', alt: 'Basilic en pot' },
      { id: 3, url: '/placeholder-6-3.jpg', alt: 'Basilic feuilles' },
      { id: 4, url: '/placeholder-6-4.jpg', alt: 'Basilic en cuisine' }
    ],
    description: 'Herbes aromatiques fraîches',
    price: '5€',
    care: 'Lumière vive, arrosage régulier'
  },
  {
    id: 7,
    title: 'Phalaenopsis',
    category: 'interieur',
    images: [
      { id: 1, url: '/placeholder-7.jpg', alt: 'Orchidée Phalaenopsis' },
      { id: 2, url: '/placeholder-7-2.jpg', alt: 'Orchidée fleurs' },
      { id: 3, url: '/placeholder-7-3.jpg', alt: 'Orchidée racines' },
      { id: 4, url: '/placeholder-7-4.jpg', alt: 'Orchidée en suspension' }
    ],
    description: 'Orchidées élégantes',
    price: '22€',
    care: 'Lumière tamisée, humidité élevée'
  },
  {
    id: 8,
    title: 'Lierre',
    category: 'exterieur',
    images: [
      { id: 1, url: '/placeholder-8.jpg', alt: 'Lierre grimpant' },
      { id: 2, url: '/placeholder-8-2.jpg', alt: 'Lierre feuillage' },
      { id: 3, url: '/placeholder-8-3.jpg', alt: 'Lierre en pot' },
      { id: 4, url: '/placeholder-8-4.jpg', alt: 'Lierre sur mur' }
    ],
    description: 'Plantes grimpantes pour vos murs',
    price: '15€',
    care: 'Ombre, arrosage modéré'
  }
];

const categories = [
  { id: 'all', name: 'Toutes les catégories' },
  { id: 'interieur', name: 'Plantes d\'intérieur' },
  { id: 'exterieur', name: 'Plantes d\'extérieur' },
  { id: 'fleurs', name: 'Fleurs' }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Notre Galerie
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de plantes et de fleurs. 
            Chaque photo représente la qualité et la beauté de nos produits.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-green-100 border border-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                setSelectedItem(item);
                setCurrentImageIndex(0);
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center relative">
                <div className="text-center text-orange-700">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm font-medium">{item.title}</p>
                </div>
                {/* Indicateur de prix */}
                <div className="absolute top-2 right-2 bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  {item.price}
                </div>
                {/* Indicateur de nombre de photos */}
                <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                  {item.images.length} photos
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                <p className="text-orange-600 font-semibold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Message si aucune photo */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucune photo trouvée pour cette catégorie.
            </p>
          </div>
        )}

        {/* Modal avec carrousel de photos */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex justify-between items-center p-6 border-b border-gray-200">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedItem.title}</h3>
                  <p className="text-orange-600 font-semibold text-lg">{selectedItem.price}</p>
                </div>
                <button
                  onClick={() => setSelectedItem(null)}
                  className="text-gray-500 hover:text-gray-700 p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Carrousel principal */}
              <div className="relative">
                <div className="aspect-video bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                  <div className="text-center text-orange-700">
                    <svg className="w-32 h-32 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="text-xl font-medium">{selectedItem.images[currentImageIndex].alt}</p>
                    <p className="text-sm">Photo {currentImageIndex + 1} sur {selectedItem.images.length}</p>
                  </div>
                </div>

                {/* Boutons de navigation */}
                {selectedItem.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setCurrentImageIndex(prev => prev === 0 ? selectedItem.images.length - 1 : prev - 1)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button
                      onClick={() => setCurrentImageIndex(prev => prev === selectedItem.images.length - 1 ? 0 : prev + 1)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 shadow-lg transition-all"
                    >
                      <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Indicateurs de position */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {selectedItem.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-orange-600' : 'bg-white bg-opacity-50'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Miniatures */}
              {selectedItem.images.length > 1 && (
                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-2 overflow-x-auto">
                    {selectedItem.images.map((image, index) => (
                      <button
                        key={image.id}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                          index === currentImageIndex ? 'border-orange-600' : 'border-gray-200'
                        }`}
                      >
                        <div className="w-full h-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center">
                          <span className="text-xs text-orange-700 font-medium">{index + 1}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Informations */}
              <div className="p-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Description</h4>
                    <p className="text-gray-600">{selectedItem.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Conseils d'entretien</h4>
                    <p className="text-gray-600">{selectedItem.care}</p>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <div className="text-2xl font-bold text-orange-600">{selectedItem.price}</div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 