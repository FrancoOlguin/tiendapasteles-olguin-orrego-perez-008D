import { Navbar } from './components/Navbar';
import { ProductGrid } from './productos/ProductGrid';

function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff8fa' }}>
      <Navbar />
      
      <div className="container mb-5">
        <div className="p-5 text-center bg-white rounded shadow-sm border" style={{ minHeight: '220px', backgroundColor: '#fff0f3', borderColor: '#f8d7da' }}>
          <h2 className="text-chocolate fw-bold">Nuevos Lanzamientos</h2>
          <p className="text-muted">Descubre los últimos pasteles disponibles en nuestra tienda.</p>
        </div>
      </div>

      <main className="container pb-5">
        <ProductGrid />
      </main>
    </div>
  );
}

export default App;