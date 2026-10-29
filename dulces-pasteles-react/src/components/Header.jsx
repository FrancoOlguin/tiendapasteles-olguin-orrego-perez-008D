import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';

export function Header() {
  const { precioTotal, busqueda, setBusqueda } = useCarrito();
  const { usuario, logout } = useAuth();
  const [modalAuth, setModalAuth] = useState({ abierto: false, modo: 'login' });
  const [categorias, setCategorias] = useState([]);
  const navigate = useNavigate();

  const totalFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precioTotal);

  useEffect(() => {
    fetch('http://localhost:4000/productos')
      .then((res) => res.json())
      .then((data) => {
        const unicas = [...new Set(data.map((p) => p.categoria))];
        setCategorias(unicas);
      })
      .catch((err) => console.error('Error al cargar categorías en el header:', err));
  }, []);

  return (
    <>
      <header className="bg-cafe-claro shadow-sm py-3 mb-4 border-bottom" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          
          <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 text-decoration-none">
            <div className="bg-white border rounded d-flex align-items-center justify-content-center fw-bold text-dark" style={{ width: '45px', height: '45px', fontSize: '0.8rem' }}>
              LOGO
            </div>
            <span className="ms-3 fw-bold fs-4 text-white">Dulces Pasteles</span>
          </Link>

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
            {usuario ? (
              <div className="d-flex align-items-center gap-2">
                <span className="text-white fw-semibold small">Hola, {usuario.nombre}</span>
                <button className="btn btn-outline-light btn-sm" onClick={logout}>
                  Salir
                </button>
              </div>
            ) : (
              <>
                <button 
                  className="btn btn-outline-light btn-sm px-3 fw-semibold"
                  onClick={() => setModalAuth({ abierto: true, modo: 'login' })}
                >
                  Iniciar Sesión
                </button>
                <button 
                  className="btn btn-light btn-sm px-3 text-dark fw-bold"
                  onClick={() => setModalAuth({ abierto: true, modo: 'registro' })}
                >
                  Crear Cuenta
                </button>
              </>
            )}
          </div>
        </div>

        <div className="container mt-3 pt-2 border-top d-flex flex-wrap justify-content-between align-items-center" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
          <nav className="nav align-items-center gap-4">
            <Link className="nav-link text-white fw-bold px-0" to="/">Home</Link>
            
            {/* Menú Desplegable Dinámico con tus categorías reales */}
            <div className="dropdown">
              <a 
                className="nav-link text-white-50 px-0 dropdown-toggle text-decoration-none" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown" 
                aria-expanded="false"
              >
                Categorías
              </a>
              <ul className="dropdown-menu shadow-sm border-0">
                <li><Link className="dropdown-item" to="/?cat=Todas">Todas</Link></li>
                <li><hr className="dropdown-divider" /></li>
                {categorias.map((cat) => (
                  <li key={cat}>
                    <Link className="dropdown-item" to={`/?cat=${cat}`}>
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <Link className="nav-link text-white-50 px-0" to="/">Ofertas</Link>
            <Link className="nav-link text-white-50 px-0" to="/nosotros">Nosotros</Link>
            <Link className="nav-link text-white-50 px-0" to="/contacto">Contacto</Link>
          </nav>
          
          <Link 
            to="/carrito" 
            className="btn fw-bold d-flex align-items-center gap-2 px-3 py-2 shadow-sm text-white text-decoration-none" 
            style={{ backgroundColor: '#28a745' }}
          >
            🛒 Carrito {totalFormateado}
          </Link>
        </div>
      </header>

      <AuthModal 
        show={modalAuth.abierto} 
        modoInicial={modalAuth.modo} 
        onClose={() => setModalAuth({ abierto: false, modo: 'login' })} 
      />
    </>
  );
}