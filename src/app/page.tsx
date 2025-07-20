import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Bienvenue à la{' '}
              <span className="text-green-600">Pépinière Mailys</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Découvrez notre passion pour les fleurs et les plantes. 
              Nous vous accompagnons dans la création de votre jardin de rêve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/galerie" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Découvrir nos plantes
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous vous proposons une gamme complète de services pour répondre à tous vos besoins en jardinage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Plantes d'Intérieur
              </h3>
              <p className="text-gray-600">
                Une large sélection de plantes d'intérieur pour embellir votre espace de vie.
              </p>
            </div>

            {/* Service 2 */}
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Plantes d'Extérieur
              </h3>
              <p className="text-gray-600">
                Des plantes robustes et adaptées pour votre jardin et votre terrasse.
              </p>
            </div>

            {/* Service 3 */}
            <div className="text-center p-6 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Conseil Personnalisé
              </h3>
              <p className="text-gray-600">
                Nos experts vous accompagnent dans le choix et l'entretien de vos plantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Notre Passion pour les Plantes
              </h2>
              <p className="text-gray-600 mb-6">
                Depuis plus de 20 ans, la Pépinière Mailys cultive avec passion une large variété de plantes 
                et de fleurs. Notre expertise et notre amour de la nature nous permettent de vous proposer 
                des plantes de qualité, soigneusement sélectionnées.
              </p>
              <p className="text-gray-600 mb-8">
                Que vous soyez un jardinier débutant ou expérimenté, nous sommes là pour vous accompagner 
                dans votre projet de jardinage et vous faire découvrir la beauté de la nature.
              </p>
              <Link 
                href="/a-propos" 
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-green-700">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-lg font-semibold">Image de la pépinière</p>
                  <p className="text-sm">À remplacer par une vraie photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à embellir votre espace ?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Venez nous rendre visite et découvrez notre sélection de plantes. 
            Nos experts sont là pour vous conseiller et vous accompagner.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </div>
  );
}
