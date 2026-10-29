export function Nosotros() {
  return (
    <div className="container py-5 flex-grow-1">
      <div className="bg-white p-5 rounded shadow-sm border" style={{ borderColor: '#e2d2c1' }}>
        <h2 className="text-chocolate fw-bold mb-4 text-center">Nuestra Historia</h2>
        <p className="text-secondary fs-6 mb-4 text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
          Fundada en el corazón de la ciudad, **Dulces Pasteles** nació del amor por la repostería artesanal y el deseo de llevar sabores caseros e inolvidables a cada celebración familiar. Cada receta es preparada diariamente con ingredientes frescos, de alta calidad y mucho cariño.
        </p>

        <div className="row g-4 mt-4">
          <div className="col-md-4 text-center">
            <div className="fs-1 mb-2">🍰</div>
            <h5 className="fw-bold text-dark">Artesanal</h5>
            <p className="text-muted small">Elaborados a mano cuidando cada detalle y textura.</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="fs-1 mb-2">🌾</div>
            <h5 className="fw-bold text-dark">Ingredientes Frescos</h5>
            <p className="text-muted small">Seleccionamos los mejores insumos locales para garantizar calidad.</p>
          </div>
          <div className="col-md-4 text-center">
            <div className="fs-1 mb-2">📍</div>
            <h5 className="fw-bold text-dark">Ubicación</h5>
            <p className="text-muted small">Av. Los Dulces #123, Local 4, Santiago.</p>
          </div>
        </div>
      </div>
    </div>
  );
}