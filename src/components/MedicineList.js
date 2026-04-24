import React from 'react';
import { Link } from 'react-router-dom';

const MedicineList = ({ medicines }) => {
  return (
    <div className="medicine-list">
      <div className="grid">
        {medicines.map((medicine) => (
          <div key={medicine.id} className="card medicine-card">
            <div className="medicine-header">
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '10px', fontSize: '1.2rem' }}>
                <i className="fas fa-pills"></i> {medicine.brand_name}
              </h3>
              {medicine.generic_name !== 'Genérico no disponible' && (
                <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', marginBottom: '15px' }}>
                  <strong>Genérico:</strong> {medicine.generic_name}
                </p>
              )}
            </div>

            <div className="medicine-info">
              <div className="info-item" style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                  <i className="fas fa-industry"></i> Fabricante:
                </span>
                <span style={{ marginLeft: '8px', color: 'var(--text-light)' }}>
                  {medicine.manufacturer}
                </span>
              </div>

              <div className="info-item" style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                  <i className="fas fa-capsules"></i> Forma:
                </span>
                <span style={{ marginLeft: '8px', color: 'var(--text-light)' }}>
                  {medicine.dosage_form}
                </span>
              </div>

              <div className="info-item" style={{ marginBottom: '12px' }}>
                <span style={{ fontWeight: '500', color: 'var(--text-dark)' }}>
                  <i className="fas fa-route"></i> Vía:
                </span>
                <span style={{ marginLeft: '8px', color: 'var(--text-light)' }}>
                  {medicine.route}
                </span>
              </div>

              {medicine.purpose !== 'Propósito no disponible' && (
                <div className="purpose-section" style={{ 
                  marginTop: '15px', 
                  padding: '10px', 
                  backgroundColor: 'var(--accent-color)', 
                  borderRadius: '6px',
                  borderLeft: '4px solid var(--secondary-color)'
                }}>
                  <span style={{ fontWeight: '500', color: 'var(--text-dark)', display: 'block', marginBottom: '5px' }}>
                    <i className="fas fa-info-circle"></i> Propósito:
                  </span>
                  <p style={{ 
                    color: 'var(--text-light)', 
                    fontSize: '0.9rem', 
                    lineHeight: '1.4',
                    margin: '0'
                  }}>
                    {medicine.purpose.length > 100 
                      ? `${medicine.purpose.substring(0, 100)}...` 
                      : medicine.purpose
                    }
                  </p>
                </div>
              )}
            </div>

            <div className="medicine-actions" style={{ marginTop: '20px', textAlign: 'center' }}>
              <Link 
                to={`/medicamento/${medicine.id}`}
                state={{ medicine }}
                className="btn btn-primary"
                style={{ width: '100%', textDecoration: 'none' }}
              >
                <i className="fas fa-eye"></i> Ver Detalles Completos
              </Link>
            </div>
          </div>
        ))}
      </div>

      {medicines.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          color: 'var(--text-light)'
        }}>
          <i className="fas fa-search" style={{ fontSize: '4rem', marginBottom: '20px', opacity: '0.5' }}></i>
          <h3 style={{ marginBottom: '10px' }}>No hay medicamentos para mostrar</h3>
          <p>Realiza una búsqueda para ver los resultados aquí.</p>
        </div>
      )}
    </div>
  );
};

export default MedicineList;