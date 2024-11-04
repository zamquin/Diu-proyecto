import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../stylesheets/home/home.scss';

const HomePage = () => {
  return (
    <div className="home min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="home__hero"
      >
        <h1 className="home__hero-title">
          Come sano, vive mejor
        </h1>
        <p className="home__hero-description">
          La forma más fácil de planificar tus comidas saludables y organizar tus compras semanales
        </p>
        <Link to="/menu" className="home__hero-button">
          Comenzar ahora
        </Link>
      </motion.section>

      {/* Features Section */}
      <section className="home__features">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="home__features-grid"
        >
          <Link to="/recipes" className="home__features-card">
            <div>
              <div className="home__features-card-icon">
                <span className="home__features-card-icon-emoji">🥗</span>
              </div>
              <h2 className="home__features-card-title">
                Recetas
              </h2>
              <p className="home__features-card-description">
                Descubre recetas saludables y deliciosas para toda la semana
              </p>
            </div>
          </Link>

          <Link to="/week" className="home__features-card">
            <div>
              <div className="home__features-card-icon">
                <span className="home__features-card-icon-emoji">📅</span>
              </div>
              <h2 className="home__features-card-title">
                Plan Semanal
              </h2>
              <p className="home__features-card-description">
                Organiza tu menú semanal de manera fácil y eficiente
              </p>
            </div>
          </Link>

          <Link to="/supermarket" className="home__features-card">
            <div>
              <div className="home__features-card-icon">
                <span className="home__features-card-icon-emoji">🛒</span>
              </div>
              <h2 className="home__features-card-title">
                Lista de Compras
              </h2>
              <p className="home__features-card-description">
                Genera automáticamente tu lista del supermercado
              </p>
            </div>
          </Link>
        </motion.div>
      </section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="home__cta"
      >
        <div className="home__cta-container">
          <h2 className="home__cta-title">
            ¿Listo para empezar?
          </h2>
          <p className="home__cta-description">
            Únete a nuestra comunidad y comienza a planificar tus comidas de manera inteligente
          </p>
          <Link to="/menu" className="home__cta-button">
            Crear mi primer menú
          </Link>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;