import { useCarrito } from '../context/CarritoContext';

export function ProductModal({ producto, onClose }) {
  const { agregarAlCarrito } = useCarrito();

  if (!producto) return null;

  const precioFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(producto.precio);

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg">
          <div className="modal-header bg-cafe-claro text-white">
            <h5 className="modal-title fw-bold">{producto.nombre}</h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>
          <div className="modal-body p-4">
            <div className="row g-4 align-items-center">
              <div className="col-12 col-md-6">
                <img 
                  src={producto.imagen || 'https://via.placeholder.com/400x300?text=Pastel'} 
                  alt={producto.nombre} 
                  className="img-fluid rounded shadow-sm"
                  style={{ width: '100vw', height: '280px', objectFit: 'cover' }}
                />
              </div>
              <div className="col-12 col-md-6">
                <span className="badge bg-secondary mb-2 text-uppercase">{producto.categoria}</span>
                <p className="text-muted small mb-2"><strong>Porciones:</strong> {producto.porciones}</p>
                <h4 className="text-chocolate fw-bold mb-3">{precioFormateado}</h4>
                <p className="text-secondary mb-4">{producto.descripcion}</p>
                
                <button 
                  className="btn btn-warning text-white fw-bold w-100 py-2 shadow-sm"
                  onClick={() => {
                    agregarAlCarrito(producto);
                    onClose();
                  }}
                >
                  Agregar al Carrito 🛒
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}