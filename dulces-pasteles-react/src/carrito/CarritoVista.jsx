import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { CheckoutModal } from './CheckoutModal';

export function CarritoVista() {
  const { carrito, disminuirCantidad, agregarAlCarrito, eliminarDelCarrito, vaciarCarrito, precioTotal } = useCarrito();
  const [mostrarCheckout, setMostrarCheckout] = useState(false);

  const totalFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precioTotal);

  if (carrito.length === 0) {
    return (
      <div className="card shadow-sm border-0 p-4 text-center my-4">
        <h5 className="text-muted my-3">El carrito está vacío 🍰</h5>
      </div>
    );
  }

  return (
    <>
      <div className="card shadow-sm border-0 p-4 my-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold text-dark m-0">Tu Carrito de Compras</h4>
          <button className="btn btn-outline-danger btn-sm" onClick={vaciarCarrito}>
            Vaciar Carrito
          </button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th className="text-center">Cantidad</th>
                <th className="text-end">Subtotal</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrito.map((item) => {
                const subtotal = item.precio * item.cantidad;
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center gap-3">
                        <img 
                          src={item.imagen || 'https://via.placeholder.com/60x60'} 
                          alt={item.nombre} 
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                          className="rounded"
                        />
                        <span className="fw-bold">{item.nombre}</span>
                      </div>
                    </td>
                    <td>
                      {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(item.precio)}
                    </td>
                    <td>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => disminuirCantidad(item.id)}>-</button>
                        <span className="fw-bold">{item.cantidad}</span>
                        <button className="btn btn-sm btn-outline-secondary" onClick={() => agregarAlCarrito(item)}>+</button>
                      </div>
                    </td>
                    <td className="text-end fw-bold">
                      {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(subtotal)}
                    </td>
                    <td className="text-end">
                      <button className="btn btn-sm btn-link text-danger text-decoration-none" onClick={() => eliminarDelCarrito(item.id)}>
                        ✕
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <hr />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3 mt-2">
          <div className="fs-5">
            Total: <strong className="text-success fs-4">{totalFormateado}</strong>
          </div>
          <button className="btn btn-warning text-white fw-bold px-4 py-2" onClick={() => setMostrarCheckout(true)}>
            Proceder al Pago
          </button>
        </div>
      </div>

      <CheckoutModal show={mostrarCheckout} onClose={() => setMostrarCheckout(false)} />
    </>
  );
}