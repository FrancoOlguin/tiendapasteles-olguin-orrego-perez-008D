import { useCarrito } from '../context/CarritoContext';

export function ProductCard({ producto, onSelect }) {
  const { agregarAlCarrito } = useCarrito();

  const precioFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(producto.precio);

  return (
    <div className="card card-producto h-100 shadow-sm border-0 p-3">
      <img 
        src={producto.imagen || 'https://via.placeholder.com/300x200?text=Pastel'} 
        alt={producto.nombre} 
        className="card-img-top rounded cursor-pointer"
        style={{ height: '180px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={() => onSelect(producto)}
      />
      <div className="card-body d-flex flex-column px-0">
        <span className="text-muted text-uppercase small mb-1">
          {producto.categoria} • {producto.porciones}
        </span>
        <h5 
          className="card-title text-dark fw-bold" 
          style={{ cursor: 'pointer' }}
          onClick={() => onSelect(producto)}
        >
          {producto.nombre}
        </h5>
        <p className="card-text text-secondary small flex-grow-1">{producto.descripcion}</p>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="precio-nuevo fw-bold">{precioFormateado}</span>
          <button 
            className="btn btn-warning text-white fw-bold px-3"
            onClick={() => agregarAlCarrito(producto)}
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}