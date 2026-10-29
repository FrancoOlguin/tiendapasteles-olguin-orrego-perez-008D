import { useCarrito } from '../context/CarritoContext';

export function Header() {
  const { precioTotal, busqueda, setBusqueda } = useCarrito();

  const totalFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precioTotal);

  return (
    <header className="bg-cafe-claro shadow-sm py-3 mb-4 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <div className="bg-white border rounded d-flex align-items-center justify-content-center fw-bold text-dark" style={{ width: '45px', height: '45px', fontSize: '0.8rem' }}>
            LOGO
          </div>
          <span className="ms-3 fw-bold fs-4 text-white">Dulces Pasteles</span>
        </div>

        <div className="input-group mb-3 mb-md-0 mx-md-4" style={{ maxWidth: '350px' }}>
          <input 
            type="text" 
            className="form-control border-end-0" 
            placeholder="Buscar pasteles..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button className="btn btn-light border-start-0 text-secondary" type="button">
            🔍
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-light btn-sm px-3 fw-semibold">Iniciar Sesión</button>
          <button className="btn btn-light btn-sm px-3 text-dark fw-bold">Crear Cuenta</button>
        </div>
      </div>

      <div className="container mt-3 pt-2 border-top d-flex flex-wrap justify-content-between align-items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
        <nav className="nav gap-3">
          <a className="nav-link text-white fw-bold px-0" href="#">Home</a>
          <a className="nav-link text-white-50 px-0" href="#">Categorías</a>
          <a className="nav-link text-white-50 px-0" href="#">Ofertas</a>
          <a className="nav-link text-white-50 px-0" href="#">Nosotros</a>
          <a className="nav-link text-white-50 px-0" href="#">Blog</a>
          <a className="nav-link text-white-50 px-0" href="#">Contacto</a>
        </nav>
        
        <button className="btn fw-bold d-flex align-items-center gap-2 px-3 py-2 shadow-sm text-white" style={{ backgroundColor: '#28a745' }}>
          🛒 Carrito {totalFormateado}
        </button>
      </div>
    </header>
  );
}