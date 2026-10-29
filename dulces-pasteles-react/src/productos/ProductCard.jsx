export function ProductCard({ producto }) {
  const precioFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(producto.precio);

  return (
    <div className="card card-producto h-100 shadow-sm border-0 p-3">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="card-img-top rounded"
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <div className="card-body d-flex flex-column px-0">
        <span className="text-muted text-uppercase small mb-1">
          {producto.categoria} • {producto.porciones}
        </span>
        <h5 className="card-title text-dark fw-bold">{producto.nombre}</h5>
        <p className="card-text text-secondary small flex-grow-1">{producto.descripcion}</p>
        
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="precio-nuevo fw-bold">{precioFormateado}</span>
          <button className="btn btn-warning text-white fw-bold px-3">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}