import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MedicineList from './MedicineList';
import LoadingSpinner from './LoadingSpinner';

const MedicineSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [medicines, setMedicines] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  // Cargar historial de búsqueda desde localStorage al iniciar
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory));
    }
  }, []);

  // Función para buscar medicamentos usando la API de OpenFDA
  const searchMedicines = async (term) => {
    if (!term.trim()) {
      setError('Por favor ingresa un término de búsqueda');
      return;
    }

    setLoading(true);
    setError('');
    setHasSearched(true);

    try {
      // Usar la API de OpenFDA para buscar medicamentos
      const response = await axios.get(`https://api.fda.gov/drug/label.json`, {
        params: {
          search: `openfda.brand_name:"${term}" OR openfda.generic_name:"${term}" OR description:"${term}"`,
          limit: 20
        }
      });

      if (response.data.results && response.data.results.length > 0) {
        const formattedMedicines = response.data.results.map((medicine, index) => ({
          id: medicine.id || `medicine-${index}`,
          brand_name: medicine.openfda?.brand_name?.[0] || 'Nombre no disponible',
          generic_name: medicine.openfda?.generic_name?.[0] || 'Genérico no disponible',
          manufacturer: medicine.openfda?.manufacturer_name?.[0] || 'Fabricante no disponible',
          purpose: medicine.purpose?.[0] || medicine.indications_and_usage?.[0] || 'Propósito no disponible',
          active_ingredient: medicine.active_ingredient?.[0] || 'Ingrediente activo no disponible',
          dosage_form: medicine.openfda?.dosage_form?.[0] || 'Forma de dosificación no disponible',
          route: medicine.openfda?.route?.[0] || 'Vía de administración no disponible',
          warnings: medicine.warnings?.[0] || 'Advertencias no disponibles'
        }));

        setMedicines(formattedMedicines);
        
        // Guardar en historial de búsqueda
        const newHistory = [term, ...searchHistory.filter(item => item !== term)].slice(0, 5);
        setSearchHistory(newHistory);
        localStorage.setItem('searchHistory', JSON.stringify(newHistory));
      } else {
        setMedicines([]);
        setError('No se encontraron medicamentos con ese término de búsqueda');
      }
    } catch (err) {
      console.error('Error al buscar medicamentos:', err);
      
      // Si la API falla, mostrar datos de ejemplo para propósitos de demostración
      if (term.toLowerCase().includes('paracetamol') || term.toLowerCase().includes('acetaminophen')) {
        setMedicines([
          {
            id: 'demo-1',
            brand_name: 'Tylenol',
            generic_name: 'Acetaminophen',
            manufacturer: 'Johnson & Johnson',
            purpose: 'Analgésico y antipirético para el alivio del dolor y la fiebre',
            active_ingredient: 'Acetaminophen 500mg',
            dosage_form: 'Tableta',
            route: 'Oral',
            warnings: 'No exceder la dosis recomendada. Consulte a su médico si los síntomas persisten.'
          }
        ]);
      } else if (term.toLowerCase().includes('ibuprofeno') || term.toLowerCase().includes('ibuprofen')) {
        setMedicines([
          {
            id: 'demo-2',
            brand_name: 'Advil',
            generic_name: 'Ibuprofen',
            manufacturer: 'Pfizer',
            purpose: 'Antiinflamatorio no esteroideo (AINE) para el alivio del dolor, inflamación y fiebre',
            active_ingredient: 'Ibuprofen 400mg',
            dosage_form: 'Cápsula',
            route: 'Oral',
            warnings: 'Puede causar problemas estomacales. Tomar con alimentos. No usar si es alérgico a los AINEs.'
          }
        ]);
      } else {
        setError('Error al conectar con la base de datos. Intenta con términos como "paracetamol" o "ibuprofeno" para ver ejemplos.');
        setMedicines([]);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMedicines(searchTerm);
  };

  const handleHistoryClick = (term) => {
    setSearchTerm(term);
    searchMedicines(term);
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem('searchHistory');
  };

  return (
    <div className="medicine-search">
      <div className="container">
        <div className="search-header">
          <h1 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--primary-color)' }}>
            <i className="fas fa-search"></i> Buscar Medicamentos
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--text-light)', marginBottom: '40px', fontSize: '1.1rem' }}>
            Encuentra información detallada sobre medicamentos de forma rápida y confiable
          </p>
        </div>

        <div className="card search-form-card" style={{ maxWidth: '600px', margin: '0 auto 30px' }}>
          <form onSubmit={handleSubmit} className="search-form">
            <div className="form-group">
              <label htmlFor="searchInput" className="form-label">
                <i className="fas fa-pills"></i> Nombre del Medicamento
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                <input
                  id="searchInput"
                  type="text"
                  className="form-input"
                  placeholder="Ej: paracetamol, ibuprofeno, aspirina..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  disabled={loading}
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={loading || !searchTerm.trim()}
                  style={{ minWidth: '120px' }}
                >
                  {loading ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Buscando...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-search"></i> Buscar
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>

          {/* Historial de búsqueda */}
          {searchHistory.length > 0 && (
            <div className="search-history" style={{ marginTop: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                  <i className="fas fa-history"></i> Búsquedas recientes:
                </span>
                <button 
                  onClick={clearHistory}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--danger-color)', 
                    cursor: 'pointer',
                    fontSize: '14px'
                  }}
                >
                  <i className="fas fa-trash"></i> Limpiar
                </button>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {searchHistory.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleHistoryClick(term)}
                    style={{
                      padding: '5px 12px',
                      border: '1px solid var(--border-color)',
                      borderRadius: '20px',
                      background: 'var(--accent-color)',
                      cursor: 'pointer',
                      fontSize: '14px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'var(--secondary-color)'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--accent-color)'}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Resultados */}
        {loading && <LoadingSpinner />}
        
        {error && (
          <div className="error">
            <i className="fas fa-exclamation-triangle"></i> {error}
          </div>
        )}

        {hasSearched && !loading && medicines.length > 0 && (
          <div className="results-section">
            <div style={{ marginBottom: '20px', textAlign: 'center' }}>
              <h3 style={{ color: 'var(--primary-color)' }}>
                <i className="fas fa-list"></i> Se encontraron {medicines.length} resultados
              </h3>
            </div>
            <MedicineList medicines={medicines} />
          </div>
        )}

        {hasSearched && !loading && medicines.length === 0 && !error && (
          <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-light)' }}>
            <i className="fas fa-search" style={{ fontSize: '3rem', marginBottom: '20px' }}></i>
            <h3>No se encontraron resultados</h3>
            <p>Intenta con otro término de búsqueda o revisa la ortografía.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicineSearch;