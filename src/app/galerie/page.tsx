'use client';

import { useState } from 'react';

// Données de la galerie (à remplacer par vos vraies photos)
const galleryItems = [
  {
    id: 1,
    title: 'Plantes d\'intérieur',
    category: 'interieur',
    image: '/placeholder-1.jpg',
    description: 'Une belle sélection de plantes d\'intérieur'
  },
  {
    id: 2,
    title: 'Fleurs de saison',
    category: 'fleurs',
    image: '/placeholder-2.jpg',
    description: 'Nos plus belles fleurs de saison'
  },
  {
    id: 3,
    title: 'Arbustes',
    category: 'exterieur',
    image: '/placeholder-3.jpg',
    description: 'Arbustes pour votre jardin'
  },
  {
    id: 4,
    title: 'Plantes succulentes',
    category: 'interieur',
    image: '/placeholder-4.jpg',
    description: 'Collection de succulentes'
  },
  {
    id: 5,
    title: 'Rosiers',
    category: 'fleurs',
    image: '/placeholder-5.jpg',
    description: 'Nos magnifiques rosiers'
  },
  {
    id: 6,
    title: 'Plantes aromatiques',
    category: 'exterieur',
    image: '/placeholder-6.jpg',
    description: 'Herbes aromatiques fraîches'
  },
  {
    id: 7,
    title: 'Orchidées',
    category: 'interieur',
    image: '/placeholder-7.jpg',
    description: 'Orchidées élégantes'
  },
  {
    id: 8,
    title: 'Plantes grimpantes',
    category: 'exterieur',
    image: '/placeholder-8.jpg',
    description: 'Plantes grimpantes pour vos murs'
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
              onClick={() => setSelectedItem(item)}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
                <div className="text-center text-green-700">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-sm font-medium">Photo {item.id}</p>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
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

        {/* Modal pour afficher la photo en grand */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{selectedItem.title}</h3>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center mb-4">
                  <div className="text-center text-green-700">
                    <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <p className="text-lg font-medium">Photo {selectedItem.id}</p>
                    <p className="text-sm">Vue agrandie</p>
                  </div>
                </div>
                
                <p className="text-gray-600">{selectedItem.description}</p>
                
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
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