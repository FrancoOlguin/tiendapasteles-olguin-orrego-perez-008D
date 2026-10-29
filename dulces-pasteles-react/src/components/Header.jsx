import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';
import { AuthModal } from './AuthModal';

export function Header() {
  const { precioTotal, busqueda, setBusqueda } = useCarrito();
  const { usuario, logout } = useAuth();
  const [modalAuth, setModalAuth] = useState({ abierto: false, modo: 'login' });

  const totalFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precioTotal);

  const irASeccion = (e, id) => {
    e.preventDefault();
    const elemento = document.getElementById(id);
    if (elemento) {
      elemento.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
          <nav className="nav gap-3">
            <a className="nav-link text-white fw-bold px-0" href="#" onClick={(e) => irASeccion(e, 'inicio')}>Home</a>
            <a className="nav-link text-white-50 px-0" href="#" onClick={(e) => irASeccion(e, 'catalogo')}>Categorías</a>
            <a className="nav-link text-white-50 px-0" href="#" onClick={(e) => irASeccion(e, 'lanzamientos')}>Ofertas</a>
            <a className="nav-link text-white-50 px-0" href="#" onClick={(e) => irASeccion(e, 'footer')}>Nosotros</a>
            <a className="nav-link text-white-50 px-0" href="#" onClick={(e) => irASeccion(e, 'footer')}>Blog</a>
            <a className="nav-link text-white-50 px-0" href="#" onClick={(e) => irASeccion(e, 'footer')}>Contacto</a>
          </nav>
          
          <button 
            className="btn fw-bold d-flex align-items-center gap-2 px-3 py-2 shadow-sm text-white" 
            style={{ backgroundColor: '#28a745' }}
            onClick={(e) => irASeccion(e, 'carrito-seccion')}
          >
            🛒 Carrito {totalFormateado}
          </button>
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