import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <i className="fas fa-pills"></i>
            <span>Farmacia Digital</span>
          </div>
          <nav className="nav-menu">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              <i className="fas fa-home"></i> Inicio
            </Link>
            <Link 
              to="/buscar" 
              className={`nav-link ${location.pathname === '/buscar' ? 'active' : ''}`}
            >
              <i className="fas fa-search"></i> Buscar Medicamentos
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;