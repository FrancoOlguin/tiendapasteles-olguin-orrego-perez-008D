export function Navbar() {
  return (
    <header className="bg-white shadow-sm py-3 mb-4 border-bottom" style={{ borderColor: '#f8d7da' }}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="d-flex align-items-center mb-3 mb-md-0">
          <div className="bg-light border rounded d-flex align-items-center justify-content-center fw-bold text-muted" style={{ width: '45px', height: '45px', fontSize: '0.8rem' }}>
            LOGO
          </div>
          <span className="ms-3 fw-bold fs-4 text-chocolate">Dulces Pasteles</span>
        </div>

        <div className="input-group mb-3 mb-md-0 mx-md-4" style={{ maxWidth: '350px' }}>
          <input type="text" className="form-control border-end-0" placeholder="Buscar pasteles..." />
          <button className="btn btn-outline-secondary bg-white border-start-0 text-secondary" type="button">
            Buscar
          </button>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-dark btn-sm px-3">Iniciar Sesión</button>
          <button className="btn btn-chocolate btn-sm px-3">Crear Cuenta</button>
        </div>
      </div>

      <div className="container mt-3 pt-2 border-top d-flex flex-wrap justify-content-between align-items-center">
        <nav className="nav gap-3">
          <a className="nav-link text-chocolate fw-bold px-0" href="#">Home</a>
          <a className="nav-link text-secondary px-0" href="#">Categorías</a>
          <a className="nav-link text-secondary px-0" href="#">Ofertas</a>
          <a className="nav-link text-secondary px-0" href="#">Nosotros</a>
          <a className="nav-link text-secondary px-0" href="#">Blog</a>
          <a className="nav-link text-secondary px-0" href="#">Contacto</a>
        </nav>
        
        <button className="btn fw-bold d-flex align-items-center gap-2 px-3 py-2 shadow-sm text-white" style={{ backgroundColor: '#28a745' }}>
          🛒 Carrito $5.000
        </button>
      </div>
    </header>
  );
}