import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

export function AuthModal({ show, onClose, modoInicial = 'login' }) {
  const [modo, setModo] = useState(modoInicial);
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    password: ''
  });

  if (!show) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      nombre: formData.nombre || formData.email.split('@')[0],
      email: formData.email
    });
    onClose();
  };

  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content border-0 shadow-lg">
          
          <div className="modal-header bg-cafe-claro text-white">
            <h5 className="modal-title fw-bold">
              {modo === 'login' ? 'Iniciar Sesión 🔑' : 'Crear Cuenta 🍰'}
            </h5>
            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
          </div>

          <div className="modal-body p-4">
            <form onSubmit={handleSubmit}>
              {modo === 'registro' && (
                <div className="mb-3">
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
              )}

              <div className="mb-3">
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

              <div className="mb-3">
                <label className="form-label fw-bold text-dark">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn-warning text-white fw-bold w-100 py-2 mt-2">
                {modo === 'login' ? 'Entrar' : 'Registrarse'}
              </button>
            </form>

            <hr className="my-4" />

            <div className="text-center">
              {modo === 'login' ? (
                <p className="mb-0 small text-muted">
                  ¿No tienes una cuenta?{' '}
                  <button className="btn btn-link p-0 text-decoration-none fw-bold" onClick={() => setModo('registro')}>
                    Regístrate aquí
                  </button>
                </p>
              ) : (
                <p className="mb-0 small text-muted">
                  ¿Ya tienes cuenta?{' '}
                  <button className="btn btn-link p-0 text-decoration-none fw-bold" onClick={() => setModo('login')}>
                    Inicia sesión
                  </button>
                </p>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}