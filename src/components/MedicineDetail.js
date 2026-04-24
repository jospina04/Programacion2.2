import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const MedicineDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  
  // Obtener los datos del medicamento desde el estado de navegación
  const medicine = location.state?.medicine;

  // Si no hay datos del medicamento, mostrar mensaje de error
  if (!medicine) {
    return (
      <div className="medicine-detail">
        <div className="container">
          <div className="card" style={{ textAlign: 'center', padding: '60px 20px' }}>
            <i className="fas fa-exclamation-triangle" style={{ 
              fontSize: '4rem', 
              color: 'var(--warning-color)', 
              marginBottom: '20px' 
            }}></i>
            <h2 style={{ color: 'var(--text-dark)', marginBottom: '15px' }}>
              Medicamento no encontrado
            </h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '30px' }}>
              No se pudo cargar la información del medicamento. 
              Por favor, regresa a la búsqueda e intenta nuevamente.
            </p>
            <button 
              onClick={() => navigate('/buscar')} 
              className="btn btn-primary"
            >
              <i className="fas fa-arrow-left"></i> Volver a la Búsqueda
            </button>
          </div>
        </div>
      </div>
    );
  }

  const InfoSection = ({ title, content, icon }) => (
    <div className="info-section" style={{ marginBottom: '25px' }}>
      <h3 style={{ 
        color: 'var(--primary-color)', 
        marginBottom: '15px',
        fontSize: '1.1rem',
        borderBottom: '2px solid var(--border-color)',
        paddingBottom: '8px'
      }}>
        <i className={icon}></i> {title}
      </h3>
      <div style={{ 
        padding: '15px', 
        backgroundColor: 'var(--accent-color)', 
        borderRadius: '6px',
        lineHeight: '1.6'
      }}>
        {content}
      </div>
    </div>
  );

  return (
    <div className="medicine-detail">
      <div className="container">
        {/* Header con navegación */}
        <div className="detail-header" style={{ marginBottom: '30px' }}>
          <button 
            onClick={() => navigate(-1)} 
            className="btn btn-secondary"
            style={{ marginBottom: '20px' }}
          >
            <i className="fas fa-arrow-left"></i> Volver
          </button>
          
          <div className="medicine-title" style={{ textAlign: 'center' }}>
            <h1 style={{ 
              color: 'var(--primary-color)', 
              fontSize: '2.5rem',
              marginBottom: '10px'
            }}>
              <i className="fas fa-pills"></i> {medicine.brand_name}
            </h1>
            {medicine.generic_name !== 'Genérico no disponible' && (
              <p style={{ 
                color: 'var(--text-light)', 
                fontSize: '1.2rem',
                fontStyle: 'italic'
              }}>
                Nombre genérico: {medicine.generic_name}
              </p>
            )}
          </div>
        </div>

        <div className="detail-content">
          <div style={{ display: 'grid', gap: '30px', gridTemplateColumns: '1fr 1fr' }}>
            {/* Columna izquierda */}
            <div className="left-column">
              <div className="card">
                <InfoSection
                  title="Información General"
                  icon="fas fa-info-circle"
                  content={
                    <div>
                      <div style={{ marginBottom: '10px' }}>
                        <strong>Fabricante:</strong> {medicine.manufacturer}
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <strong>Forma farmacéutica:</strong> {medicine.dosage_form}
                      </div>
                      <div style={{ marginBottom: '10px' }}>
                        <strong>Vía de administración:</strong> {medicine.route}
                      </div>
                      <div>
                        <strong>Ingrediente activo:</strong> {medicine.active_ingredient}
                      </div>
                    </div>
                  }
                />

                {medicine.purpose !== 'Propósito no disponible' && (
                  <InfoSection
                    title="Indicaciones y Uso"
                    icon="fas fa-stethoscope"
                    content={medicine.purpose}
                  />
                )}
              </div>
            </div>

            {/* Columna derecha */}
            <div className="right-column">
              <div className="card">
                {medicine.warnings !== 'Advertencias no disponibles' && (
                  <InfoSection
                    title="Advertencias Importantes"
                    icon="fas fa-exclamation-triangle"
                    content={
                      <div style={{ 
                        color: 'var(--danger-color)',
                        fontWeight: '500',
                        backgroundColor: '#fff3cd',
                        padding: '15px',
                        borderRadius: '6px',
                        border: '1px solid #ffeaa7'
                      }}>
                        <i className="fas fa-warning" style={{ marginRight: '8px' }}></i>
                        {medicine.warnings}
                      </div>
                    }
                  />
                )}

                <InfoSection
                  title="Información Adicional"
                  icon="fas fa-clipboard-list"
                  content={
                    <div>
                      <div style={{ marginBottom: '15px' }}>
                        <strong>ID del producto:</strong> {medicine.id}
                      </div>
                      <div style={{ 
                        padding: '15px',
                        backgroundColor: '#d1ecf1',
                        borderRadius: '6px',
                        border: '1px solid #bee5eb'
                      }}>
                        <p style={{ margin: '0', color: 'var(--text-dark)' }}>
                          <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
                          <strong>Importante:</strong> Esta información es solo para fines educativos. 
                          Siempre consulte con un profesional de la salud antes de usar cualquier medicamento.
                        </p>
                      </div>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          {/* Sección de acciones */}
          <div className="detail-actions" style={{ 
            marginTop: '40px', 
            textAlign: 'center',
            padding: '30px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '20px' }}>
              ¿Te fue útil esta información?
            </h3>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button 
                onClick={() => navigate('/buscar')} 
                className="btn btn-primary"
              >
                <i className="fas fa-search"></i> Buscar Otro Medicamento
              </button>
              <button 
                onClick={() => navigate('/')} 
                className="btn btn-secondary"
              >
                <i className="fas fa-home"></i> Ir al Inicio
              </button>
              <button 
                onClick={() => window.print()} 
                className="btn" 
                style={{ backgroundColor: 'var(--success-color)', color: 'white' }}
              >
                <i className="fas fa-print"></i> Imprimir Información
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicineDetail;