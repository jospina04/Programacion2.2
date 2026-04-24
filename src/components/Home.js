import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: 'fas fa-search',
      title: 'Búsqueda Rápida',
      description: 'Encuentra medicamentos de forma rápida y sencilla usando nuestra base de datos actualizada.'
    },
    {
      icon: 'fas fa-info-circle',
      title: 'Información Detallada',
      description: 'Accede a información completa sobre composición, usos y efectos de cada medicamento.'
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Diseño Responsivo',
      description: 'Utiliza la aplicación desde cualquier dispositivo: móvil, tablet o computadora.'
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'Información Confiable',
      description: 'Datos verificados y actualizados de fuentes oficiales y confiables.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Medicamentos', icon: 'fas fa-pills' },
    { number: '50+', label: 'Categorías', icon: 'fas fa-list' },
    { number: '24/7', label: 'Disponible', icon: 'fas fa-clock' },
    { number: '100%', label: 'Confiable', icon: 'fas fa-check-circle' }
  ];

  return (
    <div className="home">
      <section className="hero">
        <div className="container">
          <h1>
            <i className="fas fa-heart-pulse"></i>
            Bienvenido a Farmacia Digital
          </h1>
          <p>
            Tu plataforma confiable para búsqueda y consulta de información de medicamentos.
            Desarrollado por Jimena Ospina Vergara como proyecto académico.
          </p>
          <div style={{ marginTop: '30px' }}>
            <Link to="/buscar" className="btn btn-primary" style={{ marginRight: '15px' }}>
              <i className="fas fa-search"></i> Buscar Medicamentos
            </Link>
            <button className="btn btn-secondary" onClick={() => 
              document.getElementById('features').scrollIntoView({ behavior: 'smooth' })
            }>
              <i className="fas fa-arrow-down"></i> Explorar Características
            </button>
          </div>
        </div>
      </section>

      <section className="stats-section" style={{ padding: '60px 0', backgroundColor: 'white' }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card" style={{ textAlign: 'center', padding: '20px' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '10px' }}>
                  <i className={stat.icon}></i>
                </div>
                <h3 style={{ fontSize: '2rem', fontWeight: 'bold', margin: '10px 0', color: 'var(--primary-color)' }}>
                  {stat.number}
                </h3>
                <p style={{ color: 'var(--text-light)', fontSize: '1.1rem' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="features-section" style={{ padding: '60px 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '2.5rem', color: 'var(--primary-color)' }}>
            Características Principales
          </h2>
          <div className="grid">
            {features.map((feature, index) => (
              <div key={index} className="card feature-card">
                <div style={{ fontSize: '3rem', color: 'var(--secondary-color)', marginBottom: '20px' }}>
                  <i className={feature.icon}></i>
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: 'var(--primary-color)' }}>
                  {feature.title}
                </h3>
                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" style={{ 
        padding: '60px 0', 
        backgroundColor: 'var(--primary-color)', 
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            ¿Listo para comenzar?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: '0.9' }}>
            Explora nuestra base de datos de medicamentos y encuentra la información que necesitas.
          </p>
          <Link to="/buscar" className="btn" style={{ 
            backgroundColor: 'white', 
            color: 'var(--primary-color)',
            fontWeight: 'bold',
            padding: '15px 30px',
            fontSize: '1.1rem'
          }}>
            <i className="fas fa-rocket"></i> Comenzar Búsqueda
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;