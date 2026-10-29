import { useCarrito } from '../context/CarritoContext';

export function CarritoVista() {
  const {
    carrito,
    agregarAlCarrito,
    disminuirCantidad,
    eliminarDelCarrito,
    vaciarCarrito,
    precioTotal
  } = useCarrito();

  const totalFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precioTotal);

  if (carrito.length === 0) {
    return (
      <div className="container my-5 text-center">
        <div className="p-5 bg-white rounded shadow-sm border" style={{ borderColor: '#e2d2c1' }}>
          <h4 className="text-chocolate fw-bold mb-3">Tu Carrito está vacío</h4>
          <p className="text-secondary">
            Agrega algunos deliciosos pasteles desde el catálogo para comenzar tu pedido.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="text-chocolate fw-bold m-0">🛒 Detalle de tu Carrito</h3>
        <button className="btn btn-outline-danger btn-sm fw-bold" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          <div className="list-group shadow-sm">
            {carrito.map((item) => {
              const subtotal = new Intl.NumberFormat('es-CL', {
                style: 'currency',
                currency: 'CLP'
              }).format(item.precio * item.cantidad);

              return (
                <div
                  key={item.id}
                  className="list-group-item d-flex flex-column flex-sm-row align-items-center justify-content-between p-3 gap-3"
                >
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="rounded"
                      style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                    />
                    <div>
                      <h5 className="mb-1 text-dark fw-bold">{item.nombre}</h5>
                      <small className="text-secondary">
                        Precio unitario: ${item.precio.toLocaleString('es-CL')}
                      </small>
                    </div>
                  </div>

                  <div className="d-flex align-items-center gap-3">
                    <div className="btn-group btn-group-sm" role="group">
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => disminuirCantidad(item.id)}
                      >
                        -
                      </button>
                      <span className="btn btn-light disabled px-3 fw-bold text-dark">
                        {item.cantidad}
                      </span>
                      <button
                        className="btn btn-outline-secondary"
                        onClick={() => agregarAlCarrito(item)}
                      >
                        +
                      </button>
                    </div>

                    <span className="fw-bold text-chocolate style-subtotal ms-2" style={{ minWidth: '80px', textAlign: 'right' }}>
                      {subtotal}
                    </span>

                    <button
                      className="btn btn-sm btn-link text-danger p-0 ms-2"
                      title="Eliminar producto"
                      onClick={() => eliminarDelCarrito(item.id)}
                    >
                      ❌
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-12 col-lg-4">
          <div className="card shadow-sm border-0 p-4 bg-white" style={{ borderColor: '#e2d2c1' }}>
            <h5 className="fw-bold text-chocolate mb-3">Resumen del Pedido</h5>
            <div className="d-flex justify-content-between mb-3">
              <span className="text-secondary">Total a Pagar:</span>
              <span className="fw-bold fs-5 text-chocolate">{totalFormateado}</span>
            </div>
            <button className="btn btn-chocolate w-100 py-2 fw-bold">
              Proceder al Pago
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}