export function Contacto() {
  return (
    <div className="container py-5 flex-grow-1" style={{ maxWidth: '650px' }}>
      <div className="bg-white p-5 rounded shadow-sm border" style={{ borderColor: '#e2d2c1' }}>
        <h2 className="text-chocolate fw-bold mb-3 text-center">Contáctanos</h2>
        <p className="text-muted text-center mb-4">¿Tienes alguna duda o quieres encargar una torta personalizada? Escríbenos.</p>
        
        <form onSubmit={(e) => { e.preventDefault(); alert('¡Mensaje enviado con éxito!'); }}>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">Tu Nombre</label>
            <input type="text" className="form-control" placeholder="Ej. María Pérez" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">Correo Electrónico</label>
            <input type="email" className="form-control" placeholder="correo@ejemplo.com" required />
          </div>
          <div className="mb-3">
            <label className="form-label fw-bold text-dark">Mensaje o Pedido Especial</label>
            <textarea className="form-control" rows="4" placeholder="Cuéntanos los detalles..." required></textarea>
          </div>
          <button type="submit" className="btn btn-warning text-white fw-bold w-100 py-2">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  );
}