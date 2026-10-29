export function Footer() {
  return (
    <footer className="bg-cafe-claro text-white border-top mt-auto py-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
      <div className="container">
        <div className="row g-4">
          
          <div className="col-12 col-md-4">
            <h5 className="fw-bold text-white mb-3">Dulces Pasteles</h5>
            <p className="text-light small opacity-75">
              Los mejores pasteles artesanales, elaborados con ingredientes de primera calidad para endulzar tus momentos especiales.
            </p>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="fw-bold text-white mb-3">Enlaces Rápidos</h6>
            <ul className="list-unstyled small">
              <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75 hover-white">Inicio</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75 hover-white">Catálogo de Productos</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75 hover-white">Sobre Nosotros</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-light opacity-75 hover-white">Términos y Condiciones</a></li>
            </ul>
          </div>

          <div className="col-6 col-md-4">
            <h6 className="fw-bold text-white mb-3">Contacto</h6>
            <ul className="list-unstyled small text-light opacity-75">
              <li className="mb-2">📍 Santiago, Chile</li>
              <li className="mb-2">📞 +56 9 1234 5678</li>
              <li className="mb-2">✉️ contacto@dulcespasteles.cl</li>
            </ul>
          </div>

        </div>

        <hr className="my-4" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        <div className="text-center text-light opacity-75 small">
          © {new Date().getFullYear()} Dulces Pasteles. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}