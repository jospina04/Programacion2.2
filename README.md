# 💊 Farmacia Digital - Aplicación Web React

## 📋 Descripción del Proyecto

Aplicación web desarrollada en React.js para la búsqueda y consulta de información de medicamentos. Este proyecto fue creado específicamente por **Jimena Ospina Vergara** como parte de un ejercicio académico de desarrollo frontend.

La aplicación permite a los usuarios buscar medicamentos por nombre y obtener información detallada sobre composición, fabricante, forma farmacéutica, indicaciones y advertencias importantes.

## ✨ Características Implementadas

### ✅ Requisitos Cumplidos

- **Interfaz de usuario interactiva y responsiva**: Diseño moderno que se adapta a dispositivos móviles, tablets y computadoras
- **Componentes funcionales en React**: Toda la aplicación utiliza componentes funcionales con hooks
- **Consumo de API pública**: Integración con la API de OpenFDA para obtener datos reales de medicamentos
- **Estilos con CSS**: Diseño personalizado con CSS puro, variables CSS y animaciones
- **Código bien estructurado**: Organización modular y buenas prácticas de desarrollo

### 🚀 Funcionalidades Principales

- **🏠 Página de Inicio**: Presentación de la aplicación con estadísticas y características
- **🔍 Búsqueda de Medicamentos**: Motor de búsqueda con validaciones y historial
- **📋 Lista de Resultados**: Visualización en tarjetas con información resumida
- **📄 Detalles Completos**: Página dedicada con información completa del medicamento
- **📱 Diseño Responsivo**: Optimizado para todos los tamaños de pantalla
- **💾 Historial de Búsqueda**: Guarda las búsquedas recientes usando localStorage
- **🎨 Animaciones**: Transiciones suaves y efectos visuales
- **⚠️ Manejo de Errores**: Mensajes informativos y estados de carga

## 🛠️ Tecnologías Utilizadas

- **React 18.2.0**: Biblioteca principal para la interfaz de usuario
- **React Router DOM 6.8.1**: Navegación entre páginas
- **Axios 1.3.4**: Cliente HTTP para consumir la API
- **CSS3**: Estilos personalizados con variables CSS y animaciones
- **Font Awesome**: Iconos y elementos gráficos
- **OpenFDA API**: API pública para datos de medicamentos

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   # Si tienes git configurado
   git clone [URL-del-repositorio]
   
   # O descarga y extrae los archivos del proyecto
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm start
   ```
   La aplicación se abrirá en `http://localhost:3000`

4. **Construir para producción**
   ```bash
   npm run build
   ```

## 📁 Estructura del Proyecto

```
farmacia-jimena-app/
├── public/
│   └── index.html                 # Archivo HTML principal
├── src/
│   ├── components/               # Componentes React
│   │   ├── Header.js            # Navegación superior
│   │   ├── Footer.js            # Pie de página
│   │   ├── Home.js              # Página de inicio
│   │   ├── MedicineSearch.js    # Búsqueda de medicamentos
│   │   ├── MedicineList.js      # Lista de resultados
│   │   ├── MedicineDetail.js    # Detalles del medicamento
│   │   └── LoadingSpinner.js    # Indicador de carga
│   ├── App.js                   # Componente principal
│   ├── App.css                  # Estilos del componente App
│   ├── index.js                 # Punto de entrada
│   └── index.css                # Estilos globales
├── package.json                 # Configuración del proyecto
└── README.md                    # Este archivo
```

## 🔗 API Utilizada

### OpenFDA API
- **URL Base**: `https://api.fda.gov/drug/label.json`
- **Descripción**: API pública de la FDA (Food and Drug Administration) de Estados Unidos
- **Funcionalidad**: Proporciona información oficial sobre medicamentos aprobados
- **Parámetros de búsqueda**: 
  - `search`: Término de búsqueda en nombre comercial, genérico o descripción
  - `limit`: Número máximo de resultados (configurado a 20)

### Datos de Respaldo
En caso de que la API no esté disponible, la aplicación incluye datos de ejemplo para medicamentos comunes como:
- Paracetamol/Acetaminophen (Tylenol)
- Ibuprofeno (Advil)

## 🎯 Casos de Uso

1. **Búsqueda Básica**
   - Ingresar nombre del medicamento
   - Ver lista de resultados
   - Seleccionar para ver detalles

2. **Navegación**
   - Usar el menú superior para navegar
   - Regresar desde cualquier página
   - Acceso directo desde la página de inicio

3. **Información Detallada**
   - Ver composición y fabricante
   - Consultar indicaciones de uso
   - Revisar advertencias importantes
   - Imprimir información

## 🎨 Características de Diseño

- **Paleta de Colores**: Azules profesionales (#2c5aa0, #5a9bd4)
- **Tipografía**: Segoe UI para legibilidad óptima
- **Iconografía**: Font Awesome para elementos visuales
- **Responsive Design**: Grid CSS y Flexbox para adaptabilidad
- **Animaciones**: Transiciones suaves y efectos de hover

## 🔧 Funcionalidades Técnicas

- **Estado Local**: useState para manejo de datos del componente
- **Efectos**: useEffect para operaciones asíncronas
- **Navegación**: React Router para SPA (Single Page Application)
- **Almacenamiento Local**: localStorage para historial de búsqueda
- **Manejo de Errores**: Try-catch con mensajes informativos
- **Loading States**: Indicadores de carga durante peticiones
- **Validaciones**: Formularios con validación client-side

## 👩‍💻 Desarrollado Por

**Jimena Ospina Vergara**  
Proyecto académico - Desarrollo Frontend con React.js

## 📝 Notas Importantes

- Esta es una aplicación educativa con fines académicos
- La información de medicamentos proviene de fuentes oficiales (FDA)
- Siempre consulte con un profesional de la salud antes de usar medicamentos
- La aplicación requiere conexión a internet para obtener datos actualizados

## 🚀 Próximas Mejoras

- [ ] Filtros avanzados de búsqueda
- [ ] Favoritos y lista de medicamentos guardados
- [ ] Modo oscuro/claro
- [ ] Búsqueda por código de barras
- [ ] Integración con más APIs farmacéuticas
- [ ] Notificaciones de interacciones medicamentosas

## 📄 Licencia

MIT License - Proyecto educativo desarrollado por Jimena Ospina Vergara
