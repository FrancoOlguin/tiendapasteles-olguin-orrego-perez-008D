import { useState } from 'react';
import { useCarrito } from '../context/CarritoContext';
import { validarRun, sanitizarEntrada } from '../utils/validations';

export function CheckoutModal({ show, onClose }) {
  const { carrito, precioTotal, vaciarCarrito } = useCarrito();
  const [paso, setPaso] = useState('formulario');
  const [numeroOrden, setNumeroOrden] = useState('');
  const [errorRun, setErrorRun] = useState('');

  const [formData, setFormData] = useState({
    nombre: '',
    run: '',
    email: '',
    telefono: '',
    direccion: '',
    metodoPago: 'webpay',
    notas: ''
  });

  if (!show) return null;

  const totalFormateado = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP'
  }).format(precioTotal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData({
      ...formData,
      [name]: sanitizarEntrada(value)
    });

    if (name === 'run') {
      setErrorRun('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarRun(formData.run)) {
      setErrorRun('El RUN ingresado no es válido (verifique el dígito verificador y formato).');
      return;
    }

    setErrorRun('');
    const ordenGenerada = Math.floor(100000 + Math.random() * 900000);
    setNumeroOrden(ordenGenerada);
    setPaso('confirmacion');
  };

  const handleFinalizar = () => {
    vaciarCarrito();
    setPaso('formulario');
    setFormData({
      nombre: '',
      run: '',
      email: '',
      telefono: '',
      direccion: '',
      metodoPago: 'webpay',
      notas: ''
    });
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content border-0 shadow-lg">
          
          <div className="modal-header bg-cafe-claro text-white">
            <h5 className="modal-title fw-bold">
              {paso === 'formulario' ? 'Finalizar Compra 💳' : '¡Pedido Confirmado! 🎉'}
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            {paso === 'formulario' ? (
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-dark">Nombre Completo</label>
                    <input
                      type="text"
                      className="form-control"
                      name="nombre"
                      required
                      value={formData.nombre}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-dark">RUN (Ej: 12345678-9)</label>
                    <input
                      type="text"
                      className={`form-control ${errorRun ? 'is-invalid' : ''}`}
                      name="run"
                      required
                      placeholder="12.345.678-9"
                      value={formData.run}
                      onChange={handleChange}
                    />
                    {errorRun && <div className="invalid-feedback">{errorRun}</div>}
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-dark">Correo Electrónico</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-dark">Teléfono</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="telefono"
                      required
                      value={formData.telefono}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-dark">Método de Pago</label>
                    <select
                      className="form-select"
                      name="metodoPago"
                      value={formData.metodoPago}
                      onChange={handleChange}
                    >
                      <option value="webpay">Webpay / Débito - Crédito</option>
                      <option value="transferencia">Transferencia Bancaria Directa</option>
                      <option value="efectivo">Efectivo al Retirar</option>
                    </select>
                  </div>

                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold text-dark">Dirección de Despacho</label>
                    <input
                      type="text"
                      className="form-control"
                      name="direccion"
                      required
                      value={formData.direccion}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label fw-bold text-dark">Notas para la Entrega (Opcional)</label>
                    <textarea
                      className="form-control"
                      name="notas"
                      rows="2"
                      value={formData.notas}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                </div>

                <hr className="my-4" />

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <span className="text-muted small">Total a pagar:</span>
                    <h4 className="fw-bold text-success m-0">{totalFormateado}</h4>
                  </div>
                  <div className="d-flex gap-2">
                    <button type="button" className="btn btn-outline-secondary" onClick={onClose}>
                      Cancelar
                    </button>
                    <button type="submit" className="btn btn-warning text-white fw-bold px-4">
                      Pagar Ahora
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="mb-3 fs-1">✅</div>
                <h4 className="fw-bold text-dark mb-2">¡Gracias por tu compra, {formData.nombre}!</h4>
                <p className="text-muted mb-4">
                  Tu número de orden es: <strong className="text-dark">#{numeroOrden}</strong>
                </p>

                <div className="bg-light p-3 rounded mb-4 text-start mx-auto" style={{ maxWidth: '450px' }}>
                  <p className="mb-1 small"><strong>Resumen del envío:</strong></p>
                  <p className="mb-1 small text-muted"><strong>RUN:</strong> {formData.run}</p>
                  <p className="mb-1 small text-muted"><strong>Dirección:</strong> {formData.direccion}</p>
                  <p className="mb-1 small text-muted"><strong>Contacto:</strong> {formData.telefono}</p>
                  <p className="mb-0 small text-muted"><strong>Total abonado:</strong> {totalFormateado}</p>
                </div>

                <button className="btn btn-warning text-white fw-bold px-5" onClick={handleFinalizar}>
                  Aceptar y Volver a la Tienda
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}