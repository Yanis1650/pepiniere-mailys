export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            À propos de la Pépinière Mailys
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre histoire, nos valeurs et notre passion pour les plantes 
            qui nous anime depuis plus de 20 ans.
          </p>
        </div>

        {/* Notre Histoire */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  La Pépinière Mailys est née d'une passion familiale pour la nature et les plantes. 
                  Fondée en 2003 par Marie et Louis Mailys, notre pépinière a commencé comme un petit 
                  jardin familial où nous cultivions nos premières plantes.
                </p>
                <p>
                  Au fil des années, notre amour pour l'horticulture nous a poussés à développer 
                  notre activité et à partager notre expertise avec nos clients. Aujourd'hui, 
                  nous sommes fiers de proposer une large gamme de plantes et de fleurs, 
                  toutes cultivées avec soin et attention.
                </p>
                <p>
                  Notre équipe passionnée s'engage chaque jour à vous offrir des plantes de qualité 
                  et à vous accompagner dans vos projets de jardinage, que vous soyez débutant ou expert.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
                <div className="text-center text-green-700">
                  <svg className="w-24 h-24 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <p className="text-lg font-semibold">Photo historique</p>
                  <p className="text-sm">À remplacer par une vraie photo</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nos Valeurs */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nos Valeurs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ces valeurs guident chacune de nos actions et nous permettent de vous offrir 
              le meilleur service possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Passion</h3>
              <p className="text-gray-600">
                Notre amour pour les plantes et la nature nous pousse à toujours 
                nous améliorer et à partager notre passion avec nos clients.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Qualité</h3>
              <p className="text-gray-600">
                Nous sélectionnons avec soin chaque plante et nous nous assurons 
                qu'elle répond aux plus hauts standards de qualité.
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Service</h3>
              <p className="text-gray-600">
                Nous mettons un point d'honneur à vous accompagner avec bienveillance 
                et expertise dans tous vos projets de jardinage.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Équipe */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Notre Équipe
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une équipe passionnée et expérimentée à votre service pour vous accompagner 
              dans tous vos projets de jardinage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-center text-green-700">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Marie Mailys</h3>
              <p className="text-green-600 font-medium mb-2">Fondatrice & Horticultrice</p>
              <p className="text-gray-600 text-sm">
                Passionnée de botanique depuis plus de 25 ans, Marie supervise 
                la culture de nos plantes avec un œil expert.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-center text-green-700">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Louis Mailys</h3>
              <p className="text-green-600 font-medium mb-2">Co-fondateur & Jardinier</p>
              <p className="text-gray-600 text-sm">
                Expert en aménagement paysager, Louis vous conseille pour créer 
                le jardin de vos rêves.
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-200 to-green-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-center text-green-700">
                  <svg className="w-16 h-16 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sophie Martin</h3>
              <p className="text-green-600 font-medium mb-2">Conseillère en jardinage</p>
              <p className="text-gray-600 text-sm">
                Diplômée en horticulture, Sophie vous guide dans le choix 
                et l'entretien de vos plantes.
              </p>
            </div>
          </div>
        </section>

        {/* Notre Engagement */}
        <section className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Notre Engagement
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Nous nous engageons à respecter l'environnement et à promouvoir 
              des pratiques de jardinage durables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Cultivation responsable</h3>
                <p className="text-gray-600">
                  Nous utilisons des méthodes de culture respectueuses de l'environnement 
                  et limitons l'utilisation de produits chimiques.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Énergies renouvelables</h3>
                <p className="text-gray-600">
                  Nos serres sont alimentées par des énergies renouvelables 
                  pour réduire notre impact environnemental.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Gestion de l'eau</h3>
                <p className="text-gray-600">
                  Nous optimisons l'utilisation de l'eau grâce à des systèmes 
                  d'irrigation intelligents et du recyclage.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Formation continue</h3>
                <p className="text-gray-600">
                  Notre équipe se forme régulièrement aux nouvelles techniques 
                  de jardinage durable et écologique.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 